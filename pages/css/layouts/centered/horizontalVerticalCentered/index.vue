<template>
    <div>
        水平垂直居中 <GoBack />
        <CenteredFlex />
        <CenteredPositionTranform />
        <CenteredPositionMargin />
    </div>
</template>

<script>
/**
 * @description 水平垂直居中页面
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
import CenteredFlex from '~/components/css_layouts_centered/horizontal_vertical/flex.vue'
import CenteredPositionTranform from '~/components/css_layouts_centered/horizontal_vertical/position_transform.vue'
import CenteredPositionMargin from '~/components/css_layouts_centered/horizontal_vertical/position_margin.vue'
import GoBack from '~/components/common/goBack.vue'

export default {
    name: 'horizontalVerticalCentered',
    components: {
        CenteredFlex,
        CenteredPositionTranform,
        CenteredPositionMargin,
        GoBack
    }
}
</script>

