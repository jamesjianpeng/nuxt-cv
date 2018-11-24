<template>
    <div>
        <GoBack />
        <AttributeSelectorSpecific />
    </div>
</template>

<script>
/**
 * @file 简单的选择器
 */
import AttributeSelectorSpecific from '~/components/css_priority/attribute_selector_specific.vue';
import GoBack from '~/components/common/goBack.vue';

export default {
    name: 'AttributeSelectorSpecificIndex',
    components: {
        AttributeSelectorSpecific,
        GoBack,
    }
}
</script>

<style lang="scss" scoped>

</style>
