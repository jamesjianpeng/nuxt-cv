<template>
    <div>
        块元素水平居中 <GoBack />
        <BlockHorizontal />
    </div>
</template>

<script>
/**
 * @description 水平居中页面
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
import BlockHorizontal from '~/components/css_layouts_centered/horizontal/block_horizontal.vue'
import GoBack from '~/components/common/goBack.vue'

export default {
    name: 'CenteredBlockHorizontal',
    components: {
        BlockHorizontal,
        GoBack
    }
}
</script>

