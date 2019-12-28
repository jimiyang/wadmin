<template>
  <div class="side-menu-wrapper" style="background: #002140;">
		<Menu theme="dark" :open-names="[1]" width="220px">
      <Submenu :name="(index + 1)"   v-for="(item, index) in menuList" :key="index" style="background: #002140;">
        <template slot="title" style="background: #002140;">
          <Icon :type="item.type" />{{item.name}}
        </template>
        <MenuItem @click.native="handleOpen(children.urlPath)" :name="children.name" v-for="(children, idx) in item.children" :key="idx">
          <Icon :type="children.type" />{{children.name}}
        </MenuItem>
      </Submenu>
			<!--<MenuItem @click.native="handleOpen(item.urlPath)" v-else :name="item.name">
					{{item.name}}
			</MenuItem>-->
    </Menu>
  </div>
</template>
<script>
import menuData from '@/router/data.js'
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      openedNames: [],
			isCollapsed: false,
			openItem: [],
      activeName: ''
    }
  },
  created() {
	  this.menuList =  menuData //this.$store.state.user.menus
		//console.log(this.menuList)
  },
  methods: {
	  handleOpen(name) {
		  this.$router.push({path: name})
	  }
  }
}
</script>
<style>
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title{background: #002140;}
</style>
