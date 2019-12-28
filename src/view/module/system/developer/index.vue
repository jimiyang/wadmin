<template>
  <div>
    <Card>
      <Form ref="searchForm"
            :model="pageInfo"
            inline
            :label-width="80">
        <FormItem label="部门名称" prop="name">
          <Input type="text" v-model="pageInfo.name" placeholder="请输入关键字" class="w260"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSearch(1)">查询</Button>&nbsp;
          <Button @click="handleResetForm('searchForm')">重置</Button>
        </FormItem>
      </Form>

      <div class="search-con search-con-top">
        <Button type="primary" @click="handleModal()">添加</Button>
        <Button type="primary" class="ml10">批量删除</Button>
      </div>

      <Table border :columns="columns" :data="data" :loading="loading">
        <template slot="status" slot-scope="{ row }">
          <Badge v-if="row.status===1" status="success" text="正常"/>
          <Badge v-else-if="row.status===2" status="warning" text="锁定"/>
          <Badge v-else="" status="error" text="禁用"/>
        </template>
        <template slot="action" slot-scope="{ row }">
          <a  @click="handleModal(row)">编辑</a>&nbsp;
          <a  @click="deleteDept(row)">删除</a>&nbsp;  
        </template>
      </Table>
      <Page transfer :total="pageInfo.total" :current="pageInfo.page" :page-size="pageInfo.limit" show-elevator
            show-sizer
            show-total
            @on-change="handlePage" @on-page-size-change='handlePageSize'></Page>
    </Card>
  </div>
</template>

<script>
  import {getWebList, deleteSingelDept} from '@/api/department'
  export default {
    name: 'SystemDeveloper',
    data() {
      return {
        loading: false,
        pageInfo: {
          page: 1,
          size: 10
        },
        userInfo: JSON.parse(window.localStorage.getItem('userInfo')),
        columns: [
          {
            type: 'selection',
            width: 60,
          },
          {
            title: '部门名称',
            key: 'fullName',
            width: 200
          },
          {
            title: '部门简称',
            key: 'simpleName',
            width: 150
          },
          {
            title: '地址',
            key: 'address',
            width: 200
          },
          {
            title: '公司id',
            key: 'compId',
            width: 200
          },
          {
            title: '部门人数',
            key: 'num',
            width: 100
          },
          {
            title: '标签',
            key: 'tips',
            width: 150
          },
          {
            title: '操作',
            slot: 'action',
            fixed: 'right',
            width: 150
          }
        ],
        data: []
      }
    },
    methods: {
      deleteDept(row) {
        deleteSingelDept(row.id).then(res => {
          if(res.code === 200) {
            this.$Message.success(res.message)
            this.handleSearch()
          }
        })
      },
      handleModal(row) {
        this.$router.push({name: 'addDeveloper', params: {id: row !== undefined ? row.id : null}})
      },
      handleSearch() {
        //this.loading = true
        const params = Object.assign(this.pageInfo, {deptId: this.userInfo.deptId})
        getWebList(this.pageInfo).then(res => {
          if (res.code === 200) {
            this.data = res.data.records
            this.pageInfo.total = parseInt(res.data.total)
          }
        }).finally(() => {
          this.loading = false
        })
      },
      handlePage(current) {
        this.pageInfo.page = current
        this.handleSearch()
      },
      handlePageSize(size) {
        this.pageInfo.limit = size
        this.handleSearch()
      }
    },
    mounted: function () {
      this.handleSearch()
    }
  }
</script>
