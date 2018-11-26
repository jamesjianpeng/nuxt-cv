<template>
    <div>
        <div class="home wrap">
            CssLayoutsIndex <GoBack />
            <ul class="item-content">
                <li class="item">
                    <nuxt-link to="/css/layouts" class="nav-text">Layouts</nuxt-link>
                    <ul class="sub-item-content">
                        <li class="sub-item">
                            <nuxt-link to="/css/layouts/float" class="nav-text">各种居中</nuxt-link>
                        </li>
                        <li class="sub-item">
                            <nuxt-link to="/css/layouts/float" class="nav-text">Layouts float</nuxt-link>
                        </li>
                        <li class="sub-item">
                            <nuxt-link to="/css/layouts/flex" class="nav-text">layouts flex</nuxt-link>
                        </li>
                         <li>
                            优先级规则:
                            <nuxt-link to="/css/priority" class="nav-text">选择器和特殊性</nuxt-link>
                        </li>
                        <li>
                            水平居中:
                            <nuxt-link to="/css/layouts/centered/inline/horizontal" class="nav-text">内联元素</nuxt-link>
                            <nuxt-link to="/css/layouts/centered/block/horizontal" class="nav-text">块元素</nuxt-link>
                        </li>
                        <li>
                            垂直居中:
                            <nuxt-link to="/css/layouts/centered/inline/vertical" class="nav-text">内联元素</nuxt-link>
                            <nuxt-link to="/css/layouts/centered/block/vertical" class="nav-text">块元素</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/css/layouts/centered/horizontalVerticalCentered" class="nav-text">水平垂直居中</nuxt-link>
                        </li>
                        <li>
                            多栏布局：
                            <nuxt-link to="/css/layouts/columns/flexTwo" class="nav-text">flex 两栏布局</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
/**
 * @description css layouts index 
 * @todo 将要废弃
 */
import GoBack from '~/components/common/goBack.vue'
export default {
    name: 'CssLayoutsIndex',
    layout: 'home',
    components: {
        GoBack
    }
}
</script>

<style lang="scss" scoped>
$mainColorLigt: #48a999;
$mainColor: #004c40;
$marginTopNormal: 15px;
$marginTopSmall: 8px;

.home {
    .item-content {
        .item {
            margin-top: $marginTopNormal;
        }
        .item > a {
        }
    }
    .sub-item-content {
        margin-top: $marginTopSmall;
        .sub-item > a {
        }
    }
    .nav-text {
        color: $mainColorLigt;
        &:hover {
            color: $mainColor;
        }
    }
}
</style>

