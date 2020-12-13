<template>
<div id="Main">
    <div class="MenuGroup">
        <img src="/static/resources/images/logoTest.png" class="LogoImage">
        <div class="Menus">
            <top-menu></top-menu>
            <tool-menu class="ToolMenu"></tool-menu>
        </div>
    </div>
    <div class="UpSideBar">
        <project-tree-menu class="ProjectTreeMenuStyle"></project-tree-menu>
    </div>
    <div class="DownSideBar">
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
import BottomMenu from '@/components/BottomMenu'

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
        AllDialogs,
        BottomMenu
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
        display: flex;
        flex-flow:row nowrap;
        justify-content: flex-start;
        // align-items: stretch;
    }
    .LogoImage{
        width:65px;
        height:65px;
    }
    .Menus{
        width:100%;
    }
    .ToolMenu{
        /* margin-top: 5px; */
    }
    .UpSideBar{
        position: absolute;
        z-index: 9;
        width: 13%;
        height: 40vh;
        left:0px;
        margin-top:1vh;
    }
    .DownSideBar{
        position: absolute;
        z-index: 9;
        width: 13%;
        height: 28vh;
        left:0px;
        margin-top:42vh;
    }
    .ViewportStyle{
        position: absolute;
        z-index: 0;
        left: 0vw;
        top: 0px;
        width:100%;
        height:100vh;
        border-style: solid;
        border-width: 100px 35px 35px 13vw;
        border-color: $ne-background-color;
        box-sizing: border-box;
    }
</style>