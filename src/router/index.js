import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { setToken, getToken, canTurnTo, formatRouters } from '@/libs/util'
import config from '@/config'

const { homeName } = config
Vue.use(Router)
// 存放加载的动态路由
let dyncRouters = []

let BASE_URL = ''
switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = config.publicPath.dev // 这里是本地的请求url
    break
  case 'production':
    BASE_URL = config.publicPath.pro // 生产环境url
    break
}

const router = new Router({
  base: BASE_URL,
  routes: routes,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'

const permitList = [LOGIN_PAGE_NAME, 'loginSuccess']

const turnTo = (to, access, next) => {
  if (!to.name) {
    // 防止地址栏刷新动态路由跳转到401或404,先跳转到homeName
    router.replace(to)
  } else if (canTurnTo(to.name, access, routes)) {
    next()
  } else {
    // 无权限，重定向到401页面
    next({ replace: true, name: 'error_401' })
  }
}
const asyncRoutes = [
	{
	  path: '/main',
	  component: resolve => require(['@/components/main'], resolve),
	  children: [
		{
			path: 't1',
			name: 't1',
			meta: {
			  hideInMenu: true
			},
			component: () => import('@/view/module/system/user/index.vue')
		 },
		{
			path: 't2',
			name: 't2',
			component: () => import('@/view/module/system/role/index.vue')
		},
		{
			path: 't3',
			name: 't3',
			component: () => import('@/view/module/system/api/index.vue')
		},
		{
			path: 't4',
			name: 't4',
			component: () => import('@/view/module/system/app/index.vue')
		}
	]
  }
]
router.addRoutes(asyncRoutes)
routes.push(...dyncRouters)
console.log(routes)
//turnTo(to, store.state.user.access, next)
//router.beforeEach((to, from, next) => {
  //iView.LoadingBar.start()
	/*if (!dyncRouters || dyncRouters.length === 0) {
	  dyncRouters = dyncRouters.concat(...formatRouters(store.state.user.menus, store.state.user.access))
	  // 防止重复添加路由报错
	  router.addRoutes(dyncRouters)
	  routes.push(...dyncRouters)
	}
	turnTo(to, store.state.user.access, next)*/
//})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router