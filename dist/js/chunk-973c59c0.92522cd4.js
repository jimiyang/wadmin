(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-973c59c0"],{"1f44":function(e,t,r){},"67cf":function(e,t,r){"use strict";var a=r("1f44"),s=r.n(a);s.a},fa32:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Card",{attrs:{shadow:""}},[r("div",[r("div",{staticClass:"account-setting-con left-con"},[r("Menu",{attrs:{"active-name":"profile"},on:{"on-select":e.handleSelect}},[r("MenuItem",{attrs:{name:"profile"}},[r("span",[e._v("基本信息")])]),r("MenuItem",{attrs:{name:"security"}},[r("span",[e._v("安全设置")])])],1)],1),r("div",{staticClass:"account-setting-con view-con"},["profile"===e.currentSelect?r("Form",{ref:"userForm",attrs:{rules:e.formItemRules,model:e.profile}},[r("h3",[r("span",[e._v("基本信息")])]),r("Row",[r("Col",{attrs:{span:"8"}},[r("FormItem",{attrs:{label:"昵称",prop:"nickName"}},[r("Input",{attrs:{placeholder:"请输入内容"},model:{value:e.profile.nickName,callback:function(t){e.$set(e.profile,"nickName",t)},expression:"profile.nickName"}})],1),r("FormItem",{attrs:{label:"描述"}},[r("Input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.profile.userDesc,callback:function(t){e.$set(e.profile,"userDesc",t)},expression:"profile.userDesc"}})],1)],1),r("Col",{attrs:{span:"8"}},[r("FormItem",{attrs:{label:"头像",prop:"avatar"}},[r("Avatar",{staticStyle:{height:"128px",width:"128px","border-radius":"50%"}})],1)],1)],1),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("userForm")}}},[e._v("保存")])],1)],1):e._e(),"security"===e.currentSelect?r("div",[r("h3",[r("span",[e._v("安全设置")])]),r("Divider"),r("p",[e._v("登陆名")]),r("p",{staticStyle:{color:"#9ea7b4"}},[e._v("当前登录名:"+e._s(e.profile.userName))]),r("Divider"),r("p",[e._v("绑定手机")]),r("p",{staticStyle:{color:"#9ea7b4"}},[e.profile.mobile?r("span",[e._v("已绑定手机："+e._s(e.profile.mobile)+"  "),r("a",[e._v("修改")])]):r("span",[e._v("\n             尚未绑定手机 "),r("a",[e._v("绑定")])])]),r("Divider"),r("p",[e._v("绑定邮箱")]),r("p",{staticStyle:{color:"#9ea7b4"}},[e.profile.email?r("span",[e._v("已绑定邮箱："+e._s(e.profile.email)+"  "),r("a",[e._v("修改")])]):r("span",[e._v("\n             尚未绑定手机 "),r("a",[e._v("绑定")])])]),r("Divider",{staticStyle:{color:"#9ea7b4"}})],1):e._e()],1)])])},s=[],i={name:"message_page",data(){return{currentSelect:"profile",formItemRules:{nickName:[{required:!0,message:"昵称不能为空",trigger:"blur"}]},profile:this.$store.state.user}},methods:{handleSubmit(e){"userForm"===e&&this.$refs["userForm"].validate(e=>{e&&updateCurrentUserInfo(this.profile).then(e=>{0===e.code&&(this.$Message.success("修改成功"),this.$store.commit("setAvatar",this.profile.avatar),this.$store.commit("setNickName",this.profile.nickName))}).finally(()=>{this.saving=!1})})},handleSelect(e){this.currentSelect=e}},mounted(){}},o=i,l=(r("67cf"),r("4e82")),n=Object(l["a"])(o,a,s,!1,null,null,null);t["default"]=n.exports}}]);