<template>
    <div class="box">
        <div>
            <div class="text">
                <i class="no">1</i> text-align:
            </div>

            <div class="inline-bg inline-horizontal-first">
                第一种方式：我是内联元素，我需要水平居中
            </div>
            <div>
<pre>
.inline-horizontal-first {
    text-align: center;
}
</pre>
            </div>
        </div>

        <!-- <hr /> -->
        
        <div>
            <div class="text">
                <i class="no">2</i> flex:
            </div>

            <div class="inline-bg inline-horizontal-second">
                第二种方式：我是内联元素，我需要水平居中
            </div>
            <div>
<pre>
.inline-horizontal-second {
    display: flex;
    justify-content: center;
}
</pre>
            </div>
        </div>

        <!-- <hr /> -->
        
        <div>
            <div class="text">
                <i class="no">3</i> 定位，一般内联元素是不知道宽度的，需要借助 CSS3 中的 transform:
            </div>

            <div class="inline-bg inline-horizontal-third">
                <span class="inline-horizontal-positon">第三种方式：我是内联元素，我需要水平居中</span>
            </div>
        <div>
<pre>
.inline-horizontal-third {
    position: relative;
}
.inline-horizontal-positon {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
}
</pre>
            </div>
        </div>

        <hr />
        <div class="summary-text">
            总结：内联元素水平居中一般采用前两种，最后一种适用的场景主要是「 不定宽高的盒子 」水平垂直的居中
        </div>
    </div>
</template>

<script>
/**
 * @description 内联元素水平居中
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
export default {
    name: 'InlineHorizontal'
}
</script>

<style lang="scss" scoped>
$mainColorLigt: #48a999;
$mainColor: #004c40;
$hrColor: #ffd54f;
$inlineColor: #6ec6ff;
$textColor: #fff;
$marginNormal: 15px;
$marginSmall: 8px;
$height: 38px;
.no {
    color: $mainColorLigt;
    font-size: 40px;
    font-weight: 500px;
    font-style: normal;
}
/* #region 内联元素水平居中第一种 */
.inline-horizontal-first {
    text-align: center; 
}
/* #endregion */

/* #region 内联元素水平居中第二种 */
.inline-horizontal-second {
    display: flex;
    justify-content: center;
}
/* #endregion */

/* #region 内联元素水平居中第三种 定位，不知道固定宽度的话需要借助 CSS 3 中的 transfor*/
.inline-horizontal-third {
    position: relative;
}
.inline-horizontal-positon {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
}
/* #endregion */
.box {
    padding-bottom: $marginNormal * 4;
}
.inline-bg {
    background: $inlineColor;
    color: $textColor;
    padding: $marginNormal;
    height: $height;
    line-height: $height;
    margin-top: $marginNormal;
}
.text {
    height: $height;
    line-height: $height;
    margin-top: $marginNormal * 2;
}
.summary-text {
    line-height: $height / 1.5;
    margin-top: $marginNormal * 2;
    padding: $marginNormal;
    border: 2px dashed $hrColor;
}
pre {
    padding: $marginSmall;
    border: 2px dashed $inlineColor;
}
hr {
    border: 2px solid $hrColor;
    margin-bottom: $marginNormal * 2;
}

</style>

