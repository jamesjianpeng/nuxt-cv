<template>
  <div>
    <header>
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
            </li>
        </ul>
    </header>
    <nuxt/>
  </div>
</template>

<script>
import header from '~/components/common/header/header.js'
import NavItem from '~/components/common/header/nav_3D.vue'

export default {
    name: 'Home3DHeader',
    components: {
        NavItem,
    },
    data() {
        return {
            header,
        }
    },
    created () {
        const activeItem = this.header.map((item) => item.active = item.path === this.$route.path ? true : false)
    },
    methods: {
        toggle(e) {
            const textContent = e.target.textContent
            let activeItem = {}
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

header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $height;
    max-width: 960px;
    margin: 0 auto;
    background: $headerBg;
    color: $textColor;
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

