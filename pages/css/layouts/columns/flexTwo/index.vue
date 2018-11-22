<template>
    <div>
        <GoBack />
        <CssLayoutColumnsTwoIndefiniteWidth />
        <CssLayoutColumnsTwoFixedWidth />
        <CssLayoutColumnsTwoRows />
        <CssLayoutColumnsTwoFixedHeightRows />
    </div>
</template>

<script>
import CssLayoutColumnsTwoIndefiniteWidth from '~/components/css_layouts_columns/two/lndefinite_width.vue';
import CssLayoutColumnsTwoFixedWidth from '~/components/css_layouts_columns/two/fixed_width.vue';
import CssLayoutColumnsTwoRows from '~/components/css_layouts_columns/two/rows.vue';
import CssLayoutColumnsTwoFixedHeightRows from '~/components/css_layouts_columns/two/fixed_height_rows.vue';
import GoBack from '~/components/common/goBack.vue';
// import CssLayoutColumnsTwoIndefiniteWidth from '~/components/css_layouts_columns/tow/normal.vue';
export default {
    name: 'columnsTwoIndex',
    components: {
        CssLayoutColumnsTwoIndefiniteWidth,
        CssLayoutColumnsTwoFixedWidth,
        CssLayoutColumnsTwoRows,
        CssLayoutColumnsTwoFixedHeightRows,
        GoBack,
    }
}
</script>

