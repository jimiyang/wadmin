import Main from '@/components/main'
// 左侧菜单栏数据 
export default [
	{
		text: '系统管理',
		type: 'el-icon-folder',
		children: [
			{
				type: 'el-icon-files',
				name: 't1',
				text: '菜单资源'
			},
			{
				type: 'el-icon-receiving',
				name: 't2',
				text: '角色信息'
			},
			{
				type: 'el-icon-chat-dot-square',
				name: 't3',
				text: '应用信息'
			},
			{
				type: 'el-icon-setting',
				name: 't4',
				text: '系统用户'
			},
		]
	}
]