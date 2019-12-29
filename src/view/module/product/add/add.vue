<template>
  <div style="background: #fff;padding: 10px;width:1000px;">
	<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="标题" prop="title">
        <Input v-model="formValidate.title" placeholder="请输入模板标题"></Input>
      </FormItem>
      <FormItem label="创建者" prop="username">
        <Input v-model="formValidate.mail" placeholder="请输入创建人姓名"></Input>
      </FormItem>
      <FormItem label="模板类别" prop="type">
        <Select v-model="formValidate.type" placeholder="请选择模板类别">
		  <Option value="beijing">电商</Option>
		  <Option value="shanghai">广告</Option>
		  <Option value="shenzhen">小说</Option>
		  <Option value="shenzhen">知识付费</Option>
		  <Option value="shenzhen">其他</Option>
		</Select>
      </FormItem>
      <FormItem label="创建日期" prop="date">
		<DatePicker type="date" placeholder="请选择日期"></DatePicker>
      </FormItem>
      <FormItem label="模板封面" prop="cover">
		<Upload
          ref="upload"
          :show-upload-list="false"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :before-upload="handleBeforeUpload"
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/"
          style="display: inline-block;width:150px;"
		>
		  <div style="width: 150px;height:150px;line-height: 150px;">
			<Icon type="ios-camera" size="20"></Icon>
		  </div>
		</Upload>
	  </FormItem>
      <FormItem label="模板介绍" prop="desc">
		<div  style="height: 450px;border:1px solid #000">
		  <quill-editor
			  v-model="content"
			  ref="myQuillEditor"
			  :options="editorOption"
			  :on-success="handleSuccessQuill"
			  @blur="onEditorBlur($event)"
			  @focus="onEditorFocus($event)"
			  @change="onEditorChange($event)"
			  style="height: 400px"
			>
		  </quill-editor>
		</div>
      </FormItem>
      <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  const toolbarOptions = [
    ['bold', 'italic', 'underline'],
    [{'size': ['small', false, 'large', 'huge']}],
    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],
    ['image'],                                // remove formatting button
  ]
  export default {
	data () {
	  return {
		formValidate: {
		  title: '',
		  username: '',
		  type: '',
		  date: '',
		  cover: [],
		  desc: ''
		},
		ruleValidate: {
		  title: [
			{ required: true, message: '请输入标题', trigger: 'change' }
		  ],
		  username: [
		    { required: true, message: '请输入创建者姓名', trigger: 'blur' },
		  ],
		  type: [
			{ required: true, message: '请选择类别', trigger: 'change' }
		  ],
		  date: [
			{ required: true, type: 'date', message: '请选择日期', trigger: 'change' }
		  ],
		  cover: [
			{ required: true, type: 'string', message: '请上传模板封面', trigger: 'change' }
		  ],
		  desc: [
		    { required: true, message: '请输入模板介绍', trigger: 'blur' }
		  ]
		},
		content: '',
		editorOption: {//富文本编辑器的工具栏
		  modules: {
			toolbar:{
			  container: toolbarOptions,  // 工具栏
			  handlers: {
				'image': function (value) {     // 对图片进行改造，默认是通过base64 ,现通过iview 去传。
				  if (value) {
					  document.querySelector('#iviewUp input').click()
				  } else {
					  this.quill.format('image', false);
				  }
				}
			  }
			},
		  },
		  imageResize: {}, //自定义拉伸
		  placeholder: '请输入文章内容',
		},
	  }
	},
	methods: {
	  handleSubmit(name) {
		this.$refs[name].validate((valid) => {
		  if (valid) {
		    this.$Message.success('Success!');
		  } else {
			this.$Message.error('Fail!');
		  }
		})
	  },
	  handleReset(name) {
		this.$refs[name].resetFields();
	  },
	  handleBeforeUpload() {
		
	  },
	  onEditorBlur() {
		
	  },
	  onEditorFocus() {
		
	  },
	  onEditorChange() {
		
	  },
	  onEditorChange(e){
        let _this = this;
        _this.content = e.html ;  //标签以<p></p> 形式渲染 （重点）
        _this.contentTxt = e.text.substr(0,100);
	  },
	  handleSuccessQuill (res) {
		// 获取富文本组件实例
		let quill = this.$refs.myQuillEditor.quill
		// 如果上传成功
		if (res) {
			// 获取光标所在位置
			let length = quill.getSelection().index;
			// 插入图片，res为服务器返回的图片链接地址
			quill.insertEmbed(length, 'image', res.data.path)
			// 调整光标到最后
			quill.setSelection(length + 1)
		} else {
			// 提示信息，需引入Message
			Message.error('图片插入失败')
		}
	  }	
	}
  }
</script>
