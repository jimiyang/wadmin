<template>
  <div>
    <Card>
      <Form ref="searchForm"
            :model="pageInfo"
            inline
            :label-width="80">
        <FormItem label="登录名" prop="userName">
          <Input type="text" v-model="pageInfo.userName" placeholder="请输入关键字"/>
        </FormItem>
        <FormItem label="手机号" prop="mobile">
          <Input type="text" v-model="pageInfo.mobile" placeholder="请输入关键字"/>
        </FormItem>
        <FormItem label="邮箱" prop="email">
          <Input type="text" v-model="pageInfo.email" placeholder="请输入关键字"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSearch(1)">查询</Button>&nbsp;
          <Button @click="handleResetForm('searchForm')">重置</Button>
        </FormItem>
      </Form>

      <div class="search-con search-con-top">
        <ButtonGroup>
          <Button type="primary"
            @click="handleModal()">
            <span>添加</span>
          </Button>
        </ButtonGroup>
      </div>

      <Table border :columns="columns" :data="data" :loading="loading">
        <template slot="status" slot-scope="{ row }">
          <Badge v-if="row.status===1" status="success" text="正常"/>
          <Badge v-else-if="row.status===2" status="warning" text="锁定"/>
          <Badge v-else="" status="error" text="禁用"/>
        </template>
        <template slot="action" slot-scope="{ row }">
          <a :disabled="hasAuthority('developerEdit')?false:true" @click="handleModal(row)">编辑</a>&nbsp;
          <Dropdown v-show="hasAuthority('developerEdit')" transfer ref="dropdown" @on-click="handleClick($event,row)">
            <a href="javascript:void(0)">
              <span>更多</span>
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="sendToEmail">发送到密保邮箱</DropdownItem>
            </DropdownMenu>
          </Dropdown>&nbsp;
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
  import {getListDept} from '@/api/department'
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
            key: 'userName',
            width: 200
          },
          {
            title: '昵称',
            key: 'nickName',
            width: 150
          },
          {
            title: '邮箱',
            key: 'email',
            width: 200
          },
          {
            title: '手机号',
            key: 'mobile',
            width: 200
          },
          {
            title: '状态',
            slot: 'status',
            key: 'status',
            width: 100
          },
          {
            title: '开发者类型',
            key: 'userType',
            width: 150
          },
          {
            title: '注册时间',
            key: 'createTime',
            width: 180
          },
          {
            title: '描述',
            key: 'userDesc'
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
      handleModal() {
        this.$router.push({name: 'addDeveloper'})
      },
      handleSearch() {
        //this.loading = true
        const params = Object.assign(this.pageInfo, {deptId: this.userInfo.deptId})
        getListDept(this.pageInfo).then(res => {
          console.log(res)
          //this.data = res.data.records
         // this.pageInfo.total = parseInt(res.data.total)
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
