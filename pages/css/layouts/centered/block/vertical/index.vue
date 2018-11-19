<template>
    <div>
        块级元素垂直居中 <GoBack />
        <BlockVertical />
    </div>
</template>

<script>
/**
 * @description 块级元素垂直居中页面
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
import BlockVertical from '~/components/css_layouts_centered/vertical/block_vertical.vue'
import GoBack from '~/components/common/goBack.vue'

export default {
    name: 'CenteredBlockVertical',
    components: {
        BlockVertical,
        GoBack
    }
}
</script>

