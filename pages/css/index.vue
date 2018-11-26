<template>
    <div>
        <div class="wrap">
            <ul class="sub-item-content">
                <!-- <li>
                    关于继承:
                    <nuxt-link to="/css/layouts/centered/inline/horizontal" class="nav-text">内联元素</nuxt-link>
                </li> -->
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'CssIndex',
    layout: 'home',
}
</script>
