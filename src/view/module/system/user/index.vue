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
          <a @click="handleModal(row)">编辑</a>&nbsp;
          <a @click="deleteUser(row)">删除</a>&nbsp;
        </template>
      </Table>
      <Page transfer :total="pageInfo.total" :current="pageInfo.page" :page-size="pageInfo.size" show-elevator
        show-sizer
        show-total
        @on-change="handlePage" @on-page-size-change='handlePageSize'></Page>
    </Card>
  </div>
</template>
<script>
  import {startWith, listConvertTree} from '@/libs/util'
  import {getUserList, addUser, delUser} from '@/api/user'
  import {getListCompany} from '@/api/company'
  import {getListDept} from '@/api/department'
  import {provinceData, cityData, countryData} from '@/assets/js/area'
  export default {
    name: 'SystemUser',
    data() {
      return {
        loading: false,
        pageInfo: {
          page: 1,
          size: 10,
          deptId: '',
          userId: null
        },
        columns: [
          {type: 'selection',width: 60,},
          {title: 'id',key: 'id', width: 200},
          {title: '用户名', key: 'username', width: 200},
          {title: '昵称',key: 'nickname', width: 200},
          {title: '性别',key: 'sex', width: 80},
          {title: '邮箱', key: 'email', width: 200},
          {title: '手机号',key: 'phone', width: 200},
          {title: '省',key: 'province', width: 80},
          {title: '市',key: 'city', width: 80},
          {title: '区',key: 'area', width: 80},
          {title: '地址',key: 'areaddressa', width: 200},
          {title: '年龄',key: 'age', width: 80},
          {title: '出生日期',key: 'birthday', width: 200},
          {title: '公司id',key: 'compId', width: 80},
          {title: '部门id',key: 'deptId', width: 80},
          {title: '角色id',key: 'roleId', width: 80},
          {title: '头像',key: 'headImage', width: 200},
          {
            title: '操作',
            slot: 'action',
            fixed: 'right',
            width: 150
          }
        ],
        columns2: [
          {
            title: '菜单',
            key: 'menuName',
            minWidth: '250px',
          },
          {
            title: '操作',
            type: 'template',
            template: 'operation',
            minWidth: '200px'
          }
        ],
        data: [],
        companyData: [],
        userInfo: JSON.parse(window.localStorage.getItem('userInfo')),
      }
    },
    methods: {
      handleModal(row) {
        this.$router.push({name: 'userinfo', params: {id: row !== undefined ? row.id : null}})
      },
      deleteUser(row) {
        delUser(row.id).then(res => {
          if(res.code === 200) {
            this.$Message.info(res.message);
            this.handleSearch()
          }
        })
      },
      handleSearch(page) {
        if (page) {
          this.pageInfo.page = page
        }
        this.loading = true
        const params = Object.assign(this.pageInfo, {userId: this.userInfo.id})
        getUserList(params).then(res => {
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
      },
      handleClick(name, row) {
        switch (name) {
          case'sendToEmail':
            this.$Message.warning("发送至密保邮箱,开发中...")
            break
        }
      },
      handleTabClick(name){
        this.current = name
        this.handleModal();
      },
      getDept() {
        getListDept().then(rs => {
          //console.log(rs)
        })
      }
    },
    mounted: function () {
      this.province = provinceData
      this.handleSearch()
      //this.getDept()
    }
  }
</script>
