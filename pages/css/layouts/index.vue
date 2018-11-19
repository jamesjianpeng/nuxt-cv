<template>
    <div>
        <div class="home">
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

