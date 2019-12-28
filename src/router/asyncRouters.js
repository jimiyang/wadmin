export default [
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
		name: '_home',
		redirect: '/home',
		meta: {
			requireAuth: true
		},
	  component: resolve => require(['@/components/main'], resolve),
	  children: [
			{
				path: '/system',
				name: 'system',
				meta: {
					requireAuth: true,
					title: '菜单资源'
				},
				component: () => import('@/view/module/system/menus/index.vue')
		 	},
			{
				path: 't2',
				name: 't2',
				meta: {
					requireAuth: true,
					title: '角色信息'
				},
				component: () => import('@/view/module/system/role/index.vue')
			},
			{
				path: 't4',
				name: 't4',
				meta: {
					requireAuth: true,
					title: '系统用户'
				},
				component: () => import('@/view/module/system/user/index.vue')
			},
			{
				path: 'userinfo',
				name: 'userinfo',
				meta: {
					requireAuth: true,
					title: '新增/编辑用户'
				},
				component: () => import('@/view/module/system/user/userInfo.vue')
			},
			{
				path: 'company',
				name: 'company',
				meta: {
					requireAuth: true,
					title: '公司管理'
				},
				component: () => import('@/view/module/company/index.vue')
			},
			{
				path: 'developer',
				name: 'developer',
				meta: {
					requireAuth: true,
					title: '部门管理'
				},
				component: () => import('@/view/module/system/developer/index.vue')
			},
			{
				path: 'product',
				name: 'product',
				meta: {
					requireAuth: true,
					title: '产品'
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