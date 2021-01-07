<template>
    <div id="ProjectTreeMenu" :class="this.isActive?'enter':''">
        
        <div class = "NavArrow" @click="NavArrowClicked">
          <i class="NavArrowIcon el-icon-arrow-right"></i>
        </div>
        
        <side-bar-tags :tags="tags" @OnSelect="handleSelect" @OnDrawer="handleDrawer"></side-bar-tags>

        <keep-alive>
          <component :is="this.renderForm"></component>        
        </keep-alive>
        <!-- <project-tree-form></project-tree-form> -->
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Vue from 'vue';
import ProjectTreeForm from '@/components/SideBar/ProjectTreeForm'
import SideBarTags from '@/components/SideBar/SideBarTags'

export default {
  name:'ProjectTreeMenu',
  data() {
    return {
      isActive:Boolean,
      renderForm:'project-tree-form',
      tags:[
        {
          name:'File',
          context:'文件',
          renderForm:'project-tree-form'
        },
        // {
        //   name:'History',
        //   context:'历史记录',
        //   renderForm:'history-form'
        // }
      ]
    }
  },
  methods: {
    NavArrowClicked(){
      this.isActive = !this.isActive; 
    },
    handleSelect(index){
      this.renderForm = this.tags[index].renderForm;
    },
    handleDrawer(){
      this.isActive = !this.isActive;
    }
  },
  components:{
    ProjectTreeForm,
    SideBarTags
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
    .NavArrow{
      position:absolute;
      left:100%;
      width:30px;
      height:30px;
      background-color:$ne-color-dark-blue;
      display:flex;
      align-items: center;
      justify-content: center;
    }
    #ProjectTreeMenu.enter{
      transform: translateX(100%);
      .NavArrow{
        display:none;
      }
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