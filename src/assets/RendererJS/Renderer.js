import * as THREE from 'three'
import { PCDLoader } from '@/assets/RendererJS/libs/loaders/PCDLoader.js';
import { initTrackballControls, initOrbitControls } from '@/assets/RendererJS/util/util.js'
import {PLYLoader} from '@/assets/RendererJS/libs/loaders/PLYLoader.js'

export async function LoadPLYFile(viewer,filepath){
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

    camera.position.set(0, 0, 0);
    camera.up.y = 1;

    // const plane = new THREE.Mesh(
    //     new THREE.PlaneBufferGeometry(40,40),
    //     new THREE.MeshPhongMaterial({color : 0x999999,specular:0x101010})
    // );
    // plane.rotation.x = -Math.PI /2;
    // plane.position.y = -0.5;
    // scene.add(plane);
    // plane.receiveShadow = true;

    //scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );
    scene.background = new THREE.Color( 0xDDDDDD );

    // var addShadowedLight = ( x, y, z, color, intensity ) => {
    //     const directionalLight = new THREE.DirectionalLight( color, intensity );
    //     directionalLight.position.set( x, y, z );
    //     scene.add( directionalLight );
    //     directionalLight.castShadow = true;
    //     const d = 1;
    //     directionalLight.shadow.camera.left = - d;
    //     directionalLight.shadow.camera.right = d;
    //     directionalLight.shadow.camera.top = d;
    //     directionalLight.shadow.camera.bottom = - d;
    //     directionalLight.shadow.camera.near = 1;
    //     directionalLight.shadow.camera.far = 4;
    //     directionalLight.shadow.mapSize.width = 1024;
    //     directionalLight.shadow.mapSize.height = 1024;
    //     directionalLight.shadow.bias = - 0.001;
    // }
    //addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
    //addShadowedLight( 0.5, 1, - 1, 0xffaa00, 1 );
    

    const plyLoader = new PLYLoader();
    var load = () => new Promise((resolve,reject)=>{
        plyLoader.load(filepath,function (geometry){
            if(geometry){
                resolve(geometry);
            }
            else{
                reject(new Error("Fail to load PLY file"));
            }
        });
    });
    var geometry = await load();
    geometry.computeVertexNormals();
    const material = new THREE.MeshBasicMaterial( { color: 0x0055ff, side:THREE.DoubleSide} );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add( mesh );

    var center = geometry.boundingSphere.center;
    var trackballControls = initTrackballControls(camera,renderer);
    trackballControls.target.set(center.x,center.y,center.z);
    trackballControls.update();

    var render = () => {
        trackballControls.update();
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    };
    render();
}

export async function LoadPCDFile(viewer,filepath){
    var scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x000000 );
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
        loader.load(filepath, (points) => {
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