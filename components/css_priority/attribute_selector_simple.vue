<template>
    <div>
        <div class="simple-selector-1">
            <i class="no">1.</i> 简单的属性选择器
        </div>
        <div class="simple-selector-1">
            简单的属性选择器
        </div>
        <pre>
html:
&lt;div class="simple-selector-1"&gt;
    &lt;i class="no"&gt;1.&lt;/i&gt; 简单的属性选择器
&lt;/div&gt;
&lt;div class="simple-selector-1"&gt;
    &lt;i class="no"&gt;2.&lt;/i&gt; 简单的属性选择器
&lt;/div&gt;

css:
div[class] {
    color: #48a999;
}   
        </pre>

        <div class="simple-selector-1" title="第三断文字">
            <i class="no">2.</i> 简单的属性选择器
        </div>
        <pre>
html:
&lt;div class="simple-selector-1" title="第三断文字"&gt;
    &lt;i class="no"&gt;2.&lt;/i&gt; 简单的属性选择器
&lt;/div&gt;

css:
div[title] {
    color: #004c40;
}
        </pre>
        <div>
            <i class="no">3.</i>
            <input type="text" value="第一个输入框">
            <input type="text" value="第二个输入框">
        </div>
        <pre>
html:
&lt;i class="no">3.&lt;/i&gt;
&lt;input type="text" value="第一个输入框"&gt;
&lt;input type="text" value="第二个输入框"&gt;

css:
/* 第三个例子 */
input[type="text"] {
    border: 2px solid #48a999;
}
        </pre>

        <div>
            <i class="no">4.</i>
            <a href="" class="a">有 href 和 class 属性</a>
            <a href="">只有 href </a>
        </div>
        <pre>
html:
&lt;i class="no"&gt;4.&lt;/i&gt;
&lt;a href="" class="a"&gt;有 href 和 class 属性&lt;/a&gt;
&lt;a href=""&gt;只有 href &lt;/a&gt;

css：
/* 第四个例子 */
a[href][class] {
    color: #48a999;
    text-decoration: none;
}
        </pre>
    </div>
</template>

<script>
export default {
    name: 'attributeSelectorSimple'
}
</script>

<style lang="scss" scoped>
/* 第一个例子 */
div[class] {
    color: #48a999;
}

/* 第二个例子 */
div[title] {
    color: #004c40;
}

/* 第三个例子 */
input[type="text"] {
    border: 2px solid #48a999;
}

/* 第四个例子 */
a[href][class] {
    color: #48a999;
    text-decoration: none;
}
</style>
