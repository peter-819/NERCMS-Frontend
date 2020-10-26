<template>
    <div class="TopMenu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title">工程</template>
                    <el-menu-item index="1-1">保存</el-menu-item>
                    <el-menu-item index="1-2">打开</el-menu-item>
            <el-submenu index="1-3">
                <template slot="title">最近</template>
                    <el-menu-item index="1-3-1">Project1</el-menu-item>
                    <el-menu-item index="1-3-1">Project2</el-menu-item>
                    <el-menu-item index="1-3-1">Project3</el-menu-item>
            </el-submenu>
          </el-submenu>


          <el-submenu index="2">
            <template slot="title">点云</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="3" disabled>消息中心</el-menu-item>
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