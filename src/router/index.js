import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
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
  //base: BASE_URL,
  routes: routes,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'
const asyncRoutes = [
	{
	  path: '/login',
	  name: 'login',
	  meta: {
	    title: 'Login - 登录',
	    hideInMenu: true
	  },
	  component: () => import('@/view/login/login.vue')
	},
	{
		path: '/',
		//name: '_home',
		redirect: '/home',
		meta: {
			requireAuth: true
		},
	  component: resolve => require(['@/components/main'], resolve),
	  children: [
			{
				path: 't1',
				name: 't1',
				meta: {
					requireAuth: true
				},
				component: () => import('@/view/module/system/menus/index.vue')
			 },
			{
				path: 't2',
				name: 't2',
				meta: {
					requireAuth: true
				},
				component: () => import('@/view/module/system/role/index.vue')
			},
			{
				path: 't3',
				name: 't3',
				meta: {
					requireAuth: true
				},
				component: () => import('@/view/module/system/api/index.vue')
			},
			{
				path: 't4',
				name: 't4',
				meta: {
					requireAuth: true
				},
				component: () => import('@/view/module/system/user/index.vue')
			},
			{
			  path: 'product',
			  name: 'product',
			  meta: {
				requireAuth: true
			  },
			  component: () => import('@/view/module/product/index.vue')
			},
			{
			  path: 'add',
			  name: 'add',
			  component: () => import('@/view/module/product/add/add.vue')
			},
			{
				path: 'activity',
				name: 'activity',
				meta: {
					requireAuth: true,
					title: '活动',
				},
				component: () => import('@/view/module/activity/index.vue')
			}
		]
  }
]
if (!dyncRouters || dyncRouters.length === 0) {
	dyncRouters = dyncRouters.concat(asyncRoutes)
	router.addRoutes(dyncRouters)
	routes.push(...dyncRouters)
	//防止重复添加路由报错
	const routerPush = Router.prototype.push
	Router.prototype.push = function push(location) {
		return routerPush.call(this, location).catch(error=> error)
	}
}

export default router