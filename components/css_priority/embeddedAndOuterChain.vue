<template>
    <div>
        <p class="text-important" style="color: #48a999"><i class="no">1.</i>我使用了内嵌的样式,和外链中的 !important，!important 的优先级比内嵌的优先级更高 </p>
<pre>
    html:
    &lt;p class="text-important" style="color: #48a999"&gt;
        &lt;i class="no"&gt;2.&lt;/i&gt;我使用了内嵌的样式,和外链中的 !important，!important 的优先级比内嵌的优先级更高
    &lt;/p&gt;

    css:
    /* 内嵌样式和外链样式 !important 对比 */
    .text-important {
        color: #000 !important;
    }
    /* !important 的优先级比内嵌的优先级更高 */
</pre>

        <p class="text" style="color: #48a999"><i class="no">2.</i>我使用了内嵌的样式,和外链的对比，内嵌的优先级更高 </p>
<pre>
    html:
    &lt;p class="text" style="color: #48a999"&gt;
        &lt;i class="no"&gt;1.&lt;/i&gt;我使用了内嵌的样式,和外链的对比，内嵌的优先级更高
    &lt;/p&gt;

    css:
    /* 内嵌样式和外链样式的对比 */
    .text {
        color: #000;
    }
    /* 内嵌的优先级更高 */
</pre>

       <p id="text-id" style="color: #48a999"><i class="no">3.</i>我使用了内嵌的样式,和外链中的 id，内嵌的优先级比 id 的优先级更高 </p> 
<pre>
    html:
    &lt;p id="text-id" style="color: #48a999"&gt;
        &lt;i class="no"&gt;2.&lt;/i&gt;我使用了内嵌的样式,和外链中的 id，内嵌的优先级比 id 的优先级更高 
    &lt;/p&gt; 

    css:
    /* 内嵌样式和外链样式 id 对比 */
    #text-id {
        color: #000;
    }
    /* 内嵌的优先级更高比 id 高 */
</pre>
    </div>
</template>

<script>
export default {
    name: 'embeddedAndOuterChain'
}
</script>

<style lang="scss" scoped>
/* 内嵌样式和外链样式 class 优先级的对比 */
.text {
    color: #000;
}
/* 内嵌的优先级更高 */

/* 内嵌样式和外链样式 !important 对比 */
.text-important {
    color: #000 !important;
}
/* !important 的优先级比内嵌的优先级更高 */

/* 内嵌样式和外链样式 id 对比 */
#text-id {
    color: #000;
}
/* 内嵌的优先级更高比 id 高 */
</style>


