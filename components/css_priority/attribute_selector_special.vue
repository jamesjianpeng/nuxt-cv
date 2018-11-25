<template>
    <div>
        <div>
            <i class="no">1</i>
            <div>
                <span title="five-1-1" lang="ch">
                    属性的值只有一个，这个值等于或者从头可以匹配 five-1
                </span>
            </div>
            <div>
                <span title="five-1 text" lang="ch">
                    特殊选择器不匹配1
                </span>
            </div>
            <div>
                <span title="five-1-1 text" lang="ch">
                    有多个值的并且 five-1 在这些值没有相等的同时是第一个值从开头匹配的
                </span>
            </div>
            <div>
                <span title="five-1">
                    属性的值只有一个，这个值等于或者从头可以匹配 five-1
                </span>
            </div>
        </div>
        <pre>
html:
&lt;div&gt;
    &lt;span title="five-1-1" lang="ch"&gt;
        属性的值只有一个，这个值等于或者从头可以匹配 five-1
    &lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;span title="five-1 text" lang="ch"&gt;
        特殊选择器不匹配1
    &lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;span title="five-1-1 text" lang="ch"&gt;
        有多个值的并且 five-1 在这些值没有相等的同时是第一个值从开头匹配的
    &lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;span title="five-1"&gt;
        属性的值只有一个，这个值等于或者从头可以匹配 five-1
    &lt;/span&gt;
&lt;/div&gt;

css
[title|="five-1"] { 
    /*
     * 0.0.1.0 title 属性的值只有一个，这个值等于或者从头可以匹配 five-1 或者
     * 有多个值的并且 five-1 在这些值没有相等的同时是第一个值从开头匹配的
     */ 
    color: red;
}
        </pre>
    </div>
</template>

<script>
export default {
    name: "attributeSelectorSpecial"
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

// [title|="five"] { // 0.0.1.0
//     color: red;
// }

[title|="five-1"] { 
    /*
     * 0.0.1.0 title 属性的值只有一个，这个值等于或者从头可以匹配 five-1 或者
     * 有多个值的并且 five-1 在这些值没有相等的同时是第一个值从开头匹配的
     */ 
    color: red;
}
</style>


