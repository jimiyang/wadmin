(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21aac0"],{bd08:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{background:"#fff",padding:"10px",width:"1000px"}},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"标题",prop:"title"}},[a("Input",{attrs:{placeholder:"请输入模板标题"},model:{value:e.formValidate.title,callback:function(t){e.$set(e.formValidate,"title",t)},expression:"formValidate.title"}})],1),a("FormItem",{attrs:{label:"创建者",prop:"username"}},[a("Input",{attrs:{placeholder:"请输入创建人姓名"},model:{value:e.formValidate.mail,callback:function(t){e.$set(e.formValidate,"mail",t)},expression:"formValidate.mail"}})],1),a("FormItem",{attrs:{label:"模板类别",prop:"type"}},[a("Select",{attrs:{placeholder:"请选择模板类别"},model:{value:e.formValidate.type,callback:function(t){e.$set(e.formValidate,"type",t)},expression:"formValidate.type"}},[a("Option",{attrs:{value:"beijing"}},[e._v("电商")]),a("Option",{attrs:{value:"shanghai"}},[e._v("广告")]),a("Option",{attrs:{value:"shenzhen"}},[e._v("小说")]),a("Option",{attrs:{value:"shenzhen"}},[e._v("知识付费")]),a("Option",{attrs:{value:"shenzhen"}},[e._v("其他")])],1)],1),a("FormItem",{attrs:{label:"创建日期",prop:"date"}},[a("DatePicker",{attrs:{type:"date",placeholder:"请选择日期"}})],1),a("FormItem",{attrs:{label:"模板封面",prop:"cover"}},[a("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"150px"},attrs:{"show-upload-list":!1,format:["jpg","jpeg","png"],"max-size":2048,"before-upload":e.handleBeforeUpload,multiple:"",type:"drag",action:"//jsonplaceholder.typicode.com/posts/"}},[a("div",{staticStyle:{width:"150px",height:"150px","line-height":"150px"}},[a("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)])],1),a("FormItem",{attrs:{label:"模板介绍",prop:"desc"}},[a("div",{staticStyle:{height:"450px",border:"1px solid #000"}},[a("quill-editor",{ref:"myQuillEditor",staticStyle:{height:"400px"},attrs:{options:e.editorOption,"on-success":e.handleSuccessQuill},on:{blur:function(t){return e.onEditorBlur(t)},focus:function(t){return e.onEditorFocus(t)},change:function(t){return e.onEditorChange(t)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)]),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("提交")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("重置")])],1)],1)],1)},l=[];const i=[["bold","italic","underline"],[{size:["small",!1,"large","huge"]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["image"]];var o={data(){return{formValidate:{title:"",username:"",type:"",date:"",cover:[],desc:""},ruleValidate:{title:[{required:!0,message:"请输入标题",trigger:"change"}],username:[{required:!0,message:"请输入创建者姓名",trigger:"blur"}],type:[{required:!0,message:"请选择类别",trigger:"change"}],date:[{required:!0,type:"date",message:"请选择日期",trigger:"change"}],cover:[{required:!0,type:"string",message:"请上传模板封面",trigger:"change"}],desc:[{required:!0,message:"请输入模板介绍",trigger:"blur"}]},content:"",editorOption:{modules:{toolbar:{container:i,handlers:{image:function(e){e?document.querySelector("#iviewUp input").click():this.quill.format("image",!1)}}}},imageResize:{},placeholder:"请输入文章内容"}}},methods:{handleSubmit(e){this.$refs[e].validate(e=>{e?this.$Message.success("Success!"):this.$Message.error("Fail!")})},handleReset(e){this.$refs[e].resetFields()},handleBeforeUpload(){},onEditorBlur(){},onEditorFocus(){},onEditorChange(){},onEditorChange(e){let t=this;t.content=e.html,t.contentTxt=e.text.substr(0,100)},handleSuccessQuill(e){console.log(e);let t=this.$refs.myQuillEditor.quill;if(e){let a=t.getSelection().index;t.insertEmbed(a,"image",e.data.path),t.setSelection(a+1)}else Message.error("图片插入失败")}}},n=o,s=a("4e82"),d=Object(s["a"])(n,r,l,!1,null,null,null);t["default"]=d.exports}}]);