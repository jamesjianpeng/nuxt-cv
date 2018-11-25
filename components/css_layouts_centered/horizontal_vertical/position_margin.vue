<template>
    <div>
        <div>
            <i class="no">3</i> 定宽高容器，水平垂直居中的方法 position + margin, 定宽高灵活性太差
        </div>
        <div class="position-margin-content">
            <div class="position-margin-inner">
                flex 实现水平垂直居中
                <br />
                适用于父子元素的 「 不定宽高/定宽高 」的场景
            </div>
        </div>
        <pre>
.position-margin-content {
    position: relative;
    background: $bgColor;
    height: 50vw;
}

.position-margin-inner {
    position: absolute;
    height: 400px;
    width: 200px;
    top: 50%;
    left: 50%;
    margin-top: -215px;
    margin-left: -115px;
    background: $mainColorLigt; 
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
$textColor: #fff;
$marginNormal: 15px;
$marginSmall: 8px;
$height: 38px;
.no {
    font-size: 40px;
    color: $mainColorLigt;
    font-weight: 500;
    font-style: normal;
}

.position-margin-content {
    position: relative;
    background: $bgColor;
    height: 50vw;
}

.position-margin-inner {
    position: absolute;
    height: 400px;
    width: 200px;
    top: 50%;
    left: 50%;
    margin-top: -215px;
    margin-left: -115px;
    background: $mainColorLigt; 
    color: #fff;
    padding: $marginNormal;
}
pre {
    padding: $marginSmall;
    border: 2px dashed $bgColor;
}
</style>