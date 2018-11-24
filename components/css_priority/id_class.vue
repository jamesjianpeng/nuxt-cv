<template>
    <div>
        <div id="id" class="class new-class"><i class="no"></i> <span class="text">id + class 特殊性的对比，可打开控制台自己调试一下</span></div>
        <pre>
html:
&lt;div id="id" class="class new-class"&gt;
    &lt;i class="no"&gt;&lt;/i&gt; &lt;span class="text"&gt;id + class&lt;/span&gt;
&lt;/div&gt;

css:
.class { // 0.0.1.0
    color: #004c40;
}

#id { // 0.1.0.0
    color: #48a999;
}

#id.class { // 0.1.1.0
    color: #6ec6ff;
}

id.class { // 0.1.1.0
    color: #ffd54f;
}

id.new-class.class { // 0.1.2.0
    color: #000;
}

id.class .text { // 0.1.2.0
    color: blue;
}

id.new-class.class .text { // 0.1.3.0
    color: red;
}
        </pre>
    </div>
</template>

<script>
export default {
    name: 'IdClass'
}
</script>

<style lang="scss" scoped>
/* id + class 对比 */
.class { // 0.0.1.0
    color: #004c40;
}

#id { // 0.1.0.0
    color: #48a999;
}

#id.class { // 0.1.1.0
    color: #6ec6ff;
}

#id.class { // 0.1.1.1
    color: #ffd54f;
}

#id.new-class.class { // 0.1.2.1
    color: #000;
}

#id.class .text { // 0.1.2.1
    color: blue;
}

#id.new-class.class .text { // 0.1.3.1
    color: red;
}
</style>
