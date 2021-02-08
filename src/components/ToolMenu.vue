<template>
    <div id="ToolMenu">
      <div class="ItemGrid">
        <el-dropdown class="ToolMenuItem" @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            工程
            <!-- <i class="el-icon-arrow-down"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="NewProject">新建</el-dropdown-item>
            <el-dropdown-item>保存</el-dropdown-item>
            <el-dropdown-item command="OpenProject">打开</el-dropdown-item>
            <el-dropdown-item>关闭</el-dropdown-item>
            <el-dropdown-item>最近</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="ItemGrid">
        <el-dropdown class="ToolMenuItem" @command="handleCommand" trigger="click">
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
      </div>

      <div class="ItemGrid">
        <el-dropdown class="ToolMenuItem" @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            点云
            <!-- <i class="el-icon-arrow-down"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="OpenPointCloud">打开</el-dropdown-item>
            <el-dropdown-item command="Denoise">降噪</el-dropdown-item>
            <el-dropdown-item>平滑</el-dropdown-item>
            <el-dropdown-item>融合</el-dropdown-item>
            <el-dropdown-item>三维重建</el-dropdown-item>
            <el-dropdown-item>关闭</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="ItemGrid">
        <el-dropdown class="ToolMenuItem" @command="handleCommand" trigger="click">
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
        </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'

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
          // --------- PROEJECT --------- //
          case 'NewProject':
            this.ShowDialog('NewProject');
            break;
          case 'OpenProject':
            this.ShowDialog('OpenProject');
            break;

          // --------- POINT CLOUD -------- //
          case 'OpenPointCloud':
            this.ShowDialog('OpenPCD');
            break;
          case 'Denoise':
            this.ShowDialog('DenoisePCD');
            break;
        }
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/varibles.scss';

.ItemGrid{
  height:100%;
  width:75px;
  display:flex;
  align-items: center;
  justify-content: center;
  .ToolMenuItem{
    cursor:pointer;
  }
  &:hover{
    background-color: $ne-menu-color;
  }
  &:first-child{
    margin-left:10px;
  }
}
.el-dropdown-menu__item{
  background-color:$ne-menu-color;
  color:$ne-color-white;
  width:100px;
  &:hover{
    background-color:$ne-color-light-blue;
    color:$ne-color-white;
  }
}
.el-dropdown-menu{
  background-color:$ne-menu-color;
  border-width:0px;
}
#ToolMenu{
  height:40px;
  background-color: $ne-color-dark-blue;
  display:flex;
  align-items:center;
}
.el-menu-item.UnSelectable.is-disabled{
  opacity: 1.0;
  cursor:auto;
}
.ToolMenuItem{
  .el-dropdown-link{
    font-family: $ne-font-family;
    color:$ne-color-white;
  }
}
</style>