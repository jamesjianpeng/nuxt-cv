<template>
    <div>
        <div class="width-box">
            <div>
                <i class="no">1.</i>
                flex：两侧都是不定宽
            </div>
            <div class="layout-content layout-flex">
                <div class="layout-left">
                    left
                </div>
                <div class="layout-right">
                    right
                </div>
            </div>
            <pre>
.width-box {
    width: 80%;
    margin: 0 auto;
}

.layout-flex {
    display: flex;
    justify-content: space-between;
}

.layout-content {
    border: 1px dashed $hrColor;
    width: 100%;
    height: 10vw;
    padding: $marginNormal;
}

.layout-left {
    width: 20%;
    background: $mainColorLigt;
}

.layout-right {
    width: 78%;
    background: $layoutBgColor;
}
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CssLayoutColumnsTwoIndefiniteWidth'
}
</script>

<style lang="scss" scoped>

$mainColorLigt: #48a999;
$layoutBgColor: #009688;
$mainColor: #004c40;
$blockBgColor: #c67100;
$hrColor: #ffd54f;
$bgColor: #6ec6ff;
$textColoe: #fff;
$marginNormal: 15px;
$marginSmall: 8px;
$height: 38px;

.width-box {
    width: 80%;
    margin: 0 auto;
}

.layout-flex {
    display: flex;
    justify-content: space-between;
}

.layout-content {
    box-sizing: border-box;
    border: 2px dashed $hrColor;
    width: 100%;
    height: 20vw;
    padding: 2%;
}

.layout-left {
    width: 20%;
    background: $mainColorLigt;
}

.layout-right {
    width: 78%;
    background: $layoutBgColor;
}

</style>

