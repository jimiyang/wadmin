<template>
  <div class="side-menu-wrapper">
		<el-row class="tac">
			<el-col :span="30">
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose"
					active-text-color="#ffd04b"
					style="width: 221px;"
					background-color="#001529"
					text-color="#ffffff"
				>
					<el-submenu index="1" v-for="(item,index) in menuList" :key="index">
						<template slot="title">
							<i :class="item.type"></i>
							<span>{{item.text}}</span>
						</template>
						<el-menu-item-group >
							<router-link :to="{name: children.name}" v-for="(children, idx) in item.children" :key="idx">
								<el-menu-item>
									<i :class="children.type"></i>{{children.text}}
								</el-menu-item>
							</router-link>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
		</el-row>
  </div>
</template>
<script>
import menuData from '../../../../router/data.js'
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
		handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      }
  },
  computed: {
    
  }
}
</script>
