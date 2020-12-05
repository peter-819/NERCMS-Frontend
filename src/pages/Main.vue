<template>
<div id="Main">
    <div class="MenuGroup">
        <top-menu></top-menu>
        <tool-menu class="ToolMenu"></tool-menu>
    </div>
    <div class="SideBar">
        <project-tree-menu class="ProjectTreeMenuStyle"></project-tree-menu>
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

<style scoped>
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
    .SideBar{
        position: absolute;
        z-index: 9;
        width: 15%;
        height: 90%;
    }
    .ProjectTreeMenuStyle{
        margin-top:5%;
        width: 100%;
        height:50%;
        box-shadow: 0px 3px 6px rgba(112, 112, 112, 0.16);
        border-radius: 8px;
        background-color: white;
    }
    .AttributeMenuStyle{
        margin-top: 5%;
        width: 100%;
        height:20%;
        box-shadow: 0px 3px 6px rgba(112, 112, 112, 0.16);
        border-radius: 8px;
        background-color:white;
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