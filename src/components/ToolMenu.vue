<template>
    <div id="ToolMenu">
        <img src="/static/resources/images/logoTest.png" class="LogoImage">
        <el-dropdown class="ToolMenuItem" @command="handleCommand">
          <span class="el-dropdown-link">
            工程
            <!-- <i class="el-icon-arrow-down"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="NewProject">新建</el-dropdown-item>
            <el-dropdown-item>保存</el-dropdown-item>
            <el-dropdown-item>打开</el-dropdown-item>
            <el-dropdown-item>关闭</el-dropdown-item>
            <el-dropdown-item>最近</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown class="ToolMenuItem" @command="handleCommand">
          <span class="el-dropdown-link">
            图像
            <!-- <i class="el-icon-arrow-down"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>打开</el-dropdown-item>
            <el-dropdown-item>降噪</el-dropdown-item>
            <el-dropdown-item>增强</el-dropdown-item>
            <el-dropdown-item>生成点云</el-dropdown-item>
            <el-dropdown-item>关闭</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown class="ToolMenuItem" @command="handleCommand">
          <span class="el-dropdown-link">
            点云
            <!-- <i class="el-icon-arrow-down"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="OpenPointCloud">打开</el-dropdown-item>
            <el-dropdown-item>降噪</el-dropdown-item>
            <el-dropdown-item>平滑</el-dropdown-item>
            <el-dropdown-item>fuse...</el-dropdown-item>
            <el-dropdown-item>三维重建</el-dropdown-item>
            <el-dropdown-item>关闭</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown class="ToolMenuItem" @command="handleCommand">
          <span class="el-dropdown-link">
            模型
            <!-- <i class="el-icon-arrow-down"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>打开</el-dropdown-item>
            <el-dropdown-item>检测缺陷</el-dropdown-item>
            <el-dropdown-item>关闭</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
    name:'ToolMenu',
    data(){
        return{
           activeIndex: '1'
        }
    },
    methods: {
      ...mapMutations('Dialogs',[
        'ShowDialog',
        'HideDialog'
      ]),
      handleCommand(command){
        switch(command){
          case 'NewProject':
            this.ShowDialog('NewProject');
            break;
          case 'OpenPointCloud':
            this.ShowDialog('OpenPCD');
            break;
        }
      }
    }
}
</script>

<style scoped>
#ToolMenu{
  height:40px;
  background-color: white;
  display:flex;
  align-items:center;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: rgba(112,112,112,0.16);
  
  box-shadow:0px 0px 10px 0px rgba(112,112,112,0.16);
}

.LogoImage {
  width: 30px;
  height: 30px;
  margin-left:20px;
}
.el-menu-item.UnSelectable.is-disabled{
  opacity: 1.0;
  cursor:auto;
}
.ToolMenuItem{
  margin-left:40px;
  cursor: pointer;
}
</style>