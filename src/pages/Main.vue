<template>
<div id="Main">
    <top-menu></top-menu>
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
        ProjectTreeMenu,
        AttributeMenu,
        Viewport,
        AllDialogs
    }
}
</script>

<style scoped>
    #Main{
        width: 100%;
        height: 100%;
    }
    .SideBar{
        position: absolute;
        z-index: 999;
        width: 15%;
        height: 90%;
    }
    .ProjectTreeMenuStyle{
        width: 100%;
        height:50%;
        box-shadow: 0px 3px 6px rgba(112, 112, 112, 0.16);
        border-radius: 8px;
    }
    .AttributeMenuStyle{
        margin-top: 5%;
        width: 100%;
        height:20%;
        box-shadow: 0px 3px 6px rgba(112, 112, 112, 0.16);
        border-radius: 8px;
    }
    .ViewportStyle{
        position: absolute;
        z-index: 1;
        right:0px;
        width:85%;
        height:90%;
    }
</style>