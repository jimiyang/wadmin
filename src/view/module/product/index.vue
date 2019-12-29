<style>
  @import url("./style.less");
</style>
<template>
  <div>
	<Button type="primary" @click="add">添加模板</Button>
    <Button @click="handleSelectAll(true)">Set all selected</Button>
    <Button @click="handleSelectAll(false)">Cancel all selected</Button>	
    <Table class="mt10" border ref="selection" :columns="columns" :data="data"></Table>
	<div class="g-tr">
	  <Page :total="100" show-elevator />
	</div>
  </div>
</template>
<script>
  export default{
	data() {
	  return{
	    columns: [
		  {
			type: 'selection',
			width: 60,
			align: 'center'
		  },
		  {
			title: '产品名称',
			align: 'center',
			key: 'name'
		  },
		  {
			title: '产品封面',
			key: 'cover'
		  },
		  {
			title: '模板url',
			key: 'url'
		  },
		  {
			title: '操作',
			render: (h, params) => {
			  return h('div', [
				h('span', {
				  props: {
					type: 'text',
					size: 'small',
				  },
				  class: 'op',
				  on: {
					click: () => {
					  //console.log('edit', params)
					}
				  }
				}, '编辑'),
				h('span', {
				  props: {
					type: 'text',
					size: 'small'
				  },
				  class: 'op',
				  on: {
					click: () => {
					  //console.log('del', params)
					}
				  }
				}, '删除')
			  ]);
			}
		  }
		],
		data: [
		  {
			name: 'John Brown',
			cover: 18,
			url: 'New York No. 1 Lake Park'  
		  }
		]
	  }
	},
	methods: {
	  handleSelectAll(status) {
		
	  },
	  add() {
		console.log(11111)
		this.$router.push({name: 'add'})
	  }
	}
  }
</script>

<style>
</style>
