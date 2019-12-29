<template>
  <div>
    <Card shadow>
      <Form ref="searchForm"
        :model="pageInfo"
        inline
        :label-width="80"
      >
        <FormItem label="角色名称" prop="roleName">
          <Input type="text" v-model="pageInfo.roleName" placeholder="请输入关键字"/>
        </FormItem>
        <FormItem label="角色编码" prop="roleCode">
          <Input type="text" v-model="pageInfo.roleCode" placeholder="请输入关键字"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSearch(1)">查询</Button>&nbsp;
          <Button @click="handleResetForm('searchForm')">重置</Button>
        </FormItem>
      </Form>
      <div class="search-con search-con-top">
          <Button  class="search-btn" type="primary" @click="handleModal()">
            添加
          </Button>
          <!--<Button  class="search-btn" type="primary" @click="deleteAllSelected()">
            批量删除
          </Button>-->
      </div>
      <Table border :columns="columns" :data="data" :loading="loading" ref="selection" @on-selection-change="handleSelectRow()">
        <template slot="status" slot-scope="{ row }">
          <Badge v-if="row.status===1" status="success" text="启用"/>
          <Badge v-else="" status="error" text="禁用"/>
        </template>
        <template slot="action" slot-scope="{ row }">
          <a @click="handleModal(row)">编辑</a>&nbsp;
          <a @click="deleteRole(row)">删除</a>&nbsp;
        </template>
      </Table>
      <Page transfer :total="pageInfo.total" :current="pageInfo.page" :page-size="pageInfo.limit" show-elevator
            show-sizer
            show-total
            @on-change="handlePage" @on-page-size-change='handlePageSize'></Page>
    </Card>

    <Modal
      v-model="modalVisible"
      :title="modalTitle"
      width="50"
      @on-cancel="handleReset"
    >
      <div>
        <Tabs @on-click="handleTabClick" :value="current">
          <TabPane label="角色信息" name="form1">
            <Form v-show="current == 'form1'" ref="form1" :model="formRole" :rules="formItemRules" :label-width="100">
              <FormItem label="角色编码" prop="roleCode">
                <Input type="number" v-model="formRole.roleCode" placeholder="请输入内容" />
              </FormItem>
              <FormItem label="角色名称" prop="roleName">
                <Input v-model="formRole.roleName" placeholder="请输入内容" />
              </FormItem>
              <FormItem label="描述">
                <Input v-model="formRole.description" type="textarea" placeholder="请输入内容" />
              </FormItem>
            </Form>
          </TabPane>
          <TabPane label="分配权限" name="form2">
            <Form v-show="current == 'form2'" ref="form2" :model="formItem" :rules="formItemRules" :label-width="100">
              <FormItem label="功能菜单" prop="grantMenus">
                <tree-table
                  ref="tree"
                  style="max-height:480px;overflow: auto"
                  expand-key="menuName"
                  :expand-type="false"
                  :is-fold="false"
                  :tree-type="true"
                  :selectable="true"
                  :columns="columns2"
                  @on-selection-change="handleSelectRow()"
                  :data="selectMenus">
                  <template slot="operation">
                    <CheckboxGroup v-model="formItem.grantActions">
                      <Checkbox v-for="(item, index) in actionList" :label="item.id" :key="index">
                        <span :title="item.roleName">{{item.roleName}}</span>
                      </Checkbox>
                    </CheckboxGroup>
                  </template>
                </tree-table>
              </FormItem>
            </Form>
          </TabPane>
          <TabPane label="角色成员" name="form3">
            <Form v-show="current == 'form3'" ref="form3" :model="formItem" :rules="formItemRules">
              <FormItem prop="authorities">
                <Transfer
                  :data="selectUsers"
                  :list-style="{width: '45%',height: '480px'}"
                  :titles="['选择用户', '已选择用户']"
                  :render-format="transferRender"
                  :target-keys="formItem.userIds"
                  @on-change="handleTransferChange"
                  filterable>
                </Transfer>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
        <div class="drawer-footer">
          <Button type="default" @click="handleReset">取消</Button>&nbsp;
          <Button type="primary" @click="handleSubmit" :loading="saving">保存</Button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
  import {
    deleteRole,
    deleteBatch,
    getUserInfo,
    getRoleInfo,
    getRoleList,
    permissionSave,
    getPermission,
    roleSave,
    roleSelectList,
    updateRole
  } from '@/api/role'
   import {
    getMenuAllList,
  } from '@/api/menu'
  export default {
    name: 'SystemRole',
    data () {
      const validateEn = (rule, value, callback) => {
        let reg = /^[_a-zA-Z0-9]+$/
        if (value === '') {
          callback(new Error('角色标识不能为空'))
        } else if (value !== '' && !reg.test(value)) {
          callback(new Error('只允许字母、数字、下划线'))
        } else {
          callback()
        }
      }
      return {
        userInfo: JSON.parse(window.localStorage.getItem('userInfo')),
        titles: ['选择接口', '已选择接口'],
        listStyle: {
          width: '240px',
          height: '500px'
        },
        loading: false,
        modalVisible: false,
        modalTitle: '',
        saving: false,
        current: 'form1',
        forms: [
          'form1',
          'form2',
          'form3'
        ],
        selectApis: [],
        selectMenus: [
          //{id: 1, menuName: 'KKKKey'},
          //{id: 2, menuName: '斤斤计较'}
        ],
        selectUsers: [],
        pageInfo: {
          total: 0,
          page: 1,
          size: 10
        },
        formItemRules: {
          roleCode: [
            {required: true, validator: '请输入角色标识', trigger: 'blur'}
          ],
          roleName: [
            {required: true, message: '角色名称不能为空', trigger: 'blur'}
          ]
        },
        actionList: [
          //{actionDesc: 'aaa',authorityId: 1,actionName: '哈哈哈哈'},
          //{actionDesc: 'aaa',authorityId: 2,actionName: '呵呵呵呵呵'}
        ],
        formRole: {
          roleCode: null,
          roleName: null,
          roleType: 1, //默认后台角色
          description: null,
          operateUserId: null,
          userId: null
        },
        formItem: {
          id: null,
          roleCode: null,
          roleName: null,
          roleType: null,
          path: '',
          status: 1,
          sort: '',
          priority: 0,
          description: '',
          grantMenus: [],
          grantActions: [],
          expireTime: '',
          isExpired: false,
          userIds: []
        },
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: 'id',
            key: 'id',
            width: 300,
          },
          {
            title: '角色名称',
            key: 'roleName',
            width: 300,
          },
          {
            title: '角色标识',
            key: 'roleCode'
          },
          {
            title: '描述',
            key: 'description',
            width: 200
          },
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
        selectedRowKeys: []
      }
    },
    methods: {
      handleModal (data) {
        if (data) {
          this.formRole = Object.assign({}, this.formRole, data)
        }
        if (this.current === this.forms[0]) {
          this.modalTitle = data ? '编辑角色 - ' + data.roleName : '添加角色'
          this.modalVisible = true
        }
        if (this.current === this.forms[1]) {
          this.modalTitle = data ? '分配权限 - ' + data.roleName : '分配权限'
          this.handleLoadRoleGranted()
        }
        if (this.current === this.forms[2]) {
          this.modalTitle = data ? '角色成员 - ' + data.roleName : '角色成员'
          this.handleLoadRoleUsers(this.formItem.roleId)
        }
        this.formItem.status = this.formItem.status + ''
      },
      handleResetForm (form) {
        this.$refs[form].resetFields()
      },
      handleTabClick(name){
        this.current = name
        this.handleModal();
      },
      handleReset () {
        const newData = {
          roleCode: null,
          roleName: null,
          roleType: 1,
          description: null,
          operateUserId: null,
          userId: null,
          priority: 0,
          roleDesc: '',
          grantMenus: [],
          grantActions: [],
          expireTime: '',
          isExpired: false,
          userIds: []
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
      deleteRole(row) {
        //删除
        deleteRole(row.id).then(res => {
          if(res.code === 200) {
            this.$Message.success(res.message)
            this.handleSearch()
          }
        })
      },
      handleSelectRow() {
        this.selectedRowKeys = this.$refs.selection.getSelection()
      },
      deleteAllSelected () {
        //批量删除
        let arr = []
        if (this.selectedRowKeys.length === 0) {
          this.$Message.warning('请选择要删除的角色')
          return false
        }
        this.selectedRowKeys.map(item => {
          arr.push(item.id)
        })
        deleteBatch({ids: arr}).then(rs => {
          if (rs.code === 200) {
            this.$Message.warning(rs.message)
            this.handleSearch()
          }
        })
      },
      handleSubmit () {
        if (this.current === this.forms[0]) {
          this.$refs[this.current].validate((valid) => {
            if (valid) {
              this.saving = true
              if (!this.formRole.id) {
                const params = Object.assign(this.formRole, {
                  //userId: this.userInfo.id,
                  operateUserId: this.userInfo.id
                })
                roleSave(this.formRole).then(res => {
                  if (res.code === 200) {
                    this.$Message.success(res.message)
                    this.handleReset()
                  }
                  this.handleSearch()
                }).finally(() => {
                  this.saving = false
                })
              } else {
                updateRole(this.formRole).then(res => {
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

        if (this.current === this.forms[1]) {
          this.$refs[this.current].validate((valid) => {
            if (valid) {
              this.saving = true
              const params = {
                id: this.formItem.grantActions.join(''), //角色id
                ids: this.formItem.grantMenus
              }
              console.log(params)
              permissionSave(params).then(res => {
                if (res.code === 200) {
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

        if (this.current === this.forms[2]) {
          this.$refs[this.current].validate((valid) => {
            if (valid) {
              this.saving = true
              addRoleUsers({
                roleId: this.formItem.roleId,
                userIds: this.formItem.userIds
              }).then(res => {
                if (res.code === 0) {
                  this.$Message.success('保存成功')
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
      handleSearch () {
        this.loading = true
        getRoleList(this.pageInfo).then(res => {
          if (res.code === 200) {
            this.data = res.data.records
            this.pageInfo.total = parseInt(res.data.total)
          }
        }).finally(() => {
          this.loading = false
        })
      },
      handlePage (current) {
        this.pageInfo.page = current
        this.handleSearch()
      },
      handlePageSize (size) {
        this.pageInfo.limit = size
        this.handleSearch()
      },
      handleRemove (data) {
        this.$Modal.confirm({
          title: '确定删除吗？',
          onOk: () => {
            removeRole(data.roleId).then(res => {
              if (res.code === 0) {
                this.pageInfo.page = 1
                this.$Message.success('删除成功')
              }
              this.handleSearch()
            })
          }
        })
      },
      getCheckedAuthorities () {
        const menus = this.$refs['tree'].getCheckedProp('authorityId')
        return menus.concat(this.formItem.grantActions)
      },
      handleLoadRoleGranted () {
        //if (!roleId) {
         // return
        //}
        
        const that = this
        const p1 = getMenuAllList()
        const p2 = roleSelectList()
        Promise.all([p1, p2]).then(function (values) {
          let res1 = values[0]
          let res2 = values[1]
          if (res1.code === 200) {
            /*let opt = {
              primaryKey: 'menuId',
              parentKey: 'parentId',
              startPid: '0'
            }*/
            let menus = []
            /*if (res2.code === 200) {
              let menus = []
              let actions = []
              console.log(res2.data)
              res2.data.records.map(item => {
                // 菜单权限
                if (item.authority.indexOf('MENU_') != -1 && !menus.includes(item.id)) {
                  menus.push(item.id)
                }
                // 操作权限
                if (item.authority.indexOf('ACTION_') != -1 && !actions.includes(item.id)) {
                  actions.push(item.id)
                }
              })
              that.formItem.grantMenus = menus;
              that.formItem.grantActions = actions;
            }*/
            res1.data.records.map(item => {
              menus.push(item.id)
            })
            that.formItem.grantMenus = menus;
            res1.data.records.map(item => {
              // 菜单选中
              if (that.formItem.grantMenus.includes(item.id)) {
                item._isChecked = true
              }
            })
            that.selectMenus = res1.data.records //listConvertTree(res1.data.records, opt)
            that.actionList = res2.data
          }
          that.modalVisible = true
        })
      },
      handleLoadRoleUsers (roleId) {
        if (!roleId) {
          return
        }
        const that = this
        const p1 = getAllUsers()
        const p2 = getRoleUsers(roleId)
        Promise.all([p1, p2]).then(function (values) {
          let res1 = values[0]
          let res2 = values[1]
          if (res1.code === 0) {
            res1.data.map(item => {
              item.key = item.userId
              item.label = `${item.userName}(${item.nickName})`
            })
            that.selectUsers = res1.data
          }
          if (res2.code === 0) {
            let userIds = []
            res2.data.map(item => {
              if (!userIds.includes(item.userId)) {
                userIds.push(item.userId)
              }
            })
            that.formItem.userIds = userIds;
          }
          that.modalVisible = true
        })
      },
      transferRender (item) {
        return `<span  title="${item.label}">${item.label}</span>`
      },
      handleTransferChange (newTargetKeys, direction, moveKeys) {
        this.formItem.userIds = newTargetKeys
      },
      handleClick (name, row) {
        switch (name) {
          case 'remove':
            this.handleRemove(row)
            break
        }
      }
    },
    mounted: function () {
      this.handleSearch()
      //console.log(this.actionList)
    }
  }
</script>
