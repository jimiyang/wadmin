
import { setToken, getToken } from '@/libs/util'
import {login} from '@/api/login'
export default {
  state: {
    userName: '',
    userId: '',
    nickName: '',
    avatarImgPath: '',
    token: getToken(),
    access: [],
    hasGetInfo: false,
    userDesc: '',
    mobile: '',
    email: '',
    menus: []// 用户菜单
  },
  mutations: {
    setAvatar (state, avatarPath) {
      state.avatarImgPath = avatarPath
    },
    setNickName (state, nickName) {
      state.nickName = nickName
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, { token}) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    },
    setUserMenus (state, menus) {
      state.menus = menus
    },
    setMobile (state, mobile) {
      state.mobile = mobile
    },
    setEmail (state, email) {
      state.email = email
    },
    setUserDesc (state, userDesc) {
      state.userDesc = userDesc
    },
		setPermissionVos (state, permissionVos) {
		  state.setPermissionVos = permissionVos
		}
  },
  actions: {
    // 登录 获取用户信息
    handleLogin ({ commit }, { username, password}) {
      username = username.trim()
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        }).then(res => {
          if (res) {
              let token = res.data.accessToken
              commit('setToken', { token}) //token
							commit('setAvatar', res.data.headImage) //头像
							commit('setUserName', res.data.username) // 用户名
							commit('setNickName', res.data.nickname) //昵称
							commit('setUserId', res.data.id)
							commit('setEmail', res.data.email) //邮箱
							commit('setMobile', res.data.phone) //手机号
							//commit('setUserDesc', res.data.userDesc)
							commit('setUserMenus', res.data.permissionVos) //用户登录所创建菜单
              resolve(res)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogout ({ state, commit }) {
      //console.log(111)
      //console.log(this.$router)
    }
  }
}
