<template>
    <div id="ProjectTreeMenu" :class="this.isActive?'enter':''">
        <div class = "NavArrow" @click="NavArrowClicked">
          <i class="NavArrowIcon el-icon-arrow-right"></i>
        </div>
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
        },
        isActive:Boolean
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
      },
      NavArrowClicked(){
       this.isActive = !this.isActive; 
      }
    }
  };
</script>

<style lang="scss" scoped>
@import '../scss/varibles.scss';
    #ProjectTreeMenu{
      position: relative;
        width: 100%;
        height:100%;
        // box-shadow: 0px 3px 6px rgba(112, 112, 112, 0.16);
        // border-radius: 8px;
        background-color: white;
        left:-100%;

        transition:transform .3s;
    }
    #ProjectTreeMenu.enter{
      transform: translateX(100%);
    }
    .NavArrow{
      position:absolute;
      left:100%;
      top:50%;
      width:20px;
      height:80px;
      background-color:$ne-transition-color-3;
      display:flex;
      align-items: center;
      justify-content: center;
    }
    .NavArrow:hover{
      background: $ne-transition-color-2;
    }
    .NavArrowIcon{
      transition: transform .3s;
    }
    #ProjectTreeMenu.enter > .NavArrow > .NavArrowIcon{
      transform: rotateZ(180deg);
    }
</style>