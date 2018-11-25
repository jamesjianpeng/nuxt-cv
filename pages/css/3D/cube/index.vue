<template>
    <div>
        <GoBack />
        <ul>
            <li>
                <Css3DCube />
            </li>
        </ul>
    </div>
</template>

<script>
/**
 * @description css inons 组件入口
 * @todo 这块暂时没有想好
 */
import Css3DCube from '~/components/css_3D/cube.vue'
import GoBack from '~/components/common/goBack.vue'

export default {
    name: 'CssIconsIndex',
    components: {
        Css3DCube,
        GoBack
    }
}
</script>

<style>

</style>


