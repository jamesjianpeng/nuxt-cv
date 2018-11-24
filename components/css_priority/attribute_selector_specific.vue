<template>
    <div>
        打开控制台查看
        <div>
            <i class="no">1.</i><a href="www.pengjiandry.com">www.pengjiandry.com 我是属性选择器全匹配的例子</a>
        </div>
        <pre>
html:
&lt;i class="no"&gt;1.&lt;/i&gt;&lt;a href="www.pengjiandry.com"&gt;www.pengjiandry.com 我是属性选择器全匹配的例子&lt;/a&gt;

css:
a[href="www.pengjiandry.com"] {
    color: $mainColorLigt
} 
        </pre>
        <div>
            <i class="no">2.</i><input type="text" value="我是属性选择器全匹配的例子">
        </div>
        <pre>
html:
&lt;i class="no"&gt;2.&lt;/i&gt;&lt;input type="text" value="我是属性选择器全匹配的例子"&gt;

css:
input[type="text"] {
    border: 1px solid $layoutBgColor;
}
        </pre>
    </div>
</template>

<script>
export default {
    name: 'AttributeSelectorSpecific'
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
$textColoe: #fff;
$marginNormal: 15px;
$marginSmall: 8px;
$height: 38px;

a[href="www.pengjiandry.com"] {
    color: $mainColorLigt
}
input[type="text"] {
    border: 1px solid $layoutBgColor;
}
</style>

