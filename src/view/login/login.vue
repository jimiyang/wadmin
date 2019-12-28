<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
            <FormItem prop="username">
              <Input v-model="form.username" placeholder="请输入用户名\手机号\邮箱"/>
              <span slot="prepend">
                <Icon :size="16" type="ios-person"></Icon>
              </span>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码"/>
              <span slot="prepend">
               <Icon :size="14" type="md-lock"></Icon>
              </span>
            </FormItem>
            <FormItem>
              <Checkbox v-model="form.auto">自动登录</Checkbox>
              <a href="#" style="float: right">忘记密码</a>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" :loading="loading" type="primary"  long>登录</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
  import {login} from '@/api/login'
  import {mapActions} from 'vuex'
  export default {
    name: 'LoginForm',
    props: {
      usernameRules: {
        type: Array,
        default: () => {
          return [
            {required: true, message: '登录名不能为空', trigger: 'blur'}
          ]
        }
      },
      passwordRules: {
        type: Array,
        default: () => {
          return [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    data () {
      return {
        loading:false,
        form: {
          username: 'admin',
          password: '123456'
        },
				authCode: null,
        config: {}
      }
    },
    computed: {
      rules () {
        return {
          username: this.usernameRules,
          password: this.passwordRules
        }
      }
    },
		created() {
			/*picVerify().then(rs => {
				if(rs.success) {
					this.authCode = rs.data.authCode
					this.picUniqueToken = rs.data.picUniqueToken
				}
			})*/
		},
    methods: {
      ...mapActions([
        'handleLogin'
      ]),
      handleClick(type){
        let url = this.config[type]
        if (!url) return
        this.openWin(url,type,650,500);
      },
      openWin(url, name, iWidth, iHeight) {
        //获得窗口的垂直位置
        var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
        //获得窗口的水平位置
        var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
        window.open(url, name, 'height=' + iHeight + ',innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
      },
      handleSubmit () {
				this.$refs.loginForm.validate((valid) => {
          if (valid) {
						let username = this.form.username,
                password = this.form.password
            this.handleLogin({username, password}).then(rs => {
            	if(rs) {
            		window.localStorage.setItem('token', rs.data.token);
                /*window.localStorage.setItem('userInfo', JSON.stringify(rs.data));*/
            		this.$router.push({
            		  path: this.$config.homeName
            		})
            	}
            })
          }
        })
      }
    }
  }
</script>

