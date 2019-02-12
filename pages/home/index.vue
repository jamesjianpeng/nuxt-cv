<template>
    <div>
        <div class="home wrap scroll-wrap">
            <h1>hello! welcome my world</h1>
            <div v-for="(item, index) in new Array(2)" :key="index">请在 PC 上滚一滚</div>
            <!-- root@118.89.237.155 -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeIndex',
    layout: 'home',
    mounted() {
    },
    methods: {
    }
}
</script>


<style lang="scss" scoped>
$mainColorLigt: #48a999;
$mainColor: #004c40;
$marginNormal: 15px;
$marginSmall: 8px;
.scroll-wrap {
    overflow: auto;
}
.home {
    .item-content {
        .item {
            margin-top: $marginNormal;
        }
        .item > a {
        }
    }
    .sub-item-content {
        margin-top: $marginSmall;
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