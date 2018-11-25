<template>
    <div>
        <div class="home">
            <ul class="item-content">
                <li class="item">
                    <nuxt-link to="/oo" class="nav-text">oo</nuxt-link>
                    <ul class="sub-item-content">
                        <li>
                            <nuxt-link to="/oo/constructorPrototype" class="nav-text">constructorPrototype</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/oo/ObjectCreate" class="nav-text">ObjectCreate</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/oo/callConstructor" class="nav-text">callConstructor</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/oo/prototypeChain" class="nav-text">prototypeChain</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ooIndex',
    layout: 'home',
}
</script>

<style lang="scss" scoped>
$mainColorLigt: #48a999;
$mainColor: #004c40;
$marginNormal: 15px;
$marginSmall: 8px;

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