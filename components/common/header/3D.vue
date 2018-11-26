<template>
  <div>
    <div class="header-content"
        :class="{ 'full-wrap': isUp }">
        <header class="wrap"
        :class="{ 'full-wrap': isUp }">
            <h1>彭涧</h1>
            <ul class="nav" @click="toggle">
                <li
                    v-for="(item, index) in header"
                    :key="index"
                    class="nav-item cursor"
                >
                    <NavItem 
                        :name="item.name"
                        :active="$route.path.includes(item.path)" />

                    <ul class="drop-list" v-if="item.child.length">
                        <nuxt-link 
                            v-for="(childItem, childIndex) in item.child"
                            :key="childIndex + 'child'"
                            class="drop-item" 
                            :to="childItem.path">{{ childItem.name }}</nuxt-link>
                    </ul>
                </li>
            </ul>
        </header>
    </div>

  </div>
</template>

<script>
import header from '~/components/common/header/header.js'
import { throttle } from '~/assets/util'
import NavItem from '~/components/common/header/nav_3D.vue'

export default {
    name: 'Home3DHeader',
    components: {
        NavItem,
    },
    data() {
        return {
            header,
            isUp: false,
            topList: [],
        }
    },
    created () {
        const activeItem = this.header.map((item) => item.active = item.path === this.$route.path ? true : false)
    },
    mounted() {
        const el = document.querySelector('.scroll-wrap');
        const func = throttle(() => {
            this.sroll()
        }, 300)
        window.onscroll = (e) => {
            func()
        }
    },
    methods: {
        sroll() {
            const top = document.body.scrollTop || document.documentElement.scrollTop;
            this.topList.push(top)
            /**
             * @description 
             * 1. 使用一个数组保存滚动距离，最大保存长度为 3
             * 2. 初始化的状态有两种情况，0 和 不为 0 的情况，分别对应向上滚动，和向下滚动
             * 3. 若 >= 3 则会计算后两项的大小，
             *    （1） 若最后的值大于倒数第二个则是向下滚
             *    （2） 若最后的值小倒数第二个则是向上滚
             */
            if (this.topList.length >= 3) {
                this.isUp = this.topList[2] - this.topList[1] > 0 ? true : false;
                this.topList.shift()
            } else if(this.topList.length === 1 && this.topList[0] === 0) {
                this.isUp = false;
                if (this.topList.length >= 3) this.topList.shift()
            } else if (this.topList.length === 1 && this.topList[0] !== 0) {
                this.isUp = true;
                if (this.topList.length >= 3) this.topList.shift()
            }
        },
        toggle(e) {
            const textContent = e.target.textContent
            this.header.map((item) => {
                if (item.name === textContent) {
                    this.$router.push({ path: item.path })
                }
            })
        }
    }
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

</style>

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
.header-content {
    width: 100%;
    height: 58px;
    transition: all .4s ease-in-out;
}
.header-content.full-wrap {
    width: 100%;
    // height: 238px;
}
.wrap.full-wrap {
    width: 100%;
    background: $headerBg;
    border-radius: 0px;
    top: 0px;
    padding: 10px 0;
}
header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $height;
    // max-width: 960px;
    margin: 0 auto;
    background: $headerBg;
    color: $textColor;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    h1 {
        font-size: 28px;
        margin-right: 40px; 
    }
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 500;

        perspective: 100000px;
        transform-style: preserve-3d;
        position: relative;

        .nav-item {
            height: $height;
            line-height: $height;
            position: relative;
            z-index: 1;
            margin: 0 2px; 
            &:hover {
                .drop-list {
                    display: block;
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
            // div {
            //     animation: drop 5s;
            //     -moz-animation: drop 5s;	/* Firefox */
            //     -webkit-animation: drop 5s;	/* Safari 和 Chrome */
            //     -o-animation: drop 5s;	/* Opera */
            // }
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
        .nav-item-active {
            background: $headerActive;
            color: $headerBg;
        }
        nav {
            position: absolute;
            height: $height;
            width: 100%;
        }
        nav.top {
            background: $mainColorLigt;
            transform: translateY(-38px) rotateX(90deg);
        }
        nav.front {
            background: $mainColor;
            transform: translateZ(38px);
        }
    }
}
</style>

