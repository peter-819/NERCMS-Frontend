import * as THREE from 'three';

import { TrackballControls } from '../libs/contorls/TrackballControls.js';
import { OrbitControls } from '../libs/contorls/OrbitControls.js'

// 添加缩放等手势动作
function initTrackballControls(camera, renderer) {
    let trackballControls = new TrackballControls(camera, renderer.domElement);
    // 旋转速度
    trackballControls.rotateSpeed = 2.0;
    // 变焦速度
    trackballControls.zoomSpeed = 2.2;
    // 平移速度
    trackballControls.panSpeed = 1.8;
    // 是否不变焦
    trackballControls.noZoom = false;
    // 是否不平移
    trackballControls.noPan = false;
    // 是否开启移动惯性
    trackballControls.staticMoving = true;
    // 动态阻尼系数 就是灵敏度
    trackballControls.dynamicDampingFactor = 0.3;
    // ???
    trackballControls.keys = [65, 83, 68];
    return trackballControls;
}

function initOrbitControls(camera, renderer){
    let controls = new OrbitControls( camera, renderer.domElement );

    // 如果使用animate方法时，将此函数删除
    //controls.addEventListener( 'change', render );
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    controls.enableDamping = true;
    //动态阻尼系数 就是鼠标拖拽旋转灵敏度
    //controls.dampingFactor = 0.25;
    //是否可以缩放
    controls.enableZoom = true;
    //是否自动旋转
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    //设置相机距离原点的最远距离
    controls.minDistance  = 1;
    //设置相机距离原点的最远距离
    controls.maxDistance  = 200;
    //是否开启右键拖拽
    controls.enablePan = true;
}

function initThree(sceneOption) {
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(sceneOption ? sceneOption.color : 0x000000);
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);
    camera.position.set(-30, 30, 40);
    let renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true // 抗锯齿
    });
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(0xff0000, 0.3);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    scene.add(camera);
    document.body.appendChild(renderer.domElement);
    return {
        scene,
        camera,
        renderer
    };
}

function createMultiMaterialObject(geometry, materials) {
    let group = new THREE.Group();
    materials.forEach(material => {
        group.add(new THREE.Mesh(geometry, material));
    });
    return group;
}

export {
    initTrackballControls,
    initOrbitControls,
    initThree,
    createMultiMaterialObject
}