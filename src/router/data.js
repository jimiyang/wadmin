// 左侧菜单栏数据 
export default [
	{
		name: '系统管理',
		type: 'md-albums',
		children: [
			{
				type: 'md-menu',
				urlPath: '/system',
				name: '菜单资源',
			},
			{
				type: 'ios-folder',
				urlPath: 'company',
				name: '公司管理'
			},
			{
				type: 'ios-folder',
				urlPath: 't2',
				name: '角色信息'
			},
			{
				type: 'md-cog',
				urlPath: 't4',
				name: '系统用户'
			},
			{
				type: 'logo-xbox',
				urlPath: 'product',
				name: '产品模板',
				children: [
				  {
					urlPath: 'list',
					name: 'list',
					name: '模板列表'
				  },
				  {
					urlPath: 'add',
					name: 'add',
					name: '创建模板'
				  }
				]
			},
			{
				type: 'md-cube',
				urlPath: 'activity',
				name: '活动模板'
			},
		]
	}
]