(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33603c30"],{"195e":function(o,e,t){},"20c4":function(o,e,t){"use strict";t.r(e);var i=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("div",{staticClass:"search-con search-con-top"},[t("ButtonGroup",[t("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:function(e){return o.handleModal()}}},[t("span",[o._v("添加功能按钮")])])],1)],1),t("Alert",{attrs:{type:"info","show-icon":""}},[o._v("请绑定相关接口资源。否则请求网关服务器将提示"),t("code",[o._v('"权限不足,拒绝访问!"')])]),t("Table",{attrs:{border:"",columns:o.columns,data:o.data,loading:o.loading},scopedSlots:o._u([{key:"status",fn:function(e){var i=e.row;return[1===i.status?t("Badge",{attrs:{status:"success"}}):t("Badge",{attrs:{status:"error"}}),t("span",[o._v(o._s(i.actionName))])]}},{key:"action",fn:function(e){var i=e.row;return[t("a",{attrs:{disabled:!o.hasAuthority("systemMenuEdit")},on:{click:function(e){return o.handleModal(i)}}},[o._v("编辑")]),o._v("  \n      "),t("a",{attrs:{disabled:!o.hasAuthority("systemMenuEdit")},on:{click:function(e){return o.handleModal(i,o.forms[1])}}},[o._v("接口权限")]),o._v("  \n      "),t("a",{attrs:{disabled:!o.hasAuthority("systemMenuEdit")},on:{click:function(e){return o.handleRemove(i)}}},[o._v("删除")])]}}])}),t("Modal",{attrs:{title:o.modalTitle,width:"40"},on:{"on-cancel":o.handleReset},model:{value:o.modalVisible,callback:function(e){o.modalVisible=e},expression:"modalVisible"}},[t("div",[t("Form",{directives:[{name:"show",rawName:"v-show",value:"form1"==o.current,expression:"current=='form1'"}],ref:"form1",attrs:{model:o.formItem,rules:o.formItemRules,"label-width":100}},[t("FormItem",{attrs:{label:"上级菜单"}},[t("Input",{attrs:{disabled:""},model:{value:o.value.menuName,callback:function(e){o.$set(o.value,"menuName",e)},expression:"value.menuName"}})],1),t("FormItem",{attrs:{label:"功能标识",prop:"actionCode"}},[t("Input",{attrs:{placeholder:"请输入内容"},model:{value:o.formItem.actionCode,callback:function(e){o.$set(o.formItem,"actionCode",e)},expression:"formItem.actionCode"}}),t("span",[o._v("菜单标识+自定义标识.默认后缀：View、Edit")])],1),t("FormItem",{attrs:{label:"功能名称",prop:"actionName"}},[t("Input",{attrs:{placeholder:"请输入内容"},model:{value:o.formItem.actionName,callback:function(e){o.$set(o.formItem,"actionName",e)},expression:"formItem.actionName"}})],1),t("FormItem",{attrs:{label:"优先级"}},[t("InputNumber",{model:{value:o.formItem.priority,callback:function(e){o.$set(o.formItem,"priority",e)},expression:"formItem.priority"}})],1),t("FormItem",{attrs:{label:"状态"}},[t("RadioGroup",{attrs:{type:"button"},model:{value:o.formItem.status,callback:function(e){o.$set(o.formItem,"status",e)},expression:"formItem.status"}},[t("Radio",{attrs:{label:"0"}},[o._v("禁用")]),t("Radio",{attrs:{label:"1"}},[o._v("启用")])],1)],1),t("FormItem",{attrs:{label:"描述"}},[t("Input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:o.formItem.actionDesc,callback:function(e){o.$set(o.formItem,"actionDesc",e)},expression:"formItem.actionDesc"}})],1)],1),t("Form",{directives:[{name:"show",rawName:"v-show",value:"form2"==o.current,expression:"current=='form2'"}],ref:"form2",attrs:{model:o.formItem,rules:o.formItemRules}},[t("FormItem",{attrs:{prop:"authorities"}},[t("Transfer",{attrs:{data:o.selectApis,"list-style":{width:"45%",height:"480px"},titles:["选择接口","已选择接口"],"render-format":o.transferRender,"target-keys":o.formItem.authorityIds,filterable:""},on:{"on-change":o.handleTransferChange}})],1)],1),t("div",{staticClass:"drawer-footer"},[t("Button",{attrs:{type:"default"},on:{click:o.handleReset}},[o._v("取消")]),o._v(" \n        "),t("Button",{attrs:{type:"primary",loading:o.saving},on:{click:o.handleSubmit}},[o._v("保存")])],1)],1)])],1)},s=[],a={name:"MenuAction",props:{value:Object},data(){const o=(o,e,t)=>{let i=/^[_a-zA-Z0-9]+$/;""===e?t(new Error("功能标识不能为空")):""===e||i.test(e)?t():t(new Error("只允许字母、数字、下划线"))};return{modalVisible:!1,saving:!1,loading:!1,current:"form1",forms:["form1","form2"],modalTitle:"",confirmModal:!1,selectApis:[],formItemRules:{actionCode:[{required:!0,validator:o,message:"功能编码不能为空",trigger:"blur"}],actionName:[{required:!0,message:"功能名称不能为空",trigger:"blur"}]},formItem:{actionId:"",actionCode:"",actionName:"",authorityIds:[],status:1,menuId:"",priority:0,actionDesc:""},columns:[{title:"功能名称",slot:"status",width:150},{title:"功能编码",key:"actionCode"},{title:"操作",slot:"action",fixed:"right",width:160}],data:[]}},methods:{handleModal(o,e){o&&(this.formItem=Object.assign({},this.formItem,o)),e||(e=this.forms[0]),e===this.forms[0]&&(this.modalTitle=o?"编辑功能 - "+this.value.menuName+" > "+o.actionName:"添加功能 - "+this.value.menuName,this.modalVisible=!0,this.formItem.actionCode=this.formItem.actionId?this.formItem.actionCode:this.value.menuCode),e===this.forms[1]&&(this.modalTitle=o?"接口授权 - "+this.value.menuName+" > "+o.actionName:"接口授权",this.handleLoadActionApi(this.formItem.actionId)),this.current=e,this.formItem.status=this.formItem.status+""},handleReset(){const o={actionId:"",actionCode:"",actionName:"",authorityIds:[],status:1,priority:0,actionDesc:""};this.formItem=o,this.forms.map(o=>{this.$refs[o].resetFields()}),this.current=this.forms[0],this.modalVisible=!1,this.saving=!1},handleSubmit(){this.current===this.forms[0]&&this.$refs[this.current].validate(o=>{o&&(this.saving=!0,this.formItem.actionId?updateAction(this.formItem).then(o=>{this.handleReset(),this.handleSearch(),0===o.code&&this.$Message.success("保存成功")}).finally(()=>{this.saving=!1}):addAction(this.formItem).then(o=>{this.handleReset(),this.handleSearch(),0===o.code&&this.$Message.success("保存成功")}).finally(()=>{this.saving=!1}))}),this.current===this.forms[1]&&this.$refs[this.current].validate(o=>{o&&(this.saving=!0,grantAuthorityAction({actionId:this.formItem.actionId,authorityIds:this.formItem.authorityIds}).then(o=>{this.handleReset(),this.handleSearch(),0===o.code&&this.$Message.success("绑定成功")}).finally(()=>{this.saving=!1}))})},handleSearch(){this.value&&this.value.menuId&&(this.formItem.menuId=this.value.menuId,this.loading=!0,getActionsByMenu(this.formItem.menuId).then(o=>{this.data=o.data}).finally(()=>{this.loading=!1}))},handleRemove(o){this.$Modal.confirm({title:"确定删除吗？",onOk:()=>{removeAction(o.actionId).then(o=>{this.handleSearch(),0===o.code&&(this.pageInfo.page=1,this.$Message.success("删除成功"))})}})},handleLoadActionApi(o){if(!o)return;const e=this,t=getAuthorityApi(""),i=getAuthorityAction(o);Promise.all([t,i]).then((function(o){let t=o[0],i=o[1];if(0===t.code&&(t.data.map(o=>{o.key=o.authorityId,o.label=`${o.prefix.replace("/**","")}${o.path} - ${o.apiName}`,o.disabled="/**"===o.path}),e.selectApis=t.data),0===i.code){const o=[];i.data.map(e=>{o.includes(e.authorityId)||o.push(e.authorityId)}),e.formItem.authorityIds=o}e.modalVisible=!0}))},transferRender(o){return`<span  title="${o.label}">${o.label}</span>`},handleTransferChange(o,e,t){-1!=o.indexOf("1")?this.formItem.authorityIds=["1"]:this.formItem.authorityIds=o}},watch:{value(o){this.handleSearch()}},mounted:function(){}},r=a,n=t("4e82"),l=Object(n["a"])(r,i,s,!1,null,null,null);e["default"]=l.exports},"48b5":function(o,e,t){"use strict";var i=t("195e"),s=t.n(i);s.a},"59ea":function(o,e,t){"use strict";t.r(e);var i=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("Row",{attrs:{gutter:8}},[t("Col",{attrs:{xs:8,sm:8,md:8,lg:6}},[t("Card",{attrs:{shadow:""}},[t("tree-table",{staticStyle:{"max-height":"700px",overflow:"auto"},attrs:{"expand-key":"menuName","expand-type":!1,"is-fold":!1,"tree-type":!0,selectable:!1,columns:o.columns,data:o.data},on:{"radio-click":o.rowClick},scopedSlots:o._u([{key:"status",fn:function(o){return[1===o.row.status?t("Badge",{attrs:{status:"success"}}):t("Badge",{attrs:{status:"error"}}),t("Icon",{attrs:{type:o.row.icon,size:"16"}})]}}])})],1)],1),t("Col",{attrs:{xs:16,sm:16,md:16,lg:10}},[t("Card",{attrs:{shadow:""}},[t("div",{staticClass:"search-con search-con-top"},[t("ButtonGroup",[t("Button",{attrs:{type:"primary"},on:{click:function(e){return o.setEnabled(!0)}}},[o._v("添加\n          ")]),t("Button",{attrs:{type:"primary"},on:{click:function(e){o.confirmModal=!0}}},[o._v("删除\n          ")])],1),t("Modal",{attrs:{title:"提示"},on:{"on-ok":o.handleRemove},model:{value:o.confirmModal,callback:function(e){o.confirmModal=e},expression:"confirmModal"}},[o._v("\n          确定删除,菜单资源【"+o._s(o.formItem.menuName)+"】吗?"+o._s(o.formItem.children&&o.formItem.children.length>0?"存在子菜单,将一起删除.是否继续?":"")+"\n\n        ")])],1),t("Form",{ref:"menuForm",attrs:{model:o.formItem,rules:o.formItemRules,"label-width":80}},[t("FormItem",{attrs:{label:"上级菜单",prop:"parentId"}},[t("treeselect",{attrs:{options:o.selectTreeData,"default-expand-level":1,normalizer:o.treeSelectNormalizer},model:{value:o.formItem.parentId,callback:function(e){o.$set(o.formItem,"parentId",e)},expression:"formItem.parentId"}})],1),t("FormItem",{attrs:{label:"菜单标识",prop:"menuCode"}},[t("Input",{attrs:{placeholder:"请输入内容"},model:{value:o.formItem.menuCode,callback:function(e){o.$set(o.formItem,"menuCode",e)},expression:"formItem.menuCode"}})],1),t("FormItem",{attrs:{label:"菜单名称",prop:"menuName"}},[t("Input",{attrs:{placeholder:"请输入内容"},model:{value:o.formItem.menuName,callback:function(e){o.$set(o.formItem,"menuName",e)},expression:"formItem.menuName"}})],1),t("FormItem",{attrs:{label:"页面地址",prop:"path"}},[t("Input",{attrs:{placeholder:"请输入内容"},model:{value:o.formItem.path,callback:function(e){o.$set(o.formItem,"path",e)},expression:"formItem.path"}},[t("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:o.formItem.scheme,callback:function(e){o.$set(o.formItem,"scheme",e)},expression:"formItem.scheme"}},[t("Option",{attrs:{value:"/"}},[o._v("/")]),t("Option",{attrs:{value:"http://"}},[o._v("http://")]),t("Option",{attrs:{value:"https://"}},[o._v("https://")])],1),t("Select",{staticStyle:{width:"100px"},attrs:{slot:"append"},slot:"append",model:{value:o.formItem.target,callback:function(e){o.$set(o.formItem,"target",e)},expression:"formItem.target"}},[t("Option",{attrs:{value:"_self"}},[o._v("窗口内打开")]),t("Option",{attrs:{disabled:"/"===o.formItem.scheme,value:"_blank"}},[o._v("新窗口打开")])],1)],1),"/"===o.formItem.scheme?t("span",[o._v("前端组件：/view/module/"+o._s(o.formItem.path)+".vue")]):t("span",[o._v("跳转地址："+o._s(o.formItem.scheme)+o._s(o.formItem.path))])],1),t("FormItem",{attrs:{label:"图标"}},[t("Input",{attrs:{placeholder:"请输入内容"},model:{value:o.formItem.icon,callback:function(e){o.$set(o.formItem,"icon",e)},expression:"formItem.icon"}},[t("Icon",{attrs:{slot:"prepend",size:"22",type:o.formItem.icon},slot:"prepend"}),t("Poptip",{attrs:{slot:"append",width:"600",placement:"bottom"},slot:"append"},[t("Button",{attrs:{icon:"ios-search"}}),t("div",{attrs:{slot:"content"},slot:"content"},[t("ul",{staticClass:"icons"},o._l(o.selectIcons,(function(e){return t("li",{staticClass:"icons-item",attrs:{title:e},on:{click:function(t){return o.onIconClick(e)}}},[t("Icon",{attrs:{type:e,size:"28"}}),t("p",[o._v(o._s(e))])],1)})),0)])],1)],1)],1),t("FormItem",{attrs:{label:"优先级"}},[t("InputNumber",{model:{value:o.formItem.priority,callback:function(e){o.$set(o.formItem,"priority",e)},expression:"formItem.priority"}})],1),t("FormItem",{attrs:{label:"状态"}},[t("RadioGroup",{attrs:{type:"button"},model:{value:o.formItem.status,callback:function(e){o.$set(o.formItem,"status",e)},expression:"formItem.status"}},[t("Radio",{attrs:{label:"0"}},[o._v("禁用")]),t("Radio",{attrs:{label:"1"}},[o._v("启用")])],1)],1),t("FormItem",{attrs:{label:"描述"}},[t("Input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:o.formItem.menuDesc,callback:function(e){o.$set(o.formItem,"menuDesc",e)},expression:"formItem.menuDesc"}})],1),t("FormItem",[t("Button",{attrs:{loading:o.saving,type:"primary"},on:{click:o.handleSubmit}},[o._v("保存")]),t("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return o.setEnabled(!0)}}},[o._v("重置")])],1)],1)],1)],1),t("Col",{attrs:{xs:16,sm:16,md:16,lg:8}},[t("Card",{attrs:{shadow:""}},[t("menu-action",{attrs:{value:o.formItem}})],1)],1)],1)],1)},s=[],a=t("c276"),r=t("20c4"),n=["md-add","ios-add-circle","ios-add","ios-add-circle-outline","md-add-circle","ios-alarm","ios-alarm-outline","md-alarm","ios-albums","ios-albums-outline","md-albums","ios-alert","ios-alert-outline","md-alert","ios-american-football","ios-american-football-outline","md-american-football","ios-analytics","ios-analytics-outline","md-analytics","logo-android","logo-angular","ios-aperture","ios-aperture-outline","md-aperture","logo-apple","ios-apps","ios-apps-outline","md-apps","ios-appstore","ios-appstore-outline","md-appstore","ios-archive","ios-archive-outline","md-archive","ios-arrow-back","md-arrow-back","ios-arrow-down","md-arrow-down","ios-arrow-dropdown","md-arrow-dropdown","ios-arrow-dropdown-circle","md-arrow-dropdown-circle","ios-arrow-dropleft","md-arrow-dropleft","ios-arrow-dropleft-circle","md-arrow-dropleft-circle","ios-arrow-dropright","md-arrow-dropright","ios-arrow-dropright-circle","md-arrow-dropright-circle","ios-arrow-dropup","md-arrow-dropup","ios-arrow-dropup-circle","md-arrow-dropup-circle","ios-arrow-forward","md-arrow-forward","ios-arrow-round-back","md-arrow-round-back","ios-arrow-round-down","md-arrow-round-down","ios-arrow-round-forward","md-arrow-round-forward","ios-arrow-round-up","md-arrow-round-up","ios-arrow-up","md-arrow-up","ios-at","ios-at-outline","md-at","ios-attach","md-attach","ios-backspace","ios-backspace-outline","md-backspace","ios-barcode","ios-barcode-outline","md-barcode","ios-baseball","ios-baseball-outline","md-baseball","ios-basket","ios-basket-outline","md-basket","ios-basketball","ios-basketball-outline","md-basketball","ios-battery-charging","md-battery-charging","ios-battery-dead","md-battery-dead","ios-battery-full","md-battery-full","ios-beaker","ios-beaker-outline","md-beaker","ios-beer","ios-beer-outline","md-beer","ios-bicycle","md-bicycle","logo-bitcoin","ios-bluetooth","md-bluetooth","ios-boat","ios-boat-outline","md-boat","ios-body","ios-body-outline","md-body","ios-bonfire","ios-bonfire-outline","md-bonfire","ios-book","ios-book-outline","md-book","ios-bookmark","ios-bookmark-outline","md-bookmark","ios-bookmarks","ios-bookmarks-outline","md-bookmarks","ios-bowtie","ios-bowtie-outline","md-bowtie","ios-briefcase","ios-briefcase-outline","md-briefcase","ios-browsers","ios-browsers-outline","md-browsers","ios-brush","ios-brush-outline","md-brush","logo-buffer","ios-bug","ios-bug-outline","md-bug","ios-build","ios-build-outline","md-build","ios-bulb","ios-bulb-outline","md-bulb","ios-bus","ios-bus-outline","md-bus","ios-cafe","ios-cafe-outline","md-cafe","ios-calculator","ios-calculator-outline","md-calculator","ios-calendar","ios-calendar-outline","md-calendar","ios-call","ios-call-outline","md-call","ios-camera","ios-camera-outline","md-camera","ios-car","ios-car-outline","md-car","ios-card","ios-card-outline","md-card","ios-cart","ios-cart-outline","md-cart","ios-cash","ios-cash-outline","md-cash","ios-chatboxes","ios-chatboxes-outline","md-chatboxes","ios-chatbubbles","ios-chatbubbles-outline","md-chatbubbles","ios-checkbox","ios-checkbox-outline","md-checkbox","md-checkbox-outline","ios-checkmark","md-checkmark","ios-checkmark-circle","ios-checkmark-circle-outline","md-checkmark-circle","md-checkmark-circle-outline","logo-chrome","ios-clipboard","ios-clipboard-outline","md-clipboard","ios-clock","ios-clock-outline","md-clock","ios-close","md-close","ios-close-circle","ios-close-circle-outline","md-close-circle","ios-closed-captioning","ios-closed-captioning-outline","md-closed-captioning","ios-cloud","ios-cloud-outline","md-cloud","ios-cloud-circle","ios-cloud-circle-outline","md-cloud-circle","ios-cloud-done","ios-cloud-done-outline","md-cloud-done","ios-cloud-download","ios-cloud-download-outline","md-cloud-download","md-cloud-outline","ios-cloud-upload","ios-cloud-upload-outline","md-cloud-upload","ios-cloudy","ios-cloudy-outline","md-cloudy","ios-cloudy-night","ios-cloudy-night-outline","md-cloudy-night","ios-code","md-code","ios-code-download","md-code-download","ios-code-working","md-code-working","logo-codepen","ios-cog","ios-cog-outline","md-cog","ios-color-fill","ios-color-fill-outline","md-color-fill","ios-color-filter","ios-color-filter-outline","md-color-filter","ios-color-palette","ios-color-palette-outline","md-color-palette","ios-color-wand","ios-color-wand-outline","md-color-wand","ios-compass","ios-compass-outline","md-compass","ios-construct","ios-construct-outline","md-construct","ios-contact","ios-contact-outline","md-contact","ios-contacts","ios-contacts-outline","md-contacts","ios-contract","md-contract","ios-contrast","md-contrast","ios-copy","ios-copy-outline","md-copy","ios-create","ios-create-outline","md-create","ios-crop","ios-crop-outline","md-crop","logo-css3","ios-cube","ios-cube-outline","md-cube","ios-cut","ios-cut-outline","md-cut","logo-designernews","ios-desktop","ios-desktop-outline","md-desktop","ios-disc","ios-disc-outline","md-disc","ios-document","ios-document-outline","md-document","ios-done-all","md-done-all","ios-download","ios-download-outline","md-download","logo-dribbble","logo-dropbox","ios-easel","ios-easel-outline","md-easel","ios-egg","ios-egg-outline","md-egg","logo-euro","ios-exit","ios-exit-outline","md-exit","ios-expand","md-expand","ios-eye","ios-eye-outline","md-eye","ios-eye-off","ios-eye-off-outline","md-eye-off","logo-facebook","ios-fastforward","ios-fastforward-outline","md-fastforward","ios-female","md-female","ios-filing","ios-filing-outline","md-filing","ios-film","ios-film-outline","md-film","ios-finger-print","md-finger-print","ios-flag","ios-flag-outline","md-flag","ios-flame","ios-flame-outline","md-flame","ios-flash","ios-flash-outline","md-flash","ios-flask","ios-flask-outline","md-flask","ios-flower","ios-flower-outline","md-flower","ios-folder","ios-folder-outline","md-folder","ios-folder-open","ios-folder-open-outline","md-folder-open","ios-football","ios-football-outline","md-football","logo-foursquare","logo-freebsd-devil","ios-funnel","ios-funnel-outline","md-funnel","ios-game-controller-a","ios-game-controller-a-outline","md-game-controller-a","ios-game-controller-b","ios-game-controller-b-outline","md-game-controller-b","ios-git-branch","md-git-branch","ios-git-commit","md-git-commit","ios-git-compare","md-git-compare","ios-git-merge","md-git-merge","ios-git-network","md-git-network","ios-git-pull-request","md-git-pull-request","logo-github","ios-glasses","ios-glasses-outline","md-glasses","ios-globe","ios-globe-outline","md-globe","logo-google","logo-googleplus","ios-grid","ios-grid-outline","md-grid","logo-hackernews","ios-hammer","ios-hammer-outline","md-hammer","ios-hand","ios-hand-outline","md-hand","ios-happy","ios-happy-outline","md-happy","ios-headset","ios-headset-outline","md-headset","ios-heart","ios-heart-outline","md-heart","md-heart-outline","ios-help","md-help","ios-help-buoy","ios-help-buoy-outline","md-help-buoy","ios-help-circle","ios-help-circle-outline","md-help-circle","ios-home","ios-home-outline","md-home","logo-html5","ios-ice-cream","ios-ice-cream-outline","md-ice-cream","ios-image","ios-image-outline","md-image","ios-images","ios-images-outline","md-images","ios-infinite","ios-infinite-outline","md-infinite","ios-information","md-information","ios-information-circle","ios-information-circle-outline","md-information-circle","logo-instagram","ios-ionic","ios-ionic-outline","md-ionic","ios-ionitron","ios-ionitron-outline","md-ionitron","logo-javascript","ios-jet","ios-jet-outline","md-jet","ios-key","ios-key-outline","md-key","ios-keypad","ios-keypad-outline","md-keypad","ios-laptop","md-laptop","ios-leaf","ios-leaf-outline","md-leaf","ios-link","ios-link-outline","md-link","logo-linkedin","ios-list","md-list","ios-list-box","ios-list-box-outline","md-list-box","ios-locate","ios-locate-outline","md-locate","ios-lock","ios-lock-outline","md-lock","ios-log-in","md-log-in","ios-log-out","md-log-out","ios-magnet","ios-magnet-outline","md-magnet","ios-mail","ios-mail-outline","md-mail","ios-mail-open","ios-mail-open-outline","md-mail-open","ios-male","md-male","ios-man","ios-man-outline","md-man","ios-map","ios-map-outline","md-map","logo-markdown","ios-medal","ios-medal-outline","md-medal","ios-medical","ios-medical-outline","md-medical","ios-medkit","ios-medkit-outline","md-medkit","ios-megaphone","ios-megaphone-outline","md-megaphone","ios-menu","ios-menu-outline","md-menu","ios-mic","ios-mic-outline","md-mic","ios-mic-off","ios-mic-off-outline","md-mic-off","ios-microphone","ios-microphone-outline","md-microphone","ios-moon","ios-moon-outline","md-moon","ios-more","ios-more-outline","md-more","ios-move","md-move","ios-musical-note","ios-musical-note-outline","md-musical-note","ios-musical-notes","ios-musical-notes-outline","md-musical-notes","ios-navigate","ios-navigate-outline","md-navigate","ios-no-smoking","ios-no-smoking-outline","md-no-smoking","logo-nodejs","ios-notifications","ios-notifications-outline","md-notifications","ios-notifications-off","ios-notifications-off-outline","md-notifications-off","md-notifications-outline","ios-nuclear","ios-nuclear-outline","md-nuclear","ios-nutrition","ios-nutrition-outline","md-nutrition","logo-octocat","ios-open","ios-open-outline","md-open","ios-options","ios-options-outline","md-options","ios-outlet","ios-outlet-outline","md-outlet","ios-paper","ios-paper-outline","md-paper","ios-paper-plane","ios-paper-plane-outline","md-paper-plane","ios-partly-sunny","ios-partly-sunny-outline","md-partly-sunny","ios-pause","ios-pause-outline","md-pause","ios-paw","ios-paw-outline","md-paw","ios-people","ios-people-outline","md-people","ios-person","ios-person-outline","md-person","ios-person-add","ios-person-add-outline","md-person-add","ios-phone-landscape","md-phone-landscape","ios-phone-portrait","md-phone-portrait","ios-photos","ios-photos-outline","md-photos","ios-pie","ios-pie-outline","md-pie","ios-pin","ios-pin-outline","md-pin","ios-pint","ios-pint-outline","md-pint","logo-pinterest","ios-pizza","ios-pizza-outline","md-pizza","ios-plane","ios-plane-outline","md-plane","ios-planet","ios-planet-outline","md-planet","ios-play","ios-play-outline","md-play","logo-playstation","ios-podium","ios-podium-outline","md-podium","ios-power","ios-power-outline","md-power","ios-pricetag","ios-pricetag-outline","md-pricetag","ios-pricetags","ios-pricetags-outline","md-pricetags","ios-print","ios-print-outline","md-print","ios-pulse","ios-pulse-outline","md-pulse","logo-python","ios-qr-scanner","md-qr-scanner","ios-quote","ios-quote-outline","md-quote","ios-radio","ios-radio-outline","md-radio","ios-radio-button-off","md-radio-button-off","ios-radio-button-on","md-radio-button-on","ios-rainy","ios-rainy-outline","md-rainy","ios-recording","ios-recording-outline","md-recording","logo-reddit","ios-redo","ios-redo-outline","md-redo","ios-refresh","md-refresh","ios-refresh-circle","ios-refresh-circle-outline","md-refresh-circle","ios-remove","md-remove","ios-remove-circle","ios-remove-circle-outline","md-remove-circle","ios-reorder","md-reorder","ios-repeat","md-repeat","ios-resize","md-resize","ios-restaurant","ios-restaurant-outline","md-restaurant","ios-return-left","md-return-left","ios-return-right","md-return-right","ios-reverse-camera","ios-reverse-camera-outline","md-reverse-camera","ios-rewind","ios-rewind-outline","md-rewind","ios-ribbon","ios-ribbon-outline","md-ribbon","ios-rose","ios-rose-outline","md-rose","logo-rss","ios-sad","ios-sad-outline","md-sad","logo-sass","ios-school","ios-school-outline","md-school","ios-search","ios-search-outline","md-search","ios-send","ios-send-outline","md-send","ios-settings","ios-settings-outline","md-settings","ios-share","ios-share-outline","md-share","ios-share-alt","ios-share-alt-outline","md-share-alt","ios-shirt","ios-shirt-outline","md-shirt","ios-shuffle","md-shuffle","ios-skip-backward","ios-skip-backward-outline","md-skip-backward","ios-skip-forward","ios-skip-forward-outline","md-skip-forward","logo-skype","logo-snapchat","ios-snow","ios-snow-outline","md-snow","ios-speedometer","ios-speedometer-outline","md-speedometer","ios-square","ios-square-outline","md-square","md-square-outline","ios-star","ios-star-outline","md-star","ios-star-half","md-star-half","md-star-outline","ios-stats","ios-stats-outline","md-stats","logo-steam","ios-stopwatch","ios-stopwatch-outline","md-stopwatch","ios-subway","ios-subway-outline","md-subway","ios-sunny","ios-sunny-outline","md-sunny","ios-swap","md-swap","ios-switch","ios-switch-outline","md-switch","ios-sync","md-sync","ios-tablet-landscape","md-tablet-landscape","ios-tablet-portrait","md-tablet-portrait","ios-tennisball","ios-tennisball-outline","md-tennisball","ios-text","ios-text-outline","md-text","ios-thermometer","ios-thermometer-outline","md-thermometer","ios-thumbs-down","ios-thumbs-down-outline","md-thumbs-down","ios-thumbs-up","ios-thumbs-up-outline","md-thumbs-up","ios-thunderstorm","ios-thunderstorm-outline","md-thunderstorm","ios-time","ios-time-outline","md-time","ios-timer","ios-timer-outline","md-timer","ios-train","ios-train-outline","md-train","ios-transgender","md-transgender","ios-trash","ios-trash-outline","md-trash","ios-trending-down","md-trending-down","ios-trending-up","md-trending-up","ios-trophy","ios-trophy-outline","md-trophy","logo-tumblr","logo-tux","logo-twitch","logo-twitter","ios-umbrella","ios-umbrella-outline","md-umbrella","ios-undo","ios-undo-outline","md-undo","ios-unlock","ios-unlock-outline","md-unlock","logo-usd","ios-videocam","ios-videocam-outline","md-videocam","logo-vimeo","ios-volume-down","md-volume-down","ios-volume-mute","md-volume-mute","ios-volume-off","md-volume-off","ios-volume-up","md-volume-up","ios-walk","md-walk","ios-warning","ios-warning-outline","md-warning","ios-watch","md-watch","ios-water","ios-water-outline","md-water","logo-whatsapp","ios-wifi","ios-wifi-outline","md-wifi","logo-windows","ios-wine","ios-wine-outline","md-wine","ios-woman","ios-woman-outline","md-woman","logo-wordpress","logo-xbox","logo-yahoo","logo-yen","logo-youtube","ios-loading"],l={name:"SystemMenu",components:{MenuAction:r["default"]},data(){const o=(o,e,t)=>{let i=/^[_a-zA-Z0-9]+$/;""===e?t(new Error("菜单标识不能为空")):""===e||i.test(e)?t():t(new Error("只允许字母、数字、下划线"))};return{confirmModal:!1,saving:!1,visible:!1,selectIcons:n,selectTreeData:[{menuId:0,menuName:"无"}],formItemRules:{parentId:[{required:!0,message:"上级菜单",trigger:"blur"}],menuCode:[{required:!0,validator:o,trigger:"blur"}],menuName:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}]},formItem:{menuId:"",menuCode:"",menuName:"",icon:"md-document",path:"",scheme:"/",target:"_self",status:1,parentId:"0",priority:0,menuDesc:""},columns:[{title:"菜单名称",key:"menuName",minWidth:"200px"},{title:"状态",key:"status",type:"template",minWidth:"100px",template:"status"}],data:[]}},methods:{treeSelectNormalizer(o){return{id:o.menuId,label:o.menuName,children:o.children}},setSelectTree(o){this.selectTreeData=o},setEnabled(o){o&&this.handleReset()},rowClick(o){this.handleReset(),o&&(this.formItem=Object.assign({},o.row)),this.formItem.status=this.formItem.status+""},handleReset(){const o={menuId:"",menuCode:"",menuName:"",icon:"md-document",path:"",scheme:"/",target:"_self",status:"1",parentId:"0",priority:0,menuDesc:""};this.formItem=o,this.$refs["menuForm"].resetFields(),this.saving=!1},handleSubmit(){this.$refs["menuForm"].validate(o=>{o&&(this.saving=!0,this.formItem.menuId?updateMenu(this.formItem).then(o=>{0===o.code&&this.$Message.success("保存成功"),this.handleSearch()}).finally(()=>{this.saving=!1}):addMenu(this.formItem).then(o=>{0===o.code&&this.$Message.success("保存成功"),this.handleSearch()}).finally(()=>{this.saving=!1}))})},handleRemove(){removeMenu(this.formItem.menuId).then(o=>{this.handleReset(),this.handleSearch(),0===o.code&&this.$Message.success("删除成功")})},onIconClick(o){this.formItem.icon=o},handleSearch(){getMenus().then(o=>{let e={primaryKey:"menuId",parentKey:"parentId",startPid:"0"};this.data=Object(a["j"])(o.data,e),this.setSelectTree(this.data)})}},mounted:function(){}},m=l,d=(t("48b5"),t("4e82")),u=Object(d["a"])(m,i,s,!1,null,null,null);e["default"]=u.exports}}]);