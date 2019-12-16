import Main from '@/components/main'
// 左侧菜单栏数据 
export default [
	{
		text: '系统管理',
		type: 'md-albums',
		children: [
			{
				type: 'md-menu',
				name: 't1',
				text: '菜单资源'
			},
			{
				type: 'ios-folder',
				name: 't2',
				text: '角色信息'
			},
			{
				type: 'ios-contacts',
				name: 't3',
				text: '应用信息'
			},
			{
				type: 'md-cog',
				name: 't4',
				text: '系统用户'
			},
			{
				type: 'logo-xbox',
				name: 'product',
				text: '产品模板',
				children: [
				  {
					path: 'list',
					name: 'list',
					text: '模板列表'
				  },
				  {
					path: 'add',
					name: 'add',
					text: '创建模板'
				  }
				]
			},
			{
				type: 'md-cube',
				name: 'activity',
				text: '活动模板'
			},
		]
	}
]