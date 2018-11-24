<template>
    <div>
        <GoBack />
        <embeddedAndOuterChain />
    </div>
</template>

<script>
import embeddedAndOuterChain from '~/components/css_priority/embeddedAndOuterChain.vue';
import GoBack from '~/components/common/goBack.vue';

export default {
    name: 'embeddedAndOuterChainIndex',
    components: {
        embeddedAndOuterChain,
        GoBack,
    }
}
</script>
