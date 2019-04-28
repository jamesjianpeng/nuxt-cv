<template>
    <div>
        <div 
            class="love-cube"
            @touchstart="touchstart"
            @mousemove="mousemove"
            @mousedown="mousedown"
            @mouseup="mouseup"
            @touchmove="touchmove"
            @dblclick="reset"
            @click="loveAnimation">
            <div class="title">
                {{title1}}
                <span class="love-item-outer">
                    <div class="love-item"></div>
                </span>
                {{title2}}
                <!-- <div>
                    {{diffY}} - {{diffX}}
                </div> -->
            </div>
            <div>
                <div class="scene"
                ondragstart="return false;"> 
                    <div class="cube" ref="cube"
                    :style="{'transform': `rotateX(${diffY}deg) rotateY(${diffX}deg)` }">
                        <!-- :style="{'transform': `rotateX(${diffY}deg) rotateY(${diffX}deg)` }"  -->
                        <div class="side back">
                            <div class="outer">
                                <span class="inner">
                                    欣
                                </span>
                            </div>
                        </div> 
                        <div class="side left">
                            <div class="outer">
                                <span class="inner love-animation">
                                    <div class="love-item inner-item">
                                    </div>
                                </span>
                            </div>
                        </div> 
                        <div class="side right">
                            <div class="outer">
                                <span class="inner love-animation">
                                    
                                    <div class="love-item inner-item">

                                    </div>
                                </span>
                            </div>
                        </div> 
                        <div class="side top">
                            <div class="outer">
                                <span class="inner love-animation">
                                    Love
                                </span>
                            </div>
                        </div> 
                        <div class="side bottom">
                            <div class="outer">
                                <span class="inner">
                                </span>
                            </div>
                        </div> 
                        <div class="side front">
                            <div class="outer">
                                <span class="inner">
                                    I
                                </span>
                            </div>
                        </div> 
                    </div> 
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
/**
 * @file 表白魔方，和好 2019.4.26
 * @author jamesjianpeng <jamesjianpeng.gmail.com>
 */
import loveAnimation from './loveAnimation.js';
const loveAnimationItem = new loveAnimation({
    numMax: 12, 
    numMin: 6, 
    textList: ['刘', '欣', 'I', '❤️', 'you']
})
export default {
    name: 'LoveCube',
    props: {
        title: {
            type: String,
            default() {
                return '刘欣 Iyou'
            } // 2019.2.14 情人节快乐
        }
    },
    data() {
        return {
            title1: '刘欣 I',
            title2: 'you',
            posList: [],
            downStatus: false,
            firstPos: {x: 0, y: 0},
            diff: {x: 0, y: 0},
            diffX: 0,
            diffY: 0,
            currentX: 0,
            currentY: 0,
            firstTime: true
        }
    },
    computed: {
        getDiff() {
            let diff = {x: 0, y: 0}
            if (this.diff) {
                diff = this.diff
            }
            return diff
        }
    },
    methods: {
        reset() {
            this.diffX = 0
            this.diffY = 0
        },
        right() {

        },
        down() {

        },
        touchstart() {

        },
        touchmove(e) {
            console.log(e)
        },
        /**
         * @description 鼠标移动
         */
        mousemove(e) {
            /** 
             * @description 按下鼠标的时候才能触发
             */
            if (!this.downStatus) {
                return
            }
            this.diff = this.handlePos({x: e.x, y: e.y})
            let diffX = 0
            let diffY = 0
            if (this.diff) {
                diffX = this.diff.x / 2
                diffY = -this.diff.y / 2
            }
            this.diffX = diffX
            this.diffY = diffY
            this.currentX += this.diffX
            this.currentY += this.diffY
            // this.$refs.cube.style.transform = `rotateX(${diffY}deg) rotateY(${diffX}deg)`
        },
        /**
         * @description 鼠标按下
         */
        mousedown(e) {
            this.downStatus = true
            // if (this.posList.length) {
            //     let len = this.posList.length
            //     this.firstPos = {
            //         x: this.posList[len - 1].x,
            //         y: this.posList[len - 1].y
            //     }
            // } else {
            this.firstPos = {
                x: e.x,
                y: e.y
            }
            // }
        },
        /**
         * @description 鼠标释放
         */
        mouseup() {
            this.downStatus = false
        },
        handlePos({x, y}) {
            if (this.posList.length > 2) {
                this.posList.shift()
            }
            this.posList.push({x, y})
            let len = this.posList.length
            let diff = {
                x: this.posList[len - 1].x - this.firstPos.x,
                y: this.posList[len - 1].y - this.firstPos.y
            }
            return diff
        },
        loveAnimation(e) {
            // loveAnimation()
            const loveCube = document.querySelector('.love-cube')
            loveAnimationItem.initLove({ top: e.y, left: e.x, el: loveCube })
        }
    }
}
</script>

<style lang="scss">
.move-animation {
    -webkit-animation: move 2.4s ease-out 0s forwards;
    -moz-animation: move 2.4s ease-out 0s forwards;
    -o-animation: move 2.4s ease-out 0s forwards;
        animation: move 2.4s ease-out 0s forwards;
}
.love-animation {
    -webkit-animation: love 1.1s ease-out 0s infinite alternate;
    -moz-animation: love 1.1s ease-out 0s infinite alternate;
    -o-animation: love 1.1s ease-out 0s infinite alternate;
        animation: love 1.1s ease-out 0s infinite alternate;
}
@keyframes move {
    0% { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% { 
      opacity: 0;
      transform: translateY(-90px) scale(.5);
    }
}

@keyframes love {
    0% { 
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% { 
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(1.3);
    }
}

// ❤️
$loveColor: #FF5722;
.love-item-outer {
    padding: 10px;
    display: inline-block;
}
.love-item {
    width: 12px;
    height: 12px;
    background: $loveColor;
    position: relative;
    transform: rotate(45deg);
}
.love-item.inner-item {
    width: 30px !important;
    height: 30px !important;
}
.love-item::before, .love-item::after {
    content: "";
    width: 100%;
    height: 100%;
    background: $loveColor;
    border-radius: 50%;
}
.love-item::before {
    position: absolute;
    top: -6px;
    left: 0;
}
.love-item::after {
    position: absolute;
    top: 0;
    left: -6px;
}
.love-item.inner-item::before {
    top: -15px !important;
}
.love-item.inner-item::after {
    left: -15px !important;
}
// ❤️
</style>


<style lang="scss" scoped>
.love-cube {
    padding-top: 38px;
    height: 100vh;
}
// ❤️
$loveColor: #FF5722;
.love-item-outer {
    padding: 10px;
    display: inline-block;
}
.love-item {
    width: 12px;
    height: 12px;
    background: $loveColor;
    position: relative;
    transform: rotate(45deg);
}
.love-item::before, .love-item::after {
    content: "";
    width: 100%;
    height: 100%;
    background: $loveColor;
    border-radius: 50%;
}
.love-item::before {
    position: absolute;
    top: -6px;
    left: 0;
}
.love-item::after {
    position: absolute;
    top: 0;
    left: -6px;
}
// ❤️
.cube {
    transition: .3s linear;
}
.title {
    text-align: center;
    margin: 20px 0 40px;
    font-size: 24px;
}
.inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 30px;
}
// #region 魔方
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
    width: 200px; 
    height: 200px; 
} 
.cube { 
    position:relative; 
    width: 200px; 
    height: 200px; 
    transform-style: preserve-3d; 
    transition: all .3s ease-in-out;
} 
// .cube:hover {
//     transform: rotateX(-90deg) rotateY(-90deg);
// }
.back { 
    transform: translateZ(-100px) rotateZ(180deg) rotateX(0deg) rotateY(180deg); 
    background: #EA80FC;
    // #F06292
} 
.left { 
    transform: translateX(-100px) rotateY(90deg); 
    background: #FFCC80;
} 
.right { 
    transform: translateX(100px) rotateY(90deg); 
    background: #FFCC80;
} 
.top { 
    transform: translateY(-100px) rotateX(90deg); 
    background: #FF5722;
} 
.bottom { 
    transform: translateY(100px) rotateX(90deg); 
    background: #ff9800;
} 
.front { 
    transform: translateZ(100px); 
    background: #2196F3;
}
// #endregion 魔方
</style>
