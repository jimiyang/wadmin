<template>
  <div class="side-menu-wrapper" style="background: #002140;">
		<Menu theme="dark" :open-names="[1]" width="220px">
			<Submenu :name="(index + 1)" v-for="(item, index) in menuList" :key="index" style="background: #002140;">
				<template slot="title" style="background: #002140;">
					<Icon :type="item.type" />{{item.text}}
				</template>
				<MenuItem @click.native="handleOpen(children.name)" :name="children.text" v-for="(children, idx) in item.children" :key="idx">
					<Icon :type="children.type" />{{children.text}}
				</MenuItem>
			</Submenu>
		</Menu>
  </div>
</template>
<script>
import menuData from '@/router/data.js'
export default {
  data () {
    return {
      openedNames: []
    }
  },
	created() {
		this.menuList = menuData
	},
  methods: {
	handleOpen(name) {
	  this.$router.push({name})
	}
  },
  computed: {
    
  }
}
</script>
<style>
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title{background: #002140;}
</style>
