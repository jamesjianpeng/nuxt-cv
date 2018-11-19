<template>
    <div>
        内联元素垂直居中 <GoBack />
        <InlineVertical />
    </div>
</template>

<script>
/**
 * @description 垂直居中页面
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
import InlineVertical from '~/components/css_layouts_centered/vertical/inline_vertical.vue'
import GoBack from '~/components/common/goBack.vue'

export default {
    name: 'CenteredInlineVertical',
    components: {
        InlineVertical,
        GoBack
    }
}
</script>

