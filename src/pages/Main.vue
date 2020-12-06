<template>
<div id="Main">
    <div class="MenuGroup">
        <top-menu></top-menu>
        <tool-menu class="ToolMenu"></tool-menu>
    </div>
    <div class="LeftSideBar">
        <project-tree-menu class="ProjectTreeMenuStyle"></project-tree-menu>
    </div>
    <div class="RightSideBar">
        <attribute-menu class="AttributeMenuStyle"></attribute-menu>
    </div>
    <viewport class="ViewportStyle"></viewport>
    <all-dialogs></all-dialogs>
</div>
</template>

<script>
import TopMenu from '@/components/TopMenu'
import ToolMenu from '@/components/ToolMenu'
import ProjectTreeMenu from '@/components/ProjectTreeMenu'
import AttributeMenu from '@/components/AttributeMenu'
import Viewport from '@/components/Viewport'
import AllDialogs from '@/components/Dialogs/AllDialogs'

export default {
    name: 'Main',
    data(){
        return{
        }
    },
    components:{
        TopMenu,
        ToolMenu,
        ProjectTreeMenu,
        AttributeMenu,
        Viewport,
        AllDialogs
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/varibles.scss';

    #Main{
        width: 100vw;
    }
    .MenuGroup{
        position:relative;
        z-index:10;
    }
    .ToolMenu{
        /* margin-top: 5px; */
    }
    .LeftSideBar{
        position: absolute;
        z-index: 9;
        width: 15%;
        height: 90%;
        left:0px;
    }
    .RightSideBar{
        position: absolute;
        z-index: 9;
        width: 15%;
        height: 90%;
        right:0px;
    }
    .ViewportStyle{
        position: absolute;
        z-index: 0;
        right:0px;
        top: 0px;
        width:100%;
        height:100vh;
    }
</style>