<template>
    <div class="TopMenu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title">工程</template>
                    <el-menu-item index="1-1">新建</el-menu-item>
                    <el-menu-item index="1-2">保存</el-menu-item>
                    <el-menu-item index="1-3">打开</el-menu-item>
                    <el-menu-item index="1-4">关闭</el-menu-item>
            <el-submenu index="1-3">
                <template slot="title">最近</template>
                    <el-menu-item index="1-3-1">Project1</el-menu-item>
                    <el-menu-item index="1-3-1">Project2</el-menu-item>
                    <el-menu-item index="1-3-1">Project3</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">图像</template>
            <el-menu-item index="2-1">打开</el-menu-item>
            <el-menu-item index="2-2">降噪</el-menu-item>
            <el-menu-item index="2-3">增强</el-menu-item>
            <el-menu-item index="2-4">生成点云</el-menu-item>
            <el-menu-item index="2-4">关闭</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">点云</template>
            <el-menu-item index="3-1">打开点云</el-menu-item>
            <el-menu-item index="3-2">降噪</el-menu-item>
            <el-menu-item index="3-3">平滑</el-menu-item>
            <el-menu-item index="3-4">fuse...</el-menu-item>
            <el-menu-item index="3-5">三维重建</el-menu-item> 
            <el-menu-item index="3-6">关闭</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">模型</template>
            <el-menu-item index="4-1">打开模型</el-menu-item>
            <el-menu-item index="4-2">检测缺陷</el-menu-item>
            <el-menu-item index="4-3">关闭模型</el-menu-item>
          </el-submenu>

          <el-button-group style="margin-top:10px; right:30px; position: absolute;">
            <el-button icon="el-icon-arrow-left"></el-button>
            <el-button icon="el-icon-arrow-right"></el-button>
          </el-button-group>

        </el-menu>
        </div>
</template>

<script>
export default {
    name:'TopMenu',
    data(){
        return{
           activeIndex: '1',
           activeIndex2: '1'
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
  
</style>