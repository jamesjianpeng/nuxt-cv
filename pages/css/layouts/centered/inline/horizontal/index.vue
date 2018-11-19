<template>
    <div>
        内联元素水平居中 <GoBack />
        <InlineHorizontal />
    </div>
</template>

<script>
/**
 * @description 内联元素水平居中页面
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
import InlineHorizontal from '~/components/css_layouts_centered/horizontal/inline_horizontal.vue'
import GoBack from '~/components/common/goBack.vue'

export default {
    name: 'CenteredInlineHorizontal',
    components: {
        InlineHorizontal,
        GoBack
    }
}
</script>

