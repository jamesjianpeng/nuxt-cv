<template>
    <ul>
    </ul>
</template>
<script>
import * as THREE from 'three';
if (process.browser) {
    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    const axesHelper = new THREE.AxesHelper( 10 );
    scene.add( axesHelper );

    renderer.render( scene, camera );
}

export default {
    name: 'Base'
}
</script>

