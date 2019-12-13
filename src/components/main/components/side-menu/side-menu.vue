<template>
  <div class="side-menu-wrapper">
	<Menu theme="dark" :open-names="[1]">
		<Submenu :name="(index + 1)" v-for="(item,index) in menuList" :key="index">
			<template slot="title">
				<Icon :class="item.type" />{{item.text}}
			</template>
			<MenuItem @click.native="handleOpen(children.name)" :name="children.text" v-for="(children, idx) in item.children" :key="idx">
				<Icon :class="children.type" />{{children.text}}
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
