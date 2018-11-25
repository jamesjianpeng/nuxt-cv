<template>
    <div>
        <div class="scene"> 
            <div class="nav-3d"
                :class="{ 'active': active }"> 
                <div class="nav-3d-side back">{{ name }}</div> 
                <div class="nav-3d-side top">{{ name }}</div> 
                <div class="nav-3d-side bottom">{{ name }}</div> 
                <div class="nav-3d-side front">{{ name }}</div> 
            </div> 
        </div>  
    </div>
</template>
<script>
export default {
    name: 'NavItem',
    watch: {
        active(value) {
            console.log(this.active)
            this.innerActive = value
        }
    },
    data() {
        return {
            innerActive: false
        }
    },
    props: {
        name: {
            type: String,
            default() {
                return 'default'
            }
        },
        active: {
            type: Boolean,
            default() {
                return false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$mainColorLigt: #48a999;
$layoutBgColor: #009688;
$mainColor: #004c40;
$blockBgColor: #c67100;
$inlineColor: #6ec6ff;
$hrColor: #ffd54f;
$bgColor: #6ec6ff;
$textColor: #fff;
$marginNormal: 15px;
$marginSmall: 8px;
$height: 38px;
$headerBg: #212121;
$headerActive: #E0E0E0;

.scene { 
    perspective: 100000px; 
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-3d-side { 
    position: absolute; 
    width: 100px; 
    height: 38px; 
    text-align: center;
} 
.nav-3d { 
    position:relative; 
    width: 100px; 
    height: 38px; 
    transform-style: preserve-3d; 
    transition: all .2s ease-in-out;
} 
.nav-3d:hover {
    transform: rotateX(-90deg);
}
.active {
    transform: rotateX(-90deg);
}
.back { 
    transform: translateZ(-19px); 
    background: rgba(125, 125, 125, 1);
}
.top { 
    transform: translateY(-19px) rotateX(90deg); 
    background: $layoutBgColor;
    color: $textColor;
}
.bottom { 
    transform: translateY(18px) rotateX(90deg); 
    background: rgba(25, 20, 150, 1);
} 
.front { 
    transform: translateZ(19px); 
    background: $headerBg;
    color: $textColor;
}
</style>

