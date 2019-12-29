<template>
  <div class="menu">
    <Row :gutter="12">
      <Col :xs="13" :sm="13" :md="14" :lg="14">
        <Card shadow>
          <!--<tree-table style="max-height:700px;overflow: auto"
              expand-key="menuName"
              @radio-click="rowClick"
              :expand-type="false"
              :is-fold="false"
              :tree-type="true"
              :selectable="false"
              :columns="columns"
              :data="data">
            <template slot="status" slot-scope="scope">
              <Badge v-if="scope.row.status===1" status="success"/>
              <Badge v-else="" status="error"/>
              <Icon :type="scope.row.icon" size="16"/>
              <a>ddd</a>
            </template>
          </tree-table>-->
          <Table border :columns="columns" :data="data">
            <template slot="action" slot-scope="{ row }">
              <a @click="handleEdit(row)">编辑</a>&nbsp;
              <a @click="deleteRole(row)">删除</a>&nbsp;
            </template>
          </Table>
        </Card>
      </Col>
      <Col :xs="16" :sm="16" :md="16" :lg="10">
      <Card shadow>
        <div class="search-con search-con-top">
          <ButtonGroup>
            <Button type="primary"  @click="setEnabled(true)">添加
            </Button>
          </ButtonGroup>
          <Modal
            v-model="confirmModal"
            title="提示"
            @on-ok="handleRemove">
            确定删除,菜单资源【{{formItem.menuName}}】吗?{{formItem.children && formItem.children.length > 0 ?
            '存在子菜单,将一起删除.是否继续?' : ''}}

          </Modal>
        </div>
        <Form ref="menuForm" :model="formItem" :rules="formItemRules" :label-width="80">
          <FormItem label="上级菜单" prop="pid">
            <treeselect
              :options="selectTreeData"
              placeholder="请选择一级菜单"
              v-model="formItem.pid"
              :normalizer="treeSelectNormalizer"
            />
            <!--<pre class="result">{{ formItem.pid }}</pre>-->
          </FormItem>
          <FormItem label="菜单编码" prop="menuCode">
            <Input v-model="formItem.menuCode" placeholder="请输入内容" />
          </FormItem>
          <FormItem label="菜单名称" prop="menuName">
            <Input v-model="formItem.menuName" placeholder="请输入内容" />
          </FormItem>
          <FormItem label="页面地址" prop="menuPath">
            <Input v-model="formItem.menuPath" placeholder="请输入内容" />
            <span v-if="formItem.scheme === '/'">前端组件：/view/module/{{formItem.menuPath}}.vue</span>
          </FormItem>
           <FormItem label="图标">
            <Input v-model="formItem.iconPath" placeholder="请输入内容">
              <Icon size="22" :type="formItem.iconPath" slot="prepend"/>
              <Poptip width="600" slot="append" placement="bottom">
                <Button icon="ios-search"></Button>
                <div slot="content">
                  <ul class="icons">
                    <li class="icons-item" :title="item" @click="onIconClick(item)" v-for="(item, index) in selectIcons" :key="index">
                      <Icon :type="item" size="28"/>
                      <p>{{item}}</p>
                    </li>
                  </ul>
                </div>
              </Poptip>
            </Input>
          </FormItem>
          <FormItem label="优先级">
            <InputNumber v-model="formItem.sort"></InputNumber>
          </FormItem>
          <FormItem label="状态">
            <RadioGroup v-model="formItem.status" type="button">
              <Radio :label="0">禁用</Radio>
              <Radio :label="1">启用</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem>
            <Button @click="handleSubmit" :loading="saving" type="primary">保存</Button>
            <Button @click="setEnabled(true)" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
  import {listConvertTree, updateTreeNode} from '@/libs/util'
  import {
    deleteMenu,
    delBatchMenu,
    getUserInfo,
    getMenuId,
    getMenuList,
    getMenuAllList,
    savePermissionMenu,
    getPermissionId,
    saveMenu,
    updateMenu
  } from '@/api/menu'

  import MenuAction from './menu-action.vue'
  import icons from './icons'
  export default {
    name: 'SystemMenu',
    components: {
      MenuAction
    },
    data () {
      const validateEn = (rule, value, callback) => {
        let reg = /^[_a-zA-Z0-9]+$/
        if (value === '') {
          callback(new Error('菜单标识不能为空'))
        } else if (value !== '' && !reg.test(value)) {
          callback(new Error('只允许字母、数字、下划线'))
        } else {
          callback()
        }
      }
      return {
        confirmModal: false,
        saving: false,
        visible: false,
        selectIcons: icons,
        selectTreeData: [{
          id: 0,
          menuName: '无'
        }],
        formItemRules: {
          menuCode: [
            {required: true, validator: validateEn, trigger: 'blur'}
          ],
          menuName: [
            {required: true, message: '菜单名称不能为空', trigger: 'blur'}
          ]
        },
        search: {
          name: null
        },
        formItem: {
          menuCode: null,
          menuName: '',
          iconPath: 'md-document',
          menuPath: null,
          target: '_self',
          status: 0,
          operateUserId: null,
          pid: 0,
          type: 0
        },
        columns: [
          {
            title: '菜单名称',
            key: 'menuName',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150
          }
        ],
        data: []
      }
    },
    methods: {
      handleEdit(row) {
        this.formItem = row
      },
      deleteRole(row) {
        deleteMenu(row.id).then(res => {
          if(res.code === 200) {
            this.$Message.success(res.message)
            this.handleSearch()
          }
        })
      },
      treeSelectNormalizer (node) {
        return {
          id: node.id,
          label: node.menuName,
          children: node.children
        }
      },
      setSelectTree (data) {
        let arr = [], child = []
        data.map(item => {
          console.log(Number(item.pid))
          if(Number(item.pid) === 0){
            arr.push({item})
            console.log(arr)
          }
        })
         console.log(arr)
        arr.map((item, index) => {
          data.map(it => {
            if (item.id === it.pid) {
              arr[i].children.push({it})
            }
          })
        })
        //console.log(arr)
        this.selectTreeData = data
        //console.log(this.selectTreeData)
      },
      setEnabled (enabled) {
        if (enabled) {
          this.handleReset()
        }
      },
      rowClick (data) {
        this.handleReset()
        if (data) {
          this.formItem = Object.assign({}, data.row)
        }
        this.formItem.status = this.formItem.status + ''
      },
      handleReset () {
        const newData = {
          menuCode: null,
          menuName: '',
          iconPath: 'md-document',
          menuPath: null,
          target: '_self',
          status: 0,
          operateUserId: null,
          pid: 0,
          type: 0
        }
        this.formItem = newData
        this.$refs['menuForm'].resetFields()
        this.saving = false
      },
      handleSubmit () {
        this.$refs['menuForm'].validate((valid) => {
          if (valid) {
            this.saving = true
            if (!this.formItem.id) {
              saveMenu(this.formItem).then(res => {
                if (res.code === 200) {
                  this.$Message.success(res.message)
                }
                this.handleSearch()
                this.getMenuList() //加载菜单树
              }).finally(() => {
                this.saving = false
              })
            } else {
              updateMenu(this.formItem).then(res => {
                if (res.code === 200) {
                  this.$Message.success(res.message)
                }
                this.getMenuList() //加载菜单树
                this.handleSearch()
              }).finally(() => {
                this.saving = false
              })
            }
          }
        })
      },
      handleRemove () {
        removeMenu(this.formItem.menuId).then(res => {
          this.handleReset()
          this.handleSearch()
          if (res.code === 0) {
            this.$Message.success('删除成功')
          }
        })
      },
      onIconClick (item) {
        this.formItem.iconPath = item
      },
      getMenuList () {
        //菜单树
        getMenuList(this.search).then(res => {
          if (res.code === 200) {
            this.setSelectTree(this.data)
          }
        })
      },
      handleSearch () {
        getMenuAllList(this.search).then(res => {
          if (res.code === 200) {
            this.data = res.data.records
          }
        })
      }
    },
    mounted: function () {
      this.getMenuList() //加载菜单树
      this.handleSearch()
    }
  }
</script>
<style>
 .menu{
  padding: 20px;
 }
  .icons {
    overflow: auto;
    zoom: 1;
    height: 300px;
  }

  .icons-item {
    float: left;
    margin: 6px;
    width: 60px;
    text-align: center;
    list-style: none;
    cursor: pointer;
    color: #5c6b77;
    transition: all .2s ease;
    position: relative;
  }

  .icons-item p {
    word-break: break-all;
    overflow: hidden;
  }
</style>
