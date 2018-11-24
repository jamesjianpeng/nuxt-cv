<template>
    <div>
        <GoBack />
        <attributeSelectorSpecial />
    </div>
</template>

<script>
/**
 * @file 部分属性匹配的选择器
 */
import attributeSelectorSpecial from '~/components/css_priority/attribute_selector_special.vue';
import GoBack from '~/components/common/goBack.vue';

export default {
    name: 'attributeSelectorSpecialIndex',
    components: {
        attributeSelectorSpecial,
        GoBack,
    }
}
</script>
