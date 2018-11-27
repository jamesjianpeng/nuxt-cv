<template>
    <div>
        <div class="home wrap">
            <div class="drog-wrap">

            </div>
            <div class="drag-wrap">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dragAndDropIndex',
    layout: 'home',
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

.drog-wrap {
    margin-top: $marginNormal;
    box-sizing: border-box;
    width: 100%;
    height: 70vh;
    border: 1px dashed $hrColor;
}
.drag-wrap {
    margin-top: $marginNormal;
    width: 100%;
    height: 20vh;
    border: 1px dashed $mainColorLigt;
}
</style>

