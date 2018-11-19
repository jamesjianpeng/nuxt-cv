<template>
    
      <div class="box">
        <div>
            <div class="text">
                <i class="no">1</i> margin: 0 auto；:
            </div>

            <div class="block-bg block-horizontal-fi;st">
                <div class="first-inner">第一种方式：我是块元素，我需要水平居中 我的宽度： 80%</div>
            </div>
            <div>
<pre>
.first-inner { //子元素
    margin: 0 auto;
    background: $blockBgColor;
    width: 80%;
}
</pre>
            </div>
        </div>

        <!-- <hr /> -->
        
        <div>
            <div class="text">
                <i class="no">2</i> flex:
            </div>

            <div class="block-bg block-horizontal-second">
                <div class="second-inner">第二种方式：我是块元素，我需要水平居中，我的宽度： 80%</div>
            </div>
            <div>
<pre>
.block-horizontal-second { // 父元素
    display: flex;
    justify-content: center;
}
.second-inner {
    background: $blockBgColor;
    width: 80%;
}
</pre>
            </div>
        </div>

        <!-- <hr /> -->
        
        <div>
            <div class="text">
                <i class="no">3</i> 定位，一般块元素是不知道宽度的，需要借助 CSS3 中的 transform:
            </div>

            <div class="block-bg block-horizontal-third">
                <div class="third-inner">第三种方式：我是块元素，我需要水平居中</div>
            </div>
        <div>
<pre>
.block-horizontal-third {
    position: relative;
}
.third-inner {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 80%;
}
</pre>
            </div>
        </div>

        <hr />
        <div class="summary-text">
            总结：flex 现在用的比较多
        </div>
    </div>
</template>

<script>
/**
 * @description 块元素水平居中
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
export default {
    name: 'BlockHorizontal'
}
</script>

<style lang="scss" scoped>
$mainColorLigt: #48a999;
$mainColor: #004c40;
$blockBgColor: #c67100;
$hrColor: #ffd54f;
$inlineColor: #6ec6ff;
$textColoe: #fff;
$marginNormal: 15px;
$marginSmall: 8px;
$height: 38px;
.no {
    color: $mainColorLigt;
    font-size: 40px;
    font-weight: 500;
    font-style: normal;
}
/* #region 内联元素水平居中第一种 */
.first-inner {
    margin: 0 auto;
    background: $blockBgColor;
    width: 80%;
}
/* #endregion */

/* #region 内联元素水平居中第二种 */
.block-horizontal-second { // 父元素
    display: flex;
    justify-content: center;
}
.second-inner {
    background: $blockBgColor;
    width: 80%;
}
/* #endregion */

/* #region 内联元素水平居中第三种 定位，不知道固定宽度的话需要借助 CSS 3 中的 transfor*/
.block-horizontal-third {
    position: relative;
}
.third-inner {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background: $blockBgColor;
    width: 80%;
}
/* #endregion */
.box {
    padding-bottom: $marginNormal * 4;
}
.block-bg {
    background: $inlineColor;
    color: $textColoe;
    padding: $marginNormal;
    min-height: $height;
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


