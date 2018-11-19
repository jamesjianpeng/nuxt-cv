<template>
    <div>
        <div>
            <i class="no">1</i> flex 实现水平垂直居中，适用于 「 不定宽高 / 定宽高 」的场景
        </div>
        <div class="flex-content">
            <div class="flex-inner">
                flex 实现水平垂直居中
                <br />
                适用于父子元素的 「 不定宽高/定宽高 」的场景
            </div>
        </div>
        <pre>
.flex-content { // 父元素
    display: flex;
    justify-content: center;
    align-items: center;
    background: $bgColor;
    height: 50vw;
}

.flex-inner { // 子元素
    height: 50%;
    width: 50%;
    background: $mainColorLigt; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: $marginNormal;
}
        </pre>
    </div>
</template>

<script>
/**
 * @description flex 实现水平垂直居中
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
export default {
    name: 'CenteredFlex'
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

.flex-content {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $bgColor;
    height: 50vw;
}

.flex-inner {
    height: 50%;
    width: 50%;
    background: $mainColorLigt; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: $marginNormal;
}
pre {
    padding: $marginSmall;
    border: 2px dashed $bgColor;
}
</style>