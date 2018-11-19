<template>
    <ul>
        <li>
            <span>场景是一个容器，主要用于保存，跟踪所要渲染的物体和使用的光源</span>
            <span>没有 THREE.Scene 对象，那么 Three.js 就无法渲染任何物体</span>
        </li>
        <li>
            <span>摄像机决定联能够在场景中看到什么</span>
        </li>
        <li>
            <span>我们还定义了渲染器对象，该对象会基于摄像机的角度来计算场景对象在浏览器中渲染成什么样子</span>
        </li>
        <li>
            <span>最后 WebGLRenderer 将会使用电脑显卡来渲染场景</span>
            <span>还有其他的渲染器：canvas 和 SVG 的渲染器，不推荐使用，它们十分耗 CPU 的性能，并且不支持 材质和阴影</span>
        </li>
    </ul>
</template>
<script>
import * as THREE from 'three';
if (process.browser) {
    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 70, width / height, 0.1, 1000 );
    
    camera.position.z = 70; // 默认俯视图 z 越大离我们越远
    camera.position.y = 0; // 默认俯视图 z 越大离我们越远
    camera.rotation.x = 0; // 默认俯视图 z 越大离我们越远

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    const axesHelper = new THREE.AxesHelper( 100 );
    scene.add( axesHelper );

    var cubeGeometry = new THREE.BoxGeometry( 10, 10, 10 );
    var cubeMaterial = new THREE.MeshBasicMaterial( { color: "#666" } );
    var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
    scene.add( cube );

    cube.rotation.x = -.25 * Math.PI; // 默认俯视图 水平方向
    cube.rotation.y = 0; // 默认俯视图 垂直方向
    cube.rotation.z = 0; // 默认俯视图 垂直方向
    
    cube.position.z = 7 // 默认俯视图 水平方向 移动 4

    const planeGeometry = new THREE.PlaneGeometry( 60, 20, 32 );
    const planeMaterial = new THREE.MeshBasicMaterial( {color: '#eee', side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    scene.add( plane );

    // 模型默认在画布区域的中间

    plane.rotation.x = -.25 * Math.PI; // 默认俯视图 水平方向
    plane.rotation.y = 0; // 默认俯视图 垂直方向
    plane.rotation.z = 0; // 默认俯视图 垂直方向
    
    plane.position.x = 0 // 默认俯视图 水平方向 移动 4
    plane.position.y = 0 // 默认俯视图 垂直方向 向上移动 1
    plane.position.z = 0 // 默认俯视图 水平方向 移动 4

    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( -40, 60, -10 );

    // spotLight.castShadow = true;

    // spotLight.shadow.mapSize.width = 1024;
    // spotLight.shadow.mapSize.height = 1024;

    // spotLight.shadow.camera.near = 500;
    // spotLight.shadow.camera.far = 4000;
    // spotLight.shadow.camera.fov = 30;

    scene.add( spotLight );

    renderer.render( scene, camera );
}

export default {
    name: 'Base'
}
</script>

