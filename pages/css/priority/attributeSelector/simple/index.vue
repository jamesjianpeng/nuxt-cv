<template>
    <div>
        <GoBack />
        <attributeSelectorSimple />
    </div>
</template>

<script>
/**
 * @file 简单的选择器
 */
import attributeSelectorSimple from '~/components/css_priority/attribute_selector_simple.vue';
import GoBack from '~/components/common/goBack.vue';

export default {
    name: 'AttributeSelectorSimpleIndex',
    components: {
        attributeSelectorSimple,
        GoBack,
    }
}
</script>

<style lang="scss" scoped>

</style>
