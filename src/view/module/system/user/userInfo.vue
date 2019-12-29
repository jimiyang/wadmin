<style lang="less">
  .user-info{
    background: #fff;padding: 20px;
    .button{
      padding-left:100px;
    }
  }
</style>
<template>
  <div class="user-info">
        <Tabs @on-click="handleTabClick" :value="current">
          <TabPane label="用户信息" name="form1">
            <Form v-show="current == 'form1'" ref="form1" :model="formItem" :rules="formItemRules" :label-width="100">
              <FormItem label="用户名" prop="username">
                <Input v-model="formItem.username" placeholder="请输入内容" class="w260" />
              </FormItem>
              <FormItem label="昵称" prop="nickName">
                <Input v-model="formItem.nickName" placeholder="请输入内容" class="w260"  />
              </FormItem>
              <FormItem label="性别" prop="sex">
                <RadioGroup v-model="formItem.sex">
                  <Radio :label="0">男</Radio>
                  <Radio :label="1">女</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="公司id" prop="compId">
                <Input v-model="formItem.compId" placeholder="请选择" class="w260" disabled />  
                <Button @click="selectCompany()" class="ml10" type="primary">请选择公司</Button>
              </FormItem>
              <FormItem label="部门id" prop="deptId">
                <Input v-model="formItem.deptId" placeholder="请输入内容" class="w260" />
              </FormItem>
              <FormItem label="角色id" prop="roleId">
                <Select class="w260" v-model="formItem.roleId" @on-change="selectRole()">
                  <Option v-for="(item, index) in roleData" :key="index" :value="item.id">{{item.roleName}}</Option>
                </Select>
              </FormItem>
              <FormItem label="手机号" prop="phone">
                <Input v-model="formItem.phone" placeholder="请输入内容" class="w260" />
              </FormItem>
              <FormItem v-if="formItem.userId?false:true" label="登录密码" prop="password">
                <Input type="password" v-model="formItem.password" placeholder="请输入内容"  class="w260"/>
              </FormItem>
              <FormItem label="年龄" prop="age">
                <Input type="number" v-model="formItem.age" placeholder="请输入年龄" class="w260"/>
              </FormItem>
              <FormItem label="生日" prop="birthday">
                <DatePicker type="date" v-model="formItem.birthday" placeholder="请选择出生日期" class="w260"></DatePicker>
              </FormItem>
              <FormItem label="邮箱" prop="email">
                <Input v-model="formItem.email" placeholder="请输入内容" class="w260" />
              </FormItem>
              <FormItem label="头像" prop="headImage">
                <Avatar shape="square" icon="ios-person" size="100" :src="formItem.headImage"/>
              </FormItem>
              <FormItem label="地区" prop="province">
                <Select class="w100" v-model="formItem.province" @on-change="selectChild('city')">
                  <Option v-for="(item, index) in province" :key="index" :value="item.id">{{item.name}}</Option>
                </Select>
                <Select class="ml10 w100" v-model="formItem.city" @on-change="selectChild('country')">
                  <Option v-for="(item, index) in city" :key="index" :value="item.id">{{item.name}}</Option>
                </Select>
                <Select class="ml10 w100" v-model="formItem.area">
                  <Option v-for="(item, index) in area" :key="index" :value="item.id">{{item.name}}</Option>
                </Select>
              </FormItem>
              <FormItem label="地址" prop="address">
                <Input v-model="formItem.address" placeholder="请输入地址" class="w260"/>
              </FormItem>
            </Form>
          </TabPane>
          <!--<TabPane label="分配角色" name="form2">
            <Form v-show="current == 'form2'" ref="form2" :model="formItem" :label-width="100" :rules="formItemRules">
              <FormItem label="分配角色" prop="grantRoles">
                <CheckboxGroup v-model="formItem.grantRoles">
                  <Checkbox v-for="(item, index) in selectRoles" :key="index" :label="item.roleId"><span>{{ item.roleName }}</span></Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Form>
          </TabPane>
          <TabPane label="分配权限" name="form3">
            <Alert type="info" show-icon>
              支持用户单独分配功能权限<code>(除角色已经分配菜单功能,禁止勾选!)</code></Alert>
            <Form v-show="current == 'form3'" ref="form3" :model="formItem" :rules="formItemRules" :label-width="100">
              <FormItem label="过期时间" prop="expireTime">
                <Badge v-if="formItem.isExpired" text="授权已过期">
                  <DatePicker v-model="formItem.expireTime" class="ivu-form-item-error" type="datetime"
                    placeholder="设置有效期"></DatePicker>
                </Badge>
                <DatePicker v-else="" v-model="formItem.expireTime" type="datetime" placeholder="设置有效期"></DatePicker>
              </FormItem>
              <FormItem label="功能菜单" prop="grantMenus">
                <tree-table
                  ref="tree"
                  style="max-height:450px;overflow: auto"
                  expand-key="menuName"
                  :expand-type="false"
                  :is-fold="false"
                  :tree-type="true"
                  :selectable="true"
                  :columns="columns2"
                  :data="selectMenus">
                  <template slot="operation" slot-scope="scope">
                    <CheckboxGroup v-model="formItem.grantActions">
                      <Checkbox :disabled="item.disabled" v-for="(item, index) in scope.row.actionList"  :key="index" :label="item.authorityId">
                        <span :title="item.actionDesc">{{item.actionName}}</span>
                      </Checkbox>
                    </CheckboxGroup>
                  </template>
                </tree-table>
              </FormItem>
            </Form>
          </TabPane>
          <TabPane label="修改密码" name="form4">
            <Form v-show="current == 'form4'" ref="form4" :model="formItem" :rules="formItemRules" :label-width="100">
              <FormItem label="登录名" prop="userName">
                <Input :disabled="formItem.userId?true:false" v-model="formItem.userName" placeholder="请输入内容" />
              </FormItem>
              <FormItem label="登录密码" prop="password">
                <Input type="password" v-model="formItem.password" placeholder="请输入内容" />
              </FormItem>
              <FormItem label="再次确认密码" prop="passwordConfirm">
                <Input type="password" v-model="formItem.passwordConfirm" placeholder="请输入内容" />
              </FormItem>
            </Form>
          </TabPane>-->
        </Tabs>
        <div class="button">
          <Button type="default" @click="handleReset">重置</Button>&nbsp;
          <Button type="primary" @click="handleSubmit" :loading="saving">提交</Button>
        </div>
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
  import {startWith, listConvertTree} from '@/libs/util'
  import {addUser, getUserCheck, updateUser, getUserInfo} from '@/api/user'
  import {getListCompany} from '@/api/company'
  import {getListDept} from '@/api/department'
  import {roleSelectList} from '@/api/role'
  import {provinceData, cityData, countryData} from '@/assets/js/area'
  export default {
    name: 'SystemUser',
    data() {
      const validatePass = (rule, value, callback) => {
        let reg2 = /^.{6,18}$/;
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (value !== this.formItem.password) {
          callback(new Error('两次输入密码不一致'))
        } else if (value !== '' && !reg2.test(value)) {
          callback(new Error('长度6到18个字符'))
        } else {
          callback()
        }
      }
      const validateMobile = (rule, value, callback) => {
        let reg = /^1\d{10}$/
        if (value !== '' && !reg.test(value)) {
          callback(new Error('手机号码格式不正确'))
        } else {
          callback()
        }
      }
      return {
        loading: false,
        saving: false,
        modalVisible: false,
        modalTitle: '',
        current: 'form1',
        forms: [
          'form1',
          'form2',
          'form3',
          'form4'
        ],
        selectMenus: [],
        selectRoles: [],
        pageInfo: {
          page: 1,
          size: 5,
          current: 1
        },
        province: [],
        city: [],
        area: [],
        formItem: {
          address: null,
          age: null,
          area: null,
          birthday: null,
          city: null,
          compId: null, //公司id
          deptId: null, //部门id
          email: null,
          headImage: 'https://ww1.sinaimg.cn/bmiddle/9d688d31ly1gabmnwlkz3j20u00tyq8r.jpg',
          nickname: null,
          password: null,
          phone: null,
          province: null,
          roleId: null, //角色id
          sex: 0,
          userId: null,
          username: null
        },
        formItemRules: {
          address: [
            {required: true, message: '用户类型不能为空', trigger: 'blur'}
          ],
          compId: [
            {required: true, message: '请选择公司信息', trigger: 'blur'}
          ],
          //deptId: [
            //{required: true, message: '请选择部门id', trigger: 'blur'}
          //],
          age: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          
          password: [
            {required: true, validator: validatePass, trigger: 'blur'}
          ],
          nickname: [
            {required: true, message: '昵称不能为空', trigger: 'blur'}
          ],
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          email: [
            {required: false, type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
          ] ,
          phone: [
            {validator: validateMobile, trigger: 'blur'}
          ]
        },
        
        companyId: null,
        
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
        userInfo: JSON.parse(window.localStorage.getItem('userInfo')),
        roleData: []
      }
    },
    methods: {
      selectChild(type) {
        let arr = [], arr2 =[]
        if (type === 'city') {
          cityData.map(item => {
            if (item.p_id === this.formItem.province) {
              arr.push(item)
            }
          })
          this.city = arr
        } else {
          countryData.map(item => {
            if (item.c_id === this.formItem.city) {
              arr2.push(item)
            }
          })
          this.area = arr2
        }
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
        this.$refs['form1'].resetFields()
      },
      handleReset() {
        const newData = {
        }
        this.formItem = newData
        //重置验证
        this.forms.map(form => {
          this.handleResetForm(form)
        })
        this.current = this.forms[0]
        this.formItem.grantMenus = []
        this.formItem.grantActions = []
        //this.modalVisible = false
        this.saving = false
      },
      handleSubmit() {
        if (this.current === this.forms[0]) {
          this.$refs[this.current].validate((valid) => {
            if (valid) {
              this.saving = true
              if (!this.formItem.id) {
                const params = Object.assign(this.formItem, {operateUserId: this.userInfo.id})
                addUser(params).then(res => {
                  if (res.code === 200) {
                    this.$Message.success(res.message)
                    this.handleReset()
                  }
                  //window.history.go(-1)
                  this.$router.push({
                    name: 'user'
                  })
                }).finally(() => {
                  this.saving = false
                })
              } else {
                const params = Object.assign(this.formItem, {operateUserId: this.userInfo.id})
                updateUser(params).then(res => {
                  if (res.code === 200) {
                    this.$Message.success(res.message)
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
              addUserRoles(this.formItem).then(res => {
                if (res.code === 0) {
                  this.$Message.success('分配角色成功')
                  this.handleReset()
                }
                this.handleSearch()
              }).finally(() => {
                this.saving = false
              })
            }
          })
        }

        if (this.current === this.forms[2] && this.formItem.userId) {
          this.$refs[this.current].validate((valid) => {
            if (valid) {
              const authorityIds = this.getCheckedAuthorities()
              this.saving = true
              grantAuthorityUser({
                userId: this.formItem.userId,
                expireTime: this.formItem.expireTime ? this.formItem.expireTime.pattern('yyyy-MM-dd HH:mm:ss') : '',
                authorityIds: authorityIds
              }).then(res => {
                if (res.code === 0) {
                  this.$Message.success('授权成功')
                  this.handleReset()
                }
                this.handleSearch()
              }).finally(() => {
                this.saving = false
              })
            }
          })
        }

        if (this.current === this.forms[3] && this.formItem.userId) {
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
      getCheckedAuthorities() {
        const menus = this.$refs['tree'].getCheckedProp('authorityId')
        return menus.concat(this.formItem.grantActions)
      },
      handleLoadUserGranted(userId) {
        const that = this
        //const p1 = getAuthorityMenu()
        const p2 = getAuthorityUser(userId)
        const roleAuthorites = []
        Promise.all([p1, p2]).then(function (values) {
          let res1 = values[0]
          let res2 = values[1]
          if (res1.code === 0 && res1.data) {
            let opt = {
              primaryKey: 'menuId',
              parentKey: 'parentId',
              startPid: '0'
            }
            if (res2.code === 0 && res2.data && res2.data.length > 0) {
              let menus = []
              let actions = []
              res2.data.map(item => {
                if(item.owner === 'role'){
                  roleAuthorites.push(item.authorityId);
                }
                // 菜单权限
                if (item.authority.indexOf('MENU_') != -1 && !menus.includes(item.authorityId)) {
                  menus.push(item.authorityId)
                }
                // 操作权限
                if (item.authority.indexOf('ACTION_') != -1 && !actions.includes(item.authorityId)) {
                  actions.push(item.authorityId)
                }
              })
              that.formItem.grantMenus = menus;
              that.formItem.grantActions = actions;
              // 时间
              if (res2.data.length > 0) {
                that.formItem.expireTime = res2.data[0].expireTime
                that.formItem.isExpired = res2.data[0].isExpired
              }
            }
            res1.data.map(item => {
              // 菜单选中
              if (that.formItem.grantMenus.includes(item.authorityId)) {
                item._isChecked = true
                // 归属角色权限,禁止授权
                if(roleAuthorites.includes(item.authorityId)){
                    // 插件不支持,禁用
                  item.disabled = true
                  item.menuName += ' (禁止勾选)'
                }
              }

             // 功能权限
              item.actionList.map(action => {
                if(roleAuthorites.includes(action.authorityId)){
                  action.disabled = true
                }
              })
            })
            that.selectMenus = listConvertTree(res1.data, opt)
          }
          //that.modalVisible = true
        })
      },
      handleLoadRoles(userId) {
        if (!userId) {
          return
        }
        const that = this
        const p1 = getAllRoles()
        const p2 = getUserRoles(userId)
        Promise.all([p1, p2]).then(function (values) {
          let res1 = values[0]
          let res2 = values[1]
          if (res1.code === 0) {
            that.selectRoles = res1.data
          }
          if (res2.code === 0) {
            let result = []
            res2.data.map(item => {
              result.push(item.roleId)
            })
            that.formItem.grantRoles = result
          }
          //that.modalVisible = true
        })
      },
      handlePage(current) {
        this.pageInfo.page = current
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
      selectRole() {
        
      },
      getCompanyList() {
        getListCompany().then(rs => {
          if(rs.code === 200) {
            this.companyData = rs.data.records
          }
        })
      },
      initForm(id) {
        getUserInfo(id).then(res => {
          if (res.code === 200) {
            this.formItem = res.data
          }
        })
      },
      getSelectRoleList() {
        roleSelectList().then(res => {
          if(res.code === 200) {
            this.roleData = res.data
          }
        })
      },
    },
    mounted: function () {
      this.province = provinceData
      this.getSelectRoleList()
      this.getCompanyList()
      if (this.$route.params.id !== null) {
        this.initForm(this.$route.params.id)
      }
    }
  }
</script>