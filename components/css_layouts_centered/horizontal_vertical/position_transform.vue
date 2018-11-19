<template>
<div>
    <div>
        <i class="no">2</i> 使用 「 定位 + tranform 」, 适用于 「 不定宽高 / 定宽高 」的场景
    </div>
    <div class="position-content">
        <div class="position-inner">
            使用 「 定位 + tranform 」
            适用于 「 不定宽高 / 定宽高 」的场景
        </div>
    </div>
    <pre>
.position-content { // 父元素
    position: relative;
    background: $bgColor;
    height: 50vw;
}

.position-inner { // 子元素
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
    width: 50%;
    background: $mainColorLigt; 
    color: #fff;
    padding: $marginNormal;
}
    </pre>
</div>
</template>

<script>
/**
 * @description 内联元素水平垂直居中
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
export default {
    name: 'CenteredPositionTranform'
}
</script>


<style lang="scss" scoped>
$mainColorLigt: #48a999;
$mainColor: #004c40;
$blockBgColor: #c67100;
$hrColor: #ffd54f;
$bgColor: #6ec6ff;
$textColoe: #fff;
$marginNormal: 15px;
$marginSmall: 8px;
$height: 38px;
.no {
    font-size: 40px;
    color: $mainColorLigt;
    font-weight: 500;
    font-style: normal;
}

.position-content {
    position: relative;
    background: $bgColor;
    height: 50vw;
}

.position-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
    width: 50%;
    background: $mainColorLigt; 
    color: #fff;
    padding: $marginNormal;
}
pre {
    padding: $marginSmall;
    border: 2px dashed $bgColor;
}
</style>