<template>
  <div>
    <div class="header-content"
        :class="{ 'full-wrap': isUp, 'init-wrap': isInit }">
        <header class="wrap"
        :class="{ 'full-wrap': isUp, 'init-wrap': isInit }">
            <h1 class="logo cursor">
                <a href="https://www.pengjiandry.com" target="_blank">彭涧</a>
            </h1>
            <ul class="nav" @click="toggle">
                <li
                    v-for="(item, index) in header"
                    :key="index"
                    class="nav-item cursor"
                    :class="{'nav-item-active': $route.path.includes(item.path)}"
                >
                    <NavItem 
                        :name="item.name"
                        :active="$route.path.includes(item.path)" />
                    <div v-if="item.child.length">
                        <DropList 
                            :child="item.child"
                            :isInit="isInit"
                        />
                    </div>
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
import DropList from '~/components/common/header/drop_list.vue'

export default {
    name: 'Home3DHeader',
    components: {
        NavItem,
        DropList
    },
    data() {
        return {
            header,
            isUp: false, // 滚动动画的控制
            topList: [],
            isInit: true, // 初始化的时候
        }
    },
    created () {
        const activeItem = this.header.map((item) => item.active = item.path === this.$route.path ? true : false)
    },
    mounted() {
        const el = document.querySelector('.scroll-wrap');
        const time = this.isInit ? 0 : 100
        const func = throttle(() => {
            this.sroll()
        }, time)
        window.onscroll = (e) => {
            func()
        }
    },
    methods: {
        sroll() {
            this.isInit = false;
            const top = document.body.scrollTop || document.documentElement.scrollTop;
            this.topList.push(top);
            /**
             * @description 
             * 1. 使用一个数组保存滚动距离，最大保存长度为 3
             * 2. 初始化的状态有两种情况，0 和 不为 0 的情况，分别对应向上滚动，和向下滚动
             * 3. 若 >= 3 则会计算后两项的大小，
             *    （1） 若最后的值大于倒数第二个则是向下滚
             *    （2） 若最后的值小倒数第二个则是向上滚
             */
            if (this.topList.length >= 3 && this.topList[2] === 0) {
                this.isInit = true;
                // this.isFixed = false;
            }
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
    position: relative;
}

.header-content.full-wrap {
    width: 100%;
}

.header-content.init-wrap {
    width: 100%;
    height: 40vh;
    background: $headerBg;
    display: flex;
    justify-content: center;
    align-items: center;
}

header.init-wrap {
    width: 100%;
    background: $headerBg;
    border-radius: 0px;
    top: 20vh;
    transform: translate(-50%, -50%);
    padding: 10px 0;
}

header.full-wrap {
    width: 100%;
    background: $headerBg;
    border-radius: 0px;
    top: 0px;
    padding: 10px 0;
}

header.fixed-wrap {
    position: fixed;
}

header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $height;
    margin: 0 auto;
    background: $headerBg;
    color: $textColor;
    // position: absolute;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    z-index: 2;
    h1.logo {
        font-size: 28px;
        margin-right: 40px; 
        a {
            color: #fff;
            text-decoration: none;
        }
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
        .nav-item.nav-item-active {
            border: 2px solid $layoutBgColor;
        }
        .nav-item {
            height: $height;
            line-height: $height;
            position: relative;
            z-index: 1;
            margin: 0 2px; 
            border: 2px solid rgba(0, 0, 0, 0);
            &:hover {
                border: 2px solid $layoutBgColor;
            }
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

