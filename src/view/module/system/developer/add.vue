<style lang="less">
  .department{
    background: #fff;
    padding: 20px;
    .button{
      padding-left:100px;
    }
  }
</style>
<template>
  <div class="department">
    <Tabs @on-click="handleTabClick" :value="current">
        <TabPane label="添加部门" name="form1">
            <Form v-show="current == 'form1'" ref="form1" :model="formItem" :rules="formItemRules" :label-width="100">
                <FormItem label="地址" prop="address">
                    <Input v-model="formItem.address" placeholder="请输入内容" class="w260" />
                </FormItem>
                <FormItem label="公司id" prop="compId">
                    <Input v-model="formItem.compId" placeholder="请选择" class="w260" disabled />  
                    <Button @click="selectCompany()" class="ml10" type="primary">请选择公司</Button>
                </FormItem>
                <FormItem label="部门名称" prop="fullName">
                    <Input v-model="formItem.fullName" placeholder="请输入内容" class="w260"/>
                </FormItem>
                <FormItem label="部门人数" prop="num">
                    <Input v-model="formItem.num" placeholder="请输入内容" class="w260"/>
                </FormItem>
                <FormItem label="部门简称" prop="simpleName">
                    <Input v-model="formItem.simpleName" placeholder="请输入内容" class="w260" />
                </FormItem>
                <FormItem label="描述">
                    <Input v-model="formItem.tips" type="textarea" placeholder="请输入内容" class="w260"/>
                </FormItem>
            </Form>
            <div class="button">
                <Button type="default" @click="handleReset">取消</Button>&nbsp;
                <Button type="primary" @click="handleSubmit" :loading="saving">保存</Button>
            </div>
        </TabPane>
    </Tabs>
    <Modal
        title="请选择公司信息"
        v-model="modalVisible"
        width="800"
        @on-cancel="cancel"
    >
        <Table :columns="columns3" :data="companyData"></Table>
        <Page :current="pageInfo.current" :total="pageInfo.total" simple />
        <div class="drawer-footer">
            <Button type="default" @click="cancel">取消</Button>&nbsp;
            <Button type="primary" @click="saveCompany" :loading="saving">保存</Button>
        </div>
    </Modal>
  </div>
</template>
<script>
  import {getListDept, addDept} from '@/api/department'
  import {getListCompany} from '@/api/company'
  export default {
    name: 'SystemDeveloper',
    data() {
      return {
        loading: false,
        saving: false,
        modalVisible: false,
        modalTitle: '',
        current: 'form1',
        forms: [
          'form1',
          'form2'
        ],
        selectMenus: [],
        selectRoles: [],
        pageInfo: {
          page: 1,
          size: 10
        },
        formItemRules: {
          compId: [
            {required: true, message: '请选择公司信息', trigger: 'blur'}
          ],
          fullName: [
            {required: true, message: '请填写部门名称', trigger: 'blur'}
          ],
          nickName: [
            {required: true, message: '昵称不能为空', trigger: 'blur'}
          ],
          email: [
            {required: false, type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
          ]
        },
        formItem: {
          address: null,
          compId: null,
          fullName: null,
          num: 0,
          simpleName: null,
          tips: null,
          userId: null
        },
        columns3: [
          {
            title: '编号',
            key: 'id',
            render: (h, params) => {
              let id = params.row.id;
              let self = this
              return h('div', [
                h('Radio', {
                  on: {
                    'on-change': () => {
                      self.companyId = id;
                    }
                  }
                })
              ])
            }
          },
          {
            title: '公司全称',
            key: 'fullName',
          },
          {
            title: '公司简称',
            key: 'simpleName'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '公司人数',
            key: 'num',
            render: (h, params) => {
              return h('span', params.row.num + '人')
            }
          },
          {
            title: '公司类型',
            key: 'deptType',
            render: (h, params) => {
              return h('span', params.row.deptType === 0 ? '公司' : '部门')
            }
          },
          {
            title: '公司标签',
            key: 'tips'
          }
        ],
        data: [],
        companyData: [],
        userInfo: JSON.parse(window.localStorage.getItem('userInfo'))
      }
    },
    methods: {
      getCompanyList() {
        getListCompany().then(rs => {
          if(rs.code === 200) {
            this.companyData = rs.data.records
          }
        })
      },
      selectCompany() {
        this.modalVisible = true
      },
      saveCompany() {
        if (this.companyId === null) {
          this.$Message.info('请选择公司信息');
          return false
        }
        this.formItem.compId = this.companyId
        this.modalVisible = false
      },
      cancel() {
        this.companyId = null
      },
      handleResetForm(form) {
        this.$refs[form].resetFields()
      },
      handleReset() {
        const newData = {
          address: null,
          compId: null,
          fullName: null,
          num: 0,
          pid: null,
          simpleName: null,
          tips: null,
          userId: null
        }
        this.formItem = newData
        //重置验证
        this.forms.map(form => {
          this.handleResetForm(form)
        })
        this.current = this.forms[0]
        this.formItem.grantMenus = []
        this.formItem.grantActions = []
        this.modalVisible = false
        this.saving = false
      },
      handleSubmit() {
        if (this.current === this.forms[0]) {
          this.$refs[this.current].validate((valid) => {
            if (valid) {
              //this.saving = true
              if (!this.formItem.id) {
                this.formItem = Object.assign(this.formItem, {pid:this.companyId, userId: this.userInfo.id, operateUserId: this.userInfo.id})
                addDept(this.formItem).then(res => {
                  if (res.code === 200) {
                    this.$Message.success('保存成功')
                    this.handleReset()
                  }
                  this.handleSearch()
                }).finally(() => {
                  this.saving = false
                })
              } else {
                addDeveloper(this.formItem).then(res => {
                  if (res.code === 0) {
                    this.$Message.success('保存成功')
                    this.handleReset()
                  }
                  this.handleSearch()
                }).finally(() => {
                  this.saving = false
                })
              }
            }
          })
        }

        if (this.current === this.forms[1] && this.formItem.userId) {
          this.$refs[this.current].validate((valid) => {
            if (valid) {
              this.saving = true
              updatePassword({
                userId: this.formItem.userId,
                password: this.formItem.password
              }).then(res => {
                if (res.code === 0) {
                  this.$Message.success('修改成功')
                  this.handleReset()
                }
                this.handleSearch()
              }).finally(() => {
                this.saving = false
              })
            }
          })
        }
      },
      handleSearch() {
        //this.loading = true
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
      }
    },
    mounted: function () {
      //this.handleSearch()
      this.getCompanyList()
    }
  }
</script>
