<template>
    <div>
        RubikCube
    </div>
</template>

<script>
import * as THREE from 'three';
if (process.browser) {
    const width = window.innerWidth
    const height = window.innerHeight

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: "#666" } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    const axesHelper = new THREE.AxesHelper( 10 );
    scene.add( axesHelper );

    camera.position.z = 5;
    cube.rotation.x = 0;
    cube.rotation.y = 0;
    cube.rotation.z = 0;
    renderer.render( scene, camera );
    // var animate = function () {
    //     requestAnimationFrame( animate );

    //     plane.rotation.x += 0.01;
    //     plane.rotation.y += 0.01;

    //     renderer.render( scene, camera );
    // };

    // animate();

}
export default {
    name: 'RubikCube',
    data() {
        return {
            THREE,
        }
    },
    mounted() {
        console.log(THREE)
    }
}
</script>
