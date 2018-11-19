<template>
    <div>
        
      <div class="box">
        <div>
            <div class="text">
                <i class="no">1</i> 内联元素
            </div>
            <!-- padding 实现块元素垂直居中 -->
            <div class="block-bg block-vertical-first">
                <span class="first-inner">第一种方式: line-height 和 height 相等 </span>
            </div>
            <div>
<pre>
.block-bg { // 父元素
    background: $bgColor;
    color: $textColoe;
    padding: $marginNormal;
    min-height: $height; // height 和 line-height 相等
    line-height: $height;
    margin-top: $marginNormal;
}

.first-inner { //子元素 不固定高度
    background: $mainColorLigt;
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

            <div class="block-bg block-vertical-second">
                <span class="second-inner">第二种方式：使用 flex（CSS3）</span>
            </div>
            <div>
<pre>
.block-bg.block-vertical-second { // 父元素
    display: flex;
    align-items: center;
    padding: 0 $marginNormal;
    height: $height;
    line-height: inherit;
}
.second-inner {
    background: $mainColorLigt;
    width: 80%;
}
</pre>
            </div>
        </div>

        <!-- <hr /> -->
        
        <div>
            <div class="text">
                <i class="no">3</i> 定位，不管子元素的高度是否确定都适用，需要借助 CSS3 中的 transform:
            </div>

            <div class="block-bg block-vertical-third">
                <sapn class="third-inner">第三种方式：定位，不管子元素的高度是否确定都适用，需要借助 CSS3 中的 transform:</sapn>
            </div>
        <div>
<pre>
.block-vertical-third { // 父元素是子元素的 2 倍高
    position: relative;
    min-height: $height * 2;
    padding: 0;
}
.third-inner { // 子元素
    position: absolute;
    top: 50%; // 在垂直方向是父元素的 50%
    left: $marginNormal;
    transform: translate(0, -50%); // 在垂直方向向上移动 子元素的 50% 高度
    background: $mainColorLigt;
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
    </div>
</template>

<script>
/**
 * @description 内联元素垂直居中
 * @author Jamesjianpeng <jamesjianpeng@gmail.com>
 */
export default {
    name: 'InlineVertical',
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
    color: $mainColorLigt;
    font-size: 40px;
    font-weight: 500;
    font-style: normal;
}
.block-bg {
    background: $bgColor;
    color: $textColoe;
    padding: $marginNormal;
    min-height: $height;
    line-height: $height;
    margin-top: $marginNormal;
}

/* #region 内联元素水平居中第一种 */
.block-vertical-first {
    padding: 0;
}
.first-inner { //子元素
    background: $mainColorLigt;
    width: 80%;
}

/* #endregion */

/* #region 内联元素水平居中第二种 */
.block-bg.block-vertical-second { // 父元素
    display: flex;
    align-items: center;
    padding: 0 $marginNormal;
    height: $height;
    line-height: inherit;
}
.second-inner {
    background: $mainColorLigt;
    width: 80%;
}
/* #endregion */

/* #region 内联元素水平居中第三种 定位，不知道固定宽度的话需要借助 CSS 3 中的 transfor*/
.block-vertical-third {
    position: relative;
    min-height: $height * 2;
    padding: 0;
}
.third-inner {
    position: absolute;
    top: 50%;
    left: $marginNormal;
    transform: translate(0, -50%);
    background: $mainColorLigt;
    width: 80%;
}
/* #endregion */
.box {
    padding-bottom: $marginNormal * 4;
}
.text {
    min-height: $height;
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
    border: 2px dashed $bgColor;
}
hr {
    border: 2px solid $hrColor;
    margin-bottom: $marginNormal * 2;
}

</style>
