// 通过访问 https://unpkg.com/three 来查找最新版本。 
// 该URL将会重定向到最新的稳定版本。

import * as THREE from 'https://unpkg.com/three@0.121.1/build/three.module.js';
import { PCDLoader } from './libs/loaders/PCDLoader.js';
import { initTrackballControls, initThree } from './util/util.js'


function test() {
    var viewer = document.getElementById('viewer');
    console.log(viewer.style.width, viewer.style.height);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(viewer.clientWidth, viewer.clientHeight);
    viewer.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
    animate();
}

async function read_pcd() {
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
        loader.load('../resources/pcd/binary_zed.pcd', (points) => {
            if (points) {
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

read_pcd();