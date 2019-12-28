<template>
	<div>
		<i-table border :content="self" :columns="columns7" :data="activityData"></i-table>
	</div>
</template>

<script>
  //import {activityList} from '@/api/api'
  export default {
	data () {
	  return {
		self: this,
		columns7: [
		  {
			  title: '活动编号',
			  key: 'campaignId'
		  },
		  {
			  title: '公司全称',
			  key: 'fullName'
		  },
		  {
				title: '公司简称',
				key: 'simpleName',
		  },
		  {
				title: '更新时间',
				key: 'updateTime'
		  },
		  {
				title: '操作人',
				key: 'updateUser'
		  }
		],
		activityData: [],
		search: {
		  dateStart: null,
		  dateEnd: null,
		  campaignName: null,
		  campaignId: null,
		  extrend_json: null
		}
	  }
	},
	created() {
	  this.loadList()
	},
	methods: {
	  loadList() {
		  /*activityList(this.search).then(rs => {
		    if(rs.success) {
			    console.log(rs.data)
					this.activityData = rs.data
				}
		  })*/
	  }
	}
  }
</script>

<style>
</style>
