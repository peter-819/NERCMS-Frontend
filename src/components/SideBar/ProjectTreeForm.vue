<template>
	<div id="ProjectTreeForm">
		<el-tree :data="projectTree" :props="defaultProps" @node-click="handleNodeClick" style="padding:3%;"></el-tree>
	</div>    
</template>

<script>
import {mapState} from 'vuex';
import Vue from 'vue';

export default {
	name:'ProjectTreeForm',
	data() {
		return {
			defaultProps:{
				children:'childNodes',
				label:'name'
			}
		}
	},
  computed:{
  	...mapState('ProjectInfo',{
    	projectTree: state=>[state.CurrentProject]
  	})
  },
  methods: {
    handleNodeClick(data) {
     console.log(data);
    }
  }
}
</script>

<style lang="scss">
		
</style>