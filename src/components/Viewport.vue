<template>
    <div id="viewer">

    </div>
</template>

<script>
import * as THREE from 'three'
import { PCDLoader } from '@/assets/RendererJS/libs/loaders/PCDLoader.js';
import { initTrackballControls, initThree } from '@/assets/RendererJS/util/util.js'

export default {
    name:'Viewport',
    data(){
        return{

        }
    },
    async mounted(){
        var viewer = document.getElementById('viewer');

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 5000);
        var renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true // 抗锯齿
        });
        renderer.shadowMap.enabled = true;
        renderer.setSize(viewer.clientWidth, viewer.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        scene.add(camera);
        viewer.appendChild(renderer.domElement);

        var trackballControls = initTrackballControls(camera, renderer);
        var loader = new PCDLoader();
        camera.position.set(0, 0, 0);
        camera.up.y = 1;

        var load = () => new Promise((resolve, reject) => {
            loader.load('/static/resources/resources/pcd/binary_zed.pcd', (points) => {
                if (points) {
                    console.log(points);
                    resolve(points);
                } else {
                    reject(new Error('文件加载失败'));
                }
            });
        });
        var points = await load();
        scene.add(points);
        var center = points.geometry.boundingSphere.center;
        trackballControls.target.set(center.x, center.y, center.z);
        trackballControls.update();
        var render = () => {
            trackballControls.update();
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        };
        render();
    }
}
</script>

<style scoped>

</style>