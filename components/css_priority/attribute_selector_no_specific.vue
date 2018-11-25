<template>
    <div>
        打开控制台查看
        <div>
            <i class="no">1.1</i><span class="class-text" title="text first">[attribute~="value"] { ... } ~> 匹配 attribute 以空格分隔的 value</span>
        </div>
        <pre>
html:
&lt;span title="text first"&gt;[attribute~="value"] { ... } ~&gt; 匹配 attribute 以空格分隔的 value&lt;/span&gt;

css:
/* 第一个例子 */
span[title~="first"] { // 0.0.1.1
    color: $mainColorLigt;
}
span[title~="firs"] { // 0.0.1.1 匹配不生效
    color: $mainColor;
} 
        </pre>

        <div>
            <i class="no">1.2</i><span title="text first second">[attribute~="value"] { ... } ~> 匹配 attribute 以空格分隔的 value</span>
        </div>
        <pre>
html:
&lt;span title="text first second"&gt;[attribute~="value"] { ... } ~&gt; 匹配 attribute 以空格分隔的 value&lt;/span&gt;

css:
/* 第一个例子 */
span[title~="first"] { // 0.0.1.1
    color: $mainColorLigt;
}
span[title~="firs"] { // 0.0.1.1 匹配不生效
    color: $mainColor;
}
/* 第二个例子 */
span[title~="first second"] { // 0.0.1.1 匹配不生效
    color: $mainColor;
}  
        </pre>

        <div>
            <i class="no">2.1</i>
            <span title="second-one text">
                [attribute^="value"] { ... } ~> 匹配 attribute 以该 value 开头的元素
            </span>
        </div>
        <pre>
html:
&lt;span title="second-one text"&gt;
    [attribute^="value"] { ... } ~> 匹配 attribute 以该 value 开头的元素
&lt;/span&gt;

css:
/* 第 2.1 个例子 */
span[title^="second-one"] { // 0.0.1.1
    color: $mainColorLigt;
}
span[title^="second"] { // 0.0.1.1
    color: $mainColor;
}
        </pre>

        <div>
            <i class="no">3.1</i>
            <span title="text third-one">
                [attribute$="value"] { ... } ~> 匹配 attribute 以该 value 结尾的元素
            </span>
        </div>
        <pre>
html:
&lt;span title="text third-one"&gt;
    [attribute$="value"] { ... } ~> 匹配 attribute 以该 value 结尾的元素
&lt;/span&gt;

css:
/* 第 3.1 个例子 */
span[title$="third-one"] { // 0.0.1.1
    color: $mainColorLigt;
}
span[title$="-one"] { // 0.0.1.1
    color: $mainColor;
}
        </pre>

        <div>
            <i class="no">4.1</i>
            <span title="text four">
                [attribute*="value"] { ... } ~> 匹配 attribute 中包含 value 的元素
            </span>
        </div>
        <pre>
html:
&lt;span title="text four"&gt;
    [attribute*="value"] { ... } ~> 匹配 attribute 中包含 value 的元素
&lt;/span&gt;

css:
/* 第 4.1 个例子 */
span[title*="four"] { // 0.0.1.1
    color: $mainColorLigt;
}
span[title*="our"] { // 0.0.1.1
    color: $mainColor;
}
        </pre>

        <div class="five-content layout-five">
            <i class="no">5.1</i>
            <span class="more-selector-1 five-1" title="text five more-selector">
                多个选择器的匹配,并且和 类选择器的覆盖测试
            </span>
            <span title="text five more">
                多个选择器的匹配,不匹配的例子
            </span>
        </div>
        <pre>
html:
&lt;span title="text five more-selector"&gt;
    多个选择器的匹配,并且和 类选择器的覆盖测试
&lt;/span&gt;
&lt;span title="text five more-selector"&gt;
    多个选择器的匹配,不匹配的例子
&lt;/span&gt;

css:
/* 第 5.1 个例子 */
span[title*="more-"][title$="more-selector"][title*="-selector"][title~="more-selector"] { 
    // 0.0.4.1
    color: red;
}

.five-content.layout-five span.more-selector-1.five-1 { 
    // 0.0.4.1
    color: blue;
}
        </pre>
    </div>
</template>

<script>
export default {
    name: 'AttributeSelectorNoSpecific'
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

/* 第 1.1 例子 */
span[title~="first"] { // 0.0.1.1
    color: $mainColorLigt;
}
span[title~="firs"] { // 0.0.1.1 匹配不生效
    color: $mainColor;
}

// span.class-text { // 0.0.1.0 验证 类选择器和属性选择器的优先级相同，后者覆盖前者
//     color: $mainColor;
// }

/* 第 1.2 个例子 */
span[title~="first second"] { // 0.0.1.1 匹配不生效
    color: $mainColor;
}

/* 第 2.1 个例子 */
span[title^="second-one"] { // 0.0.1.1
    color: $mainColorLigt;
}
span[title^="second"] { // 0.0.1.1
    color: $mainColor;
}

/* 第 3.1 个例子 */
span[title$="third-one"] { // 0.0.1.1
    color: $mainColorLigt;
}
span[title$="-one"] { // 0.0.1.1
    color: $mainColor;
}

/* 第 4.1 个例子 */
span[title*="four"] { // 0.0.1.1
    color: $mainColorLigt;
}
span[title*="our"] { // 0.0.1.1
    color: $mainColor;
}

/* 第 5.1 个例子 */
span[title*="more-"][title$="more-selector"][title*="-selector"][title~="more-selector"] { 
    // 0.0.4.1
    color: red;
}

.five-content.layout-five span.more-selector-1.five-1 { 
    // 0.0.4.1
    color: blue;
}
</style>

