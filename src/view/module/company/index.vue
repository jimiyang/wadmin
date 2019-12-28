<template>
  <div>
    <Card>
      <Form ref="searchForm"
          :model="pageInfo"
          inline
          :label-width="80">
        <FormItem label="公司名称" prop="fullName">
          <Input type="text"  placeholder="请输入关键字"/>
        </FormItem>
        <FormItem label="创建人" prop="deptType">
          <Input type="text"  placeholder="请输入关键字"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSearch(1)">查询</Button>&nbsp;
          <Button @click="handleResetForm('searchForm')">重置</Button>
        </FormItem>
      </Form>
      <div class="search-con search-con-top">
        <Button type="primary" @click="handleModal()">
          <span>添加</span>
        </Button>
        <Button class="ml20" type="primary" @click="deleteAllSelected()">
          <span>批量删除</span>
        </Button>
      </div>
      <Table border :columns="columns" :data="data" :loading="loading" ref="selection" @on-selection-change="handleSelectRow()">
        <template slot="status" slot-scope="{ row }">
          <Badge v-if="row.status===1" status="success" text="正常"/>
          <Badge v-else-if="row.status===2" status="warning" text="锁定"/>
          <Badge v-else="" status="error" text="禁用"/>
        </template>
        <template slot="action" slot-scope="{ row }">
          <a @click="handleModal(row)">编辑</a>&nbsp;
          <a @click="deleteCompanyEvent(row)">删除</a>&nbsp;
        </template>
      </Table>
      <Page transfer :total="pageInfo.total" :current="pageInfo.current" :page-size="pageInfo.size" show-elevator
        show-sizer
        show-total
        @on-change="handlePage" @on-page-size-change='handlePageSize'></Page>
    </Card>
    <Modal v-model="modalVisible"
      :title="modalTitle"
      width="40"
      @on-cancel="handleReset"
    >
      <div>
        <Form  ref="form1" :model="formItem" :rules="formItemRules" :label-width="100">
          <FormItem label="公司类型" prop="deptType">
            <RadioGroup v-model="formItem.deptType">
              <Radio :label="0">公司</Radio>
              <Radio :label="1">部门</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="公司全称" prop="fullName">
            <Input v-model="formItem.fullName" placeholder="请输入内容" />
          </FormItem>
          <FormItem label="公司简称" prop="simpleName">
            <Input v-model="formItem.simpleName" placeholder="请输入内容" />
          </FormItem>
          <FormItem label="公司人数" prop="num">
            <Input type="number" v-model="formItem.num" placeholder="请输入内容" />
          </FormItem>
          <FormItem label="公司地址" prop="address">
            <Input v-model="formItem.address" placeholder="请输入内容" />
          </FormItem>
          <!--<FormItem label="状态">
            <RadioGroup v-model="formItem.status" type="button">
              <Radio label="0">禁用</Radio>
              <Radio label="1">正常</Radio>
              <Radio label="2">锁定</Radio>
            </RadioGroup>
          </FormItem>-->
          <FormItem label="描述">
            <Input v-model="formItem.tips" type="textarea" placeholder="请输入内容" />
          </FormItem>
        </Form>
        <div class="drawer-footer">
          <Button type="default" @click="handleReset">取消</Button>&nbsp;
          <Button type="primary" @click="handleSubmit" :loading="saving">保存</Button>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
  import {startWith, listConvertTree} from '@/libs/util'
  import {getListCompany, addCompany, updateCompany, deleteCompany, deleteSingleCompany, getCompanyInfo} from '@/api/company'
  export default {
    data() {
      return {
        loading: false,
        saving: false,
        modalVisible: false,
        modalTitle: '',
        pageInfo: {
          fullName: null, //公司名称
          deptType: null, //公司类型 0公司 1部门
          current: 1, //当前页
          page: 1, //总页数
          size: 10, //每页条数
        },
        selectMenus: [],
        selectedRowKeys: [],
        formItemRules: {
          fullName: [
            {required: true, message: '公司全称不能为空', trigger: 'blur'}
          ],
          simpleName: [
            {required: true, message: '公司简称不能为空', trigger: 'blur'}
          ],
          tips: [
            {required: true, message: '公司标签不能为空', trigger: 'blur'}
          ]
        },
        formItem: {
          deptType: 0,
          address: null,
          fullName: null,
          num: null,
          pid: 1,
          simpleName: null,
          tips: null
        },
        columns: [
          {
            type: 'selection',
            width: 60,
          },
          {
            title: '编号',
            key: 'id',
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
      handleSelectRow() {
        this.selectedRowKeys = this.$refs.selection.getSelection()
      },
      deleteAllSelected () {
        //批量删除
        let arr = []
        if (this.selectedRowKeys.length === 0) {
          this.$Message.warning('请选择要删除的信息')
          return false
        }
        this.selectedRowKeys.map(item => {
          arr.push(item.id)
        })
        deleteCompany({ids: arr}).then(rs => {
          if (rs.code === 200) {
            this.$Message.warning(rs.message)
            this.handleSearch()
          }
        })
      },
      handleModal(data) {
        if (data) {
          this.formItem = Object.assign({}, this.formItem, data)
        }
        this.modalTitle = data ? '编辑' : '添加'
        this.modalVisible = true
      },
      handleResetForm() {
        this.$refs['form1'].resetFields()
      },
      handleReset() {
        const newData = {
          address: null,
          compId: null,
          fullName: null,
          num: null,
          pid: null,
          simpleName: null,
          tips: null,
          userId: null
        }
        this.formItem = newData
        //重置验证
        this.handleResetForm()
        this.formItem.grantMenus = []
        this.formItem.grantActions = []
        this.modalVisible = false
        this.saving = false
      },
      handleSubmit() {
        this.$refs['form1'].validate((valid) => {
          if (valid) {
            this.saving = true
            if (!this.formItem.id) {
              //添加
              addCompany(this.formItem).then(res => {
                if (res.code === 200) {
                  this.$Message.success('保存成功')
                  this.handleReset()
                }
                this.handleSearch()
              }).finally(() => {
                this.saving = false
              })
            } else {
              //编辑
              updateCompany(this.formItem).then(res => {
                if (res.code === 200) {
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
      },
      //删除
      deleteCompanyEvent(row) {
        this.$Modal.confirm({
          title: `确认要删除${row.simpleName}公司信息吗？`,
          onOk: () => {
            deleteSingleCompany(row.id).then(rs => {
              if (rs.code === 200) {
                this.$Message.success(rs.message);
                this.handleSearch()
              }
            })
          },
          onCancel: () => {
            //this.$Message.info('Clicked cancel');
          }
        })
      },
      handleSearch(page) {
        this.loading = true
        const params = {
          current: this.pageInfo.current,
          size: this.pageInfo.size,
          fullName: this.pageInfo.fullName,
        }

        getListCompany(params).then(res => {
          this.data = res.data.records
          //console.log(res.data.total)
          this.pageInfo.total = parseInt(res.data.total)
        }).finally(() => {
          this.loading = false
        })
      },
      handlePage(current) {
        this.pageInfo.page = current
        this.handleSearch()
      },
      handlePageSize(size) {
        this.pageInfo.size = size
        this.handleSearch()
      },
      handleTabClick(name){
        this.current = name
        this.handleModal();
      }
    },
    mounted() {
      this.handleSearch()
    }
  }
</script>