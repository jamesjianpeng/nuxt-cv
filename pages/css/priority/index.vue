<template>
    <div>
        <div class="wrap">
            <GoBack />
            <ul class="item-content">
                <li>!important 的优先级最高（大于内嵌等其他的选择器组合）</li>
                <li>内嵌的样式优先级 > style 包裹的 > link 外链</li>
                <li>对于选择器中给定的各个 ID 属性值，加 0.1.0.0</li>
                <li>对于选择器中给定的各个类属性值，属性选择或伪类，加 0.0.1.0</li>
                <li>对于选择器给定的各个元素和伪元素，加 0.0.0.1</li>
                <li>结合符和通配选择器对特殊性没有任何贡献</li>
                <li>比较的时候从左向右进行对比</li>
                <li class="item">
                    <nuxt-link class="nav-text" to="/css/priority/embeddedAndOuterChain">内嵌相关</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="nav-text" to="/css/priority/idClass">id + class 对比</nuxt-link>
                </li>
                <li>
                    属性选择器
                    <nuxt-link class="nav-text" to="/css/priority/attributeSelector/simple">简单的属性选择器</nuxt-link>
                    <nuxt-link class="nav-text" to="/css/priority/attributeSelector/specific">根据具体属性值选择</nuxt-link>
                    <nuxt-link class="nav-text" to="/css/priority/attributeSelector/noSpecific">根据部分属性值选择</nuxt-link>
                    <nuxt-link class="nav-text" to="/css/priority/attributeSelector/special">特定属性选择类型</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import GoBack from '~/components/common/goBack.vue';

export default {
    name: 'PriorityIndex',
    layout: 'home',
    components: {
        GoBack,
    }
}
</script>

<style>

</style>


