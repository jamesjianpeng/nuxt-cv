
<template>
    <div class="wrap">
        <ul>
            <i class="no">2.</i>
            <li> 定义释放区 </li>
            <li>通过定义 dragenter, dragover, dragleave, drop </li>
        </ul>
        <ul class="flex-start drop-content">
            <li 
                v-for="(item, index) in list"
                :key="index"
                :data-index="index"
                @dragstart="dragstart"
                @drag="drag"
                @dragend="dragend"
                draggable="true"
                class="drop-item"
                :class="{ 'drop-enter cursor-move': item.class }">
                {{ item.text }}
            </li>
        </ul>
        <div class="freed-content" 
            @dragenter="dragenter"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
        >
            <ul 
                v-if="feedList.length"
                class="flex-start">
                <li 
                    class="drop-item feed-item"
                    v-for="(item, index) in feedList"
                    :key="index">
                        {{ item.text }}
                        <button @click="remove(index)">移除</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropTwo',
    data() {
        return {
            list: [
                {
                    text: 'one',
                    id: 'one',
                    class: ''
                },
                {
                    text: 'two',
                    id: 'two',
                    class: ''
                },
            ],
            feedList: [],
            tempindex: -1,
        }
    },
    mounted() {
    },
    methods: {
        /** @description 拖动目标在 拖拽一开始触发 */
        dragstart(e) {
            const index = e.target.dataset.index;
            this.tempindex = index;
            this.list[index].class = true;
            console.log('dragstart')
        },
        
        /** @description 拖动目标在 拖拽移动过程中一直触发 */
        drag() {
            // console.log('drag')
        },

        /** @description 拖动目标在 拖拽结素触发 */
        dragend(e) {
            const index = e.target.dataset.index
            if (this.list[index]) this.list[index].class = false
            console.log('dragend')
        },

        /** 
         * @description 释法区
         */
        dragenter() {
            console.log('feed dragenter 1')
        },

        /** @description dragover 需要阻止其他的默认行为，否则 drop 就不会触发 */
        dragover(e) {
            console.log('feed dragover 2')
            e.preventDefault()
        },
        dragleave() {
            console.log('feed dragleave 3')
        },
        drop(e) {
            console.log('feed drop 4')
            const item = this.list.splice(this.tempindex, 1);
            this.tempindex = -1;
            if (item) {
                item[0].class = false;
                this.feedList.push(item[0])
            };
            console.log(e)
        },
        remove(index) {
            const item = this.feedList.splice(index, 1);
            if (item) this.list.push(item[0]);
        },
    }
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
.drop-item {
    border: 1px dashed $layoutBgColor;
    padding: $marginSmall $marginNormal;
    margin: $marginSmall;
    color: $layoutBgColor;
    transition: all .2s ease-in-out;
}
.feed-item {
    border-color: $hrColor;
    color: $blockBgColor;
}
.drop-enter {
    background: $mainColorLigt;
    opacity: .5;
    background: $layoutBgColor;
    color: #fff;
    padding-left: $marginNormal * 2;
    padding-right: $marginNormal * 2;
}
.freed-content {
    min-height: 10vh;
    border: 1px dashed $blockBgColor;
}
</style>
