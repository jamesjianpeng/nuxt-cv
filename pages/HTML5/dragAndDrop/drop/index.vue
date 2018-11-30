
<template>
    <div class="wrap">
        <Drop />
        <DropTwo />
        <DropThree />
    </div>
</template>

<script>
import Drop from '~/components/game_drag_drop/drop.vue'
import DropTwo from '~/components/game_drag_drop/drop_two.vue'
import DropThree from '~/components/game_drag_drop/drop_three.vue'

export default {
    name: 'DropIndex',
    layout: 'home',
    components: {
        Drop,
        DropTwo,
        DropThree
    }
}
</script>

<style lang="scss" scoped>
$mainColorLigt: #48a999;
$layoutBgColor: #009688;
$mainColor: #004c40;
$blockBgColor: #c67100;
$inlineColor: #6ec6ff;
$hrColor: #ffd54f;
$bgColor: #6ec6ff;
$textColor: #fff;
$marginNormal: 15px;
$marginSmall: 8px;
$height: 38px;
.drop-item {
    border: 1px dashed $layoutBgColor;
    padding: $marginSmall $marginNormal;
    margin: $marginSmall;
    color: $layoutBgColor;
    transition: all .2s ease-in-out;
}
.drop-enter {
    background: $mainColorLigt;
    opacity: .5;
    background: $layoutBgColor;
    color: #fff;
    padding-left: $marginNormal * 2;
    padding-right: $marginNormal * 2;
}
.freed-content {
    min-height: 10vh;
    border: 1px dashed $blockBgColor;
}
</style>
