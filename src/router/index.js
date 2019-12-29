import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import config from '@/config'
import { setToken, getToken, getMenuByRouter} from '@/libs/util'
import asyncRoutes from './asyncRouters.js'
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
  //mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'
router.beforeEach((to, from, next) => {
  const token = getToken() //window.localStorage.getItem('token')
  console.log('进入路由',to)
  if (!to.meta.name || to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
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
      next()
    } else {
      //console.log('该页面需要登陆')
      next({
        name: 'login' // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
		//console.log(dyncRouters)
    next()
  }
})
export default router