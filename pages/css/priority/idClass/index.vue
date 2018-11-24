<template>
    <div>
        <GoBack />
        <IdClass />
    </div>
</template>

<script>
import IdClass from '~/components/css_priority/id_class.vue';
import GoBack from '~/components/common/goBack.vue';

export default {
    name: 'IdClassIndex',
    components: {
        IdClass,
        GoBack,
    }
}
</script>
