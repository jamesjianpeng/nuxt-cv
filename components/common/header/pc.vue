<template>
  <div>
    <header>
        <h1>彭涧</h1>
        <ul class="nav" @click="toggle">
            <li
                v-for="(item, index) in header"
                :key="index"
                :class="{ 'nav-item-active' : $route.path.includes(item.path)}" 
                class="nav-item cursor"
            >
                <nav>{{ item.name }}</nav>
            </li>
        </ul>
    </header>
  </div>
</template>

<script>
import header from '~/components/common/header/header.js'

export default {
    name: 'HomePcHeader',
    data() {
        return {
            header
        }
    },
    created () {
        const activeItem = this.header.map((item) => item.active = item.path === this.$route.path ? true : false)
    },
    methods: {
        toggle(e) {
            const textContent = e.target.textContent
            let activeItem = null
            this.header.map((item) => {
                if (item.name === textContent) {
                    item.active = true
                    activeItem = item
                } else {
                    item.active = false
                }
            })
            this.$router.push({ path: activeItem.path })
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
    // padding: $marginSmall 0;
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
        .nav-item {
            height: $height;
            line-height: $height;
            padding: 0 20px;
        }
        .nav-item-active {
            background: $headerActive;
            color: $headerBg;
        }
    }
}
</style>

