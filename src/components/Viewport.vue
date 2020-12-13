<template>
    <div id="viewer">

    </div>
</template>

<script>
import * as Renderer from '@/assets/RendererJS/Renderer.js'

export default {
    name:'Viewport',
    data(){
        return{

        }
    },
    async mounted(){
        var viewer = document.getElementById('viewer');
        // const filepath = '/static/resources/resources/ply/result.ply';
        // await Renderer.LoadPLYFile(viewer,filepath);

        const filepath = '/static/resources/resources/pcd/binary_zed.pcd';
        await Renderer.LoadPCDFile(viewer,filepath);
    }
}

</script>

<style scoped>

</style>