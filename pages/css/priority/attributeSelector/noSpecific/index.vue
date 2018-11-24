<template>
    <div>
        <GoBack />
        <AttributeSelectorNoSpecific />
    </div>
</template>

<script>
/**
 * @file 部分属性匹配的选择器
 */
import AttributeSelectorNoSpecific from '~/components/css_priority/attribute_selector_no_specific.vue';
import GoBack from '~/components/common/goBack.vue';

export default {
    name: 'AttributeSelectorNoSpecificIndex',
    components: {
        AttributeSelectorNoSpecific,
        GoBack,
    }
}
</script>
