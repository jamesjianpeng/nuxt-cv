<template>
    <div>
        <ul class="drop-list"
            :class="{ 'init-wrap': isInit }" v-if="child.length">
            <nuxt-link 
                v-for="(childItem, childIndex) in child"
                :key="childIndex"
                class="drop-item" 
                :class="{ 'drop-item-last': isInit && (childIndex === child.length - 1) }"
                :to="childItem.path">{{ childItem.name }}</nuxt-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DropList',
    props: {
        child: {
            type: Array,
            default() {
                return []
            }
        },
        isInit: {
            type: Boolean,
            default() {
                return false
            }
        }
    }
}
</script>

<style lang="scss">
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

.nav-item {
    &:hover {
        // .drop-list.init-wrap {
        //     border: 2px solid $layoutBgColor;
        // }
        
        border: 2px solid $layoutBgColor;
        // box-shadow: 0 -2px 0 4px $layoutBgColor inset;
        .drop-list {
            display: block;
            box-sizing: border-box;
            .drop-item {
                border: 2px solid $layoutBgColor;
                border-top: none;
                border-bottom: none;
            }
            .drop-item:nth-child(1) {
                animation: drop .3s;
                animation-fill-mode:forwards;
            }
            .drop-item:nth-child(2) {
                animation: drop .2s;
                animation-delay: .2s;
                animation-fill-mode:forwards;
            }
            .drop-item:nth-child(3) {
                animation: drop-last .2s;
                animation-delay: .4s;
                animation-fill-mode:forwards;
            }
            .drop-item-last {
                border-bottom: 2px solid $layoutBgColor;
            }
            // 为什么选择 animation 而不是 transition 在动画消失的时候不好控制
            // .drop-item:nth-child(2) {
            //     transform: rotateX(0deg);
            //     transition: all .2s ease-in-out .2s;
            // }
            // .drop-item:nth-child(3) {
            //     transform: rotateX(0deg);
            //     transition: all .2s ease-in-out .4s;
            // }
        }   
    }
}

.drop-list {
    display: none;
    position: absolute;
    top: 38px;
    left: 0;
    width: 100%;
    text-align: center;
    .drop-item {
        display: block;
        color: $textColor;
        text-decoration: none;
        transition: all .2s ease-in-out;
        background: $headerBg;
        transform-origin: 0 top;
        transform: rotateX(-90deg);
        &:hover {
            box-shadow: 0 -2px 0 0 $layoutBgColor inset;
            color: $layoutBgColor;
        }
    }
    .drop-item:last-child  {
        &:hover {
            box-shadow: none;
        }
    }
    @keyframes drop {
        from {transform: rotateX(-90deg);}
        to {transform: rotateX(0deg);}
    }
    @keyframes drop-last {
        0% {transform: rotateX(-90deg);}
        100% {transform: rotateX(0deg);}
    }
    // 第一种方式
    // .drop-item:nth-child(2) {
    //     transition: all .2s ease-in-out .2s;
    // }
    // .drop-item:nth-child(3) {
    //     transition: all .2s ease-in-out .4s;
    // }
}
</style>