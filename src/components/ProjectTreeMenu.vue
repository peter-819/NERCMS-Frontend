<template>
    <div id="ProjectTreeMenu">
        <el-tree :data="projectTree" :props="defaultProps" @node-click="handleNodeClick" style="padding:3%;"></el-tree>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Vue from 'vue';

  export default {
    name:'ProjectTreeMenu',
    data() {
      return {
        defaultProps:{
            children: 'childNodes',
            label:'name'
        }
      }
    },
    computed:{
      ...mapState('ProjectInfo',{
        projectTree: state=>[state.project]
      })
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<style scoped>
</style>