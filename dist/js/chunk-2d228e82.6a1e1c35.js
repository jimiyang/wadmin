(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228e82"],{dad3:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Card",[r("Form",{ref:"searchForm",attrs:{model:e.pageInfo,inline:"","label-width":80}},[r("FormItem",{attrs:{label:"登录名",prop:"userName"}},[r("Input",{attrs:{type:"text",placeholder:"请输入关键字"},model:{value:e.pageInfo.userName,callback:function(t){e.$set(e.pageInfo,"userName",t)},expression:"pageInfo.userName"}})],1),r("FormItem",{attrs:{label:"手机号",prop:"mobile"}},[r("Input",{attrs:{type:"text",placeholder:"请输入关键字"},model:{value:e.pageInfo.mobile,callback:function(t){e.$set(e.pageInfo,"mobile",t)},expression:"pageInfo.mobile"}})],1),r("FormItem",{attrs:{label:"邮箱",prop:"email"}},[r("Input",{attrs:{type:"text",placeholder:"请输入关键字"},model:{value:e.pageInfo.email,callback:function(t){e.$set(e.pageInfo,"email",t)},expression:"pageInfo.email"}})],1),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSearch(1)}}},[e._v("查询")]),e._v(" \n        "),r("Button",{on:{click:function(t){return e.handleResetForm("searchForm")}}},[e._v("重置")])],1)],1),r("div",{staticClass:"search-con search-con-top"},[r("ButtonGroup",[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleModal()}}},[r("span",[e._v("添加")])])],1)],1),r("Table",{attrs:{border:"",columns:e.columns,data:e.data,loading:e.loading},scopedSlots:e._u([{key:"status",fn:function(e){var t=e.row;return[1===t.status?r("Badge",{attrs:{status:"success",text:"正常"}}):2===t.status?r("Badge",{attrs:{status:"warning",text:"锁定"}}):r("Badge",{attrs:{status:"error",text:"禁用"}})]}},{key:"action",fn:function(t){var s=t.row;return[r("a",{attrs:{disabled:!e.hasAuthority("systemUserEdit")},on:{click:function(t){return e.handleModal(s)}}},[e._v("编辑")]),e._v(" \n        "),r("Dropdown",{directives:[{name:"show",rawName:"v-show",value:e.hasAuthority("systemUserEdit"),expression:"hasAuthority('systemUserEdit')"}],ref:"dropdown",attrs:{transfer:""},on:{"on-click":function(t){return e.handleClick(t,s)}}},[r("a",{attrs:{href:"javascript:void(0)"}},[r("span",[e._v("更多")]),r("Icon",{attrs:{type:"ios-arrow-down"}})],1),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",{attrs:{name:"sendToEmail"}},[e._v("发送到密保邮箱")])],1)],1),e._v(" \n      ")]}}])}),r("Page",{attrs:{transfer:"",total:e.pageInfo.total,current:e.pageInfo.page,"page-size":e.pageInfo.limit,"show-elevator":"","show-sizer":"","show-total":""},on:{"on-change":e.handlePage,"on-page-size-change":e.handlePageSize}})],1),r("Modal",{attrs:{title:e.modalTitle,width:"40"},on:{"on-cancel":e.handleReset},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[r("div",[r("Tabs",{attrs:{value:e.current},on:{"on-click":e.handleTabClick}},[r("TabPane",{attrs:{label:"用户信息",name:"form1"}},[r("Form",{directives:[{name:"show",rawName:"v-show",value:"form1"==e.current,expression:"current == 'form1'"}],ref:"form1",attrs:{model:e.formItem,rules:e.formItemRules,"label-width":100}},[r("FormItem",{attrs:{label:"用户类型",prop:"userType"}},[r("RadioGroup",{model:{value:e.formItem.userType,callback:function(t){e.$set(e.formItem,"userType",t)},expression:"formItem.userType"}},[r("Radio",{attrs:{label:"super"}},[e._v("超级管理员")]),r("Radio",{attrs:{label:"normal"}},[e._v("普通管理员")])],1)],1),r("FormItem",{attrs:{label:"昵称",prop:"nickName"}},[r("Input",{attrs:{placeholder:"请输入内容"},model:{value:e.formItem.nickName,callback:function(t){e.$set(e.formItem,"nickName",t)},expression:"formItem.nickName"}})],1),r("FormItem",{attrs:{label:"登录名",prop:"userName"}},[r("Input",{attrs:{disabled:!!e.formItem.userId,placeholder:"请输入内容"},model:{value:e.formItem.userName,callback:function(t){e.$set(e.formItem,"userName",t)},expression:"formItem.userName"}})],1),e.formItem.userId?e._e():r("FormItem",{attrs:{label:"登录密码",prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入内容"},model:{value:e.formItem.password,callback:function(t){e.$set(e.formItem,"password",t)},expression:"formItem.password"}})],1),e.formItem.userId?e._e():r("FormItem",{attrs:{label:"再次确认密码",prop:"passwordConfirm"}},[r("Input",{attrs:{type:"password",placeholder:"请输入内容"},model:{value:e.formItem.passwordConfirm,callback:function(t){e.$set(e.formItem,"passwordConfirm",t)},expression:"formItem.passwordConfirm"}})],1),r("FormItem",{attrs:{label:"邮箱",prop:"email"}},[r("Input",{attrs:{placeholder:"请输入内容"},model:{value:e.formItem.email,callback:function(t){e.$set(e.formItem,"email",t)},expression:"formItem.email"}})],1),r("FormItem",{attrs:{label:"手机号",prop:"mobile"}},[r("Input",{attrs:{placeholder:"请输入内容"},model:{value:e.formItem.mobile,callback:function(t){e.$set(e.formItem,"mobile",t)},expression:"formItem.mobile"}})],1),r("FormItem",{attrs:{label:"状态"}},[r("RadioGroup",{attrs:{type:"button"},model:{value:e.formItem.status,callback:function(t){e.$set(e.formItem,"status",t)},expression:"formItem.status"}},[r("Radio",{attrs:{label:"0"}},[e._v("禁用")]),r("Radio",{attrs:{label:"1"}},[e._v("正常")]),r("Radio",{attrs:{label:"2"}},[e._v("锁定")])],1)],1),r("FormItem",{attrs:{label:"描述"}},[r("Input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.formItem.userDesc,callback:function(t){e.$set(e.formItem,"userDesc",t)},expression:"formItem.userDesc"}})],1)],1)],1),r("TabPane",{attrs:{label:"分配角色",name:"form2"}},[r("Form",{directives:[{name:"show",rawName:"v-show",value:"form2"==e.current,expression:"current == 'form2'"}],ref:"form2",attrs:{model:e.formItem,"label-width":100,rules:e.formItemRules}},[r("FormItem",{attrs:{label:"分配角色",prop:"grantRoles"}},[r("CheckboxGroup",{model:{value:e.formItem.grantRoles,callback:function(t){e.$set(e.formItem,"grantRoles",t)},expression:"formItem.grantRoles"}},e._l(e.selectRoles,(function(t,s){return r("Checkbox",{key:s,attrs:{label:t.roleId}},[r("span",[e._v(e._s(t.roleName))])])})),1)],1)],1)],1),r("TabPane",{attrs:{label:"分配权限",name:"form3"}},[r("Alert",{attrs:{type:"info","show-icon":""}},[e._v("\n            支持用户单独分配功能权限"),r("code",[e._v("(除角色已经分配菜单功能,禁止勾选!)")])]),r("Form",{directives:[{name:"show",rawName:"v-show",value:"form3"==e.current,expression:"current == 'form3'"}],ref:"form3",attrs:{model:e.formItem,rules:e.formItemRules,"label-width":100}},[r("FormItem",{attrs:{label:"过期时间",prop:"expireTime"}},[e.formItem.isExpired?r("Badge",{attrs:{text:"授权已过期"}},[r("DatePicker",{staticClass:"ivu-form-item-error",attrs:{type:"datetime",placeholder:"设置有效期"},model:{value:e.formItem.expireTime,callback:function(t){e.$set(e.formItem,"expireTime",t)},expression:"formItem.expireTime"}})],1):r("DatePicker",{attrs:{type:"datetime",placeholder:"设置有效期"},model:{value:e.formItem.expireTime,callback:function(t){e.$set(e.formItem,"expireTime",t)},expression:"formItem.expireTime"}})],1),r("FormItem",{attrs:{label:"功能菜单",prop:"grantMenus"}},[r("tree-table",{ref:"tree",staticStyle:{"max-height":"450px",overflow:"auto"},attrs:{"expand-key":"menuName","expand-type":!1,"is-fold":!1,"tree-type":!0,selectable:!0,columns:e.columns2,data:e.selectMenus},scopedSlots:e._u([{key:"operation",fn:function(t){return[r("CheckboxGroup",{model:{value:e.formItem.grantActions,callback:function(t){e.$set(e.formItem,"grantActions",t)},expression:"formItem.grantActions"}},e._l(t.row.actionList,(function(t,s){return r("Checkbox",{key:s,attrs:{disabled:t.disabled,label:t.authorityId}},[r("span",{attrs:{title:t.actionDesc}},[e._v(e._s(t.actionName))])])})),1)]}}])})],1)],1)],1),r("TabPane",{attrs:{label:"修改密码",name:"form4"}},[r("Form",{directives:[{name:"show",rawName:"v-show",value:"form4"==e.current,expression:"current == 'form4'"}],ref:"form4",attrs:{model:e.formItem,rules:e.formItemRules,"label-width":100}},[r("FormItem",{attrs:{label:"登录名",prop:"userName"}},[r("Input",{attrs:{disabled:!!e.formItem.userId,placeholder:"请输入内容"},model:{value:e.formItem.userName,callback:function(t){e.$set(e.formItem,"userName",t)},expression:"formItem.userName"}})],1),r("FormItem",{attrs:{label:"登录密码",prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入内容"},model:{value:e.formItem.password,callback:function(t){e.$set(e.formItem,"password",t)},expression:"formItem.password"}})],1),r("FormItem",{attrs:{label:"再次确认密码",prop:"passwordConfirm"}},[r("Input",{attrs:{type:"password",placeholder:"请输入内容"},model:{value:e.formItem.passwordConfirm,callback:function(t){e.$set(e.formItem,"passwordConfirm",t)},expression:"formItem.passwordConfirm"}})],1)],1)],1)],1),r("div",{staticClass:"drawer-footer"},[r("Button",{attrs:{type:"default"},on:{click:e.handleReset}},[e._v("取消")]),e._v(" \n        "),r("Button",{attrs:{type:"primary",loading:e.saving},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1)])],1)},a=[],o=r("c276"),i=r("6b6c");const l=e=>i["a"].get("user",e);var m={name:"SystemUser",data(){const e=(e,t,r)=>{let s=/^[_a-zA-Z0-9]+$/,a=/^.{4,18}$/;""===t?r(new Error("登录名不能为空")):""===t||s.test(t)?""===t||a.test(t)?r():r(new Error("长度6到18个字符")):r(new Error("只允许字母、数字、下划线"))},t=(e,t,r)=>{let s=/^.{6,18}$/;""===t?r(new Error("请输入密码")):t!==this.formItem.password?r(new Error("两次输入密码不一致")):""===t||s.test(t)?r():r(new Error("长度6到18个字符"))},r=(e,t,r)=>{""===t?r(new Error("请再次输入密码")):t!==this.formItem.password?r(new Error("两次输入密码不一致")):r()},s=(e,t,r)=>{let s=/^1\d{10}$/;""===t||s.test(t)?r():r(new Error("手机号码格式不正确"))};return{loading:!1,saving:!1,modalVisible:!1,modalTitle:"",current:"form1",forms:["form1","form2","form3","form4"],selectMenus:[],selectRoles:[],pageInfo:{page:1,pageSize:10,sort:"createTime",order:"desc"},formItemRules:{userType:[{required:!0,message:"用户类型不能为空",trigger:"blur"}],userName:[{required:!0,message:"用户名不能为空",trigger:"blur"},{required:!0,validator:e,trigger:"blur"}],password:[{required:!0,validator:t,trigger:"blur"}],passwordConfirm:[{required:!0,validator:r,trigger:"blur"}],nickName:[{required:!0,message:"昵称不能为空",trigger:"blur"}],email:[{required:!1,type:"email",message:"邮箱格式不正确",trigger:"blur"}],mobile:[{validator:s,trigger:"blur"}]},formItem:{userId:"",userName:"",nickName:"",password:"",passwordConfirm:"",status:1,companyId:"",email:"",mobile:"",userType:"normal",userDesc:"",avatar:"",grantRoles:[],grantActions:[],grantMenus:[],expireTime:"",isExpired:!1},columns:[{type:"selection",width:60},{title:"登录名",key:"userName",width:200},{title:"昵称",key:"nickName",width:150},{title:"邮箱",key:"email",width:200},{title:"手机号",key:"mobile",width:200},{title:"状态",slot:"status",key:"status",width:100},{title:"用户类型",key:"userType",width:150},{title:"注册时间",key:"createTime",width:180},{title:"描述",key:"userDesc"},{title:"操作",slot:"action",fixed:"right",width:150}],columns2:[{title:"菜单",key:"menuName",minWidth:"250px"},{title:"操作",type:"template",template:"operation",minWidth:"200px"}],data:[]}},methods:{handleModal(e){e&&(this.formItem=Object.assign({},this.formItem,e)),this.current===this.forms[0]&&(this.modalTitle=e?"编辑用户 - "+e.userName:"添加用户",this.modalVisible=!0),this.current===this.forms[1]&&(this.modalTitle=e?"分配角色 - "+e.userName:"分配角色",this.handleLoadRoles(this.formItem.userId)),this.current===this.forms[2]&&(this.modalTitle=e?"分配权限 - "+e.userName:"分配权限",this.handleLoadUserGranted(this.formItem.userId)),this.current===this.forms[3]&&(this.modalTitle=e?"修改密码 - "+e.userName:"修改密码",this.modalVisible=!0),this.formItem.status=this.formItem.status+""},handleResetForm(e){this.$refs[e].resetFields()},handleReset(){const e={userId:"",userName:"",nickName:"",password:"",passwordConfirm:"",status:1,companyId:"",email:"",mobile:"",userType:"normal",userDesc:"",avatar:"",grantRoles:[],grantMenus:[],grantActions:[],expireTime:"",isExpired:!1};this.formItem=e,this.forms.map(e=>{this.handleResetForm(e)}),this.current=this.forms[0],this.formItem.grantMenus=[],this.formItem.grantActions=[],this.modalVisible=!1,this.saving=!1},handleSubmit(){this.current===this.forms[0]&&this.$refs[this.current].validate(e=>{e&&(this.saving=!0,this.formItem.userId?updateUser(this.formItem).then(e=>{0===e.code&&(this.$Message.success("保存成功"),this.handleReset()),this.handleSearch()}).finally(()=>{this.saving=!1}):addUser(this.formItem).then(e=>{0===e.code&&(this.$Message.success("保存成功"),this.handleReset()),this.handleSearch()}).finally(()=>{this.saving=!1}))}),this.current===this.forms[1]&&this.formItem.userId&&this.$refs[this.current].validate(e=>{e&&(this.saving=!0,addUserRoles(this.formItem).then(e=>{0===e.code&&(this.$Message.success("分配角色成功"),this.handleReset()),this.handleSearch()}).finally(()=>{this.saving=!1}))}),this.current===this.forms[2]&&this.formItem.userId&&this.$refs[this.current].validate(e=>{if(e){const e=this.getCheckedAuthorities();this.saving=!0,grantAuthorityUser({userId:this.formItem.userId,expireTime:this.formItem.expireTime?this.formItem.expireTime.pattern("yyyy-MM-dd HH:mm:ss"):"",authorityIds:e}).then(e=>{0===e.code&&(this.$Message.success("授权成功"),this.handleReset()),this.handleSearch()}).finally(()=>{this.saving=!1})}}),this.current===this.forms[3]&&this.formItem.userId&&this.$refs[this.current].validate(e=>{e&&(this.saving=!0,updatePassword({userId:this.formItem.userId,password:this.formItem.password}).then(e=>{0===e.code&&(this.$Message.success("修改成功"),this.handleReset()),this.handleSearch()}).finally(()=>{this.saving=!1}))})},handleSearch(e){e&&(this.pageInfo.page=e),this.loading=!0,l(this.pageInfo).then(e=>{console.log(e)}).finally(()=>{this.loading=!1})},getCheckedAuthorities(){const e=this.$refs["tree"].getCheckedProp("authorityId");return e.concat(this.formItem.grantActions)},handleLoadUserGranted(e){const t=this,r=getAuthorityUser(e),s=[];Promise.all([p1,r]).then((function(e){let r=e[0],a=e[1];if(0===r.code&&r.data){let e={primaryKey:"menuId",parentKey:"parentId",startPid:"0"};if(0===a.code&&a.data&&a.data.length>0){let e=[],r=[];a.data.map(t=>{"role"===t.owner&&s.push(t.authorityId),-1==t.authority.indexOf("MENU_")||e.includes(t.authorityId)||e.push(t.authorityId),-1==t.authority.indexOf("ACTION_")||r.includes(t.authorityId)||r.push(t.authorityId)}),t.formItem.grantMenus=e,t.formItem.grantActions=r,a.data.length>0&&(t.formItem.expireTime=a.data[0].expireTime,t.formItem.isExpired=a.data[0].isExpired)}r.data.map(e=>{t.formItem.grantMenus.includes(e.authorityId)&&(e._isChecked=!0,s.includes(e.authorityId)&&(e.disabled=!0,e.menuName+=" (禁止勾选)")),e.actionList.map(e=>{s.includes(e.authorityId)&&(e.disabled=!0)})}),t.selectMenus=Object(o["j"])(r.data,e)}t.modalVisible=!0}))},handleLoadRoles(e){if(!e)return;const t=this,r=getAllRoles(),s=getUserRoles(e);Promise.all([r,s]).then((function(e){let r=e[0],s=e[1];if(0===r.code&&(t.selectRoles=r.data),0===s.code){let e=[];s.data.map(t=>{e.push(t.roleId)}),t.formItem.grantRoles=e}t.modalVisible=!0}))},handlePage(e){this.pageInfo.page=e,this.handleSearch()},handlePageSize(e){this.pageInfo.limit=e,this.handleSearch()},handleClick(e,t){switch(e){case"sendToEmail":this.$Message.warning("发送至密保邮箱,开发中...");break}},handleTabClick(e){this.current=e,this.handleModal()}},mounted:function(){}},n=m,d=r("4e82"),u=Object(d["a"])(n,s,a,!1,null,null,null);t["default"]=u.exports}}]);