<template>
    <div>
        CssIconsIndex
        <GoBack />
        <ul>
            <li>
                <james-share />
            </li>
            <li>
                <james-magnifier />
            </li>
        </ul>
    </div>
</template>

<script>
/**
 * @description css inons 组件入口
 * @todo 这块暂时没有想好
 */
import JamesShare from '~/components/css_icons/share.vue'
import JamesMagnifier from '~/components/css_icons/magnifier.vue'
import GoBack from '~/components/common/goBack.vue'

export default {
    name: 'CssIconsIndex',
    components: {
        JamesShare,
        JamesMagnifier,
        GoBack
    }
}
</script>

<style>

</style>


