<template>
  <div>
    <!-- <HomePcHeader /> -->
    <Home3DHeader />
    <nuxt/>
  </div>
</template>

<script>
// import HomePcHeader from '~/components/common/header/pc.vue';
import Home3DHeader from '~/components/common/header/3D.vue';

export default {
    name: 'HomeHeader',
    components: {
        // HomePcHeader,
        Home3DHeader,
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

