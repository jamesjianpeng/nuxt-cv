<template>
    <div>
        <div class="scene"> 
            <div class="cube"> 
                <div class="side back"></div> 
                <!-- <div class="side left"></div> 
                <div class="side right"></div>  -->
                <div class="side top"></div> 
                <div class="side bottom"></div> 
                <div class="side front"></div> 
            </div> 
        </div>  
    </div>
</template>

<style lang="scss" scoped>
.scene { 
    // width: 100vw;
    // height: 100vw;
    perspective: 1000px; 
    display: flex;
    justify-content: center;
    align-items: center;
}
.side { 
    position: absolute; 
    width: 100px; 
    height: 38px; 
} 
.cube { 
    position:relative; 
    width: 100px; 
    height: 38px; 
    transform-style: preserve-3d; 
    transition: all .3s ease-in-out;
} 
.cube:hover {
    transform: rotateX(-90deg);
}
.back { 
    transform: translateZ(-19px); 
    background: rgba(125, 125, 125, 1);
} 
// .left { 
//     transform: translateX(-50px) rotateY(90deg) scaleX(.5); 
//     background: rgba(125, 100, 25, 1);
// } 
// .right { 
//     transform: translateX(50px) rotateY(90deg) scaleX(.5); 
//     background: rgba(125, 50, 0, 1);
// } 
.top { 
    transform: translateY(-19px) rotateX(90deg); 
    background: rgba(25, 120, 150, 1);
} 
.bottom { 
    transform: translateY(19px) rotateX(90deg); 
    background: rgba(25, 20, 150, 1);
} 
.front { 
    transform: translateZ(19px); 
    background: rgba(185, 20, 20, 1);
}
</style>

