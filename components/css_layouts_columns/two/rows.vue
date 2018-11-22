<template>
    <div>
        <div>
        <div class="width-box">
            <div>
                <i class="no">3.</i>
                flex：左侧定宽，右侧自适应;其中左侧上下两行，的高度都是自是适应
            </div>
            <div class="layout-content layout-flex">
                <div class="layout-left layout-flex-column">
                    <div class="layout-row-top">
                        left top
                    </div>
                    <div class="layout-row">
                        left row
                    </div>
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
.layout-flex-column { // 新增垂直方向排列
    display: flex;
    flex-direction: column;
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
    box-sizing: border-box;
    width: 150px;
    flex-shrink: 0; // 当父容器内容缩小的时候，设置flex-shrink 为 0 的时候表示默认不缩小
    margin-right: $marginNormal;
    background: $hrColor;
    padding: 2%;
}
.layout-row-top {
    height: 30%;
    background: $mainColorLigt;
}
.layout-row {
   height: 60%;
   background: $mainColorLigt;
}

.layout-right {
    width: 78%;
    background: $layoutBgColor;
}
            </pre>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'CssLayoutColumnsTwoRows'
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
.layout-flex-column { // 新增垂直方向排列
    display: flex;
    flex-direction: column;
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
    box-sizing: border-box;
    width: 150px;
    flex-shrink: 0; // 当父容器内容缩小的时候，设置flex-shrink 为 0 的时候表示默认不缩小
    margin-right: $marginNormal;
    background: $hrColor;
    padding: 2%;
}
.layout-row-top {
    height: 30%;
    background: $mainColorLigt;
}
.layout-row {
   height: 60%;
   background: $mainColorLigt;
}

.layout-right {
    width: 78%;
    background: $layoutBgColor;
}
</style>