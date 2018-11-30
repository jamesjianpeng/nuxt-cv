
<template>
    <div class="wrap">
        <ul>
            <i class="no">3.</i>
            <li> 两个区域相互拖拽，并移动元素 </li>
        </ul> 
        <div class="one-content"
            data-type="one"
            @dragenter="dragenter"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop">
            <ul class="flex-start"
                data-type="one"
            >
                <li 
                    v-for="(item, index) in list"
                    :key="index"
                    class="drop-item"
                    :data-index="index"
                    data-type="one"
                    draggable="true"
                    @dragstart="dragstart"
                    @drag="drag"
                    @dragend="dragend"
                    :class="{ 'drop-enter cursor-move': item.class }">
                    {{ item.text }}
                </li>
            </ul>
            <div :class="{'mask': oneMask}" v-show="oneMask">需要一层 maxsk</div>
        </div>
        <div class="freed-content" 
            data-type="two"
            @dragenter="dragenter"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
        >
            <ul 
                v-if="feedList.length"
                data-type="two"
                class="flex-start">
                <li 
                    class="drop-item feed-item"
                    v-for="(item, index) in feedList"
                    :key="index"
                    :data-index="index"
                    draggable="true"
                    data-type="two"
                    @dragstart="dragstart"
                    @drag="drag"
                    @dragend="dragend"
                    :class="{ 'drop-enter cursor-move': item.class }">
                        {{ item.text }}
                        <button @click="remove(index)">移除</button>
                </li>
            </ul>
            <div class="two-mask" :class="{'mask': twoMask}" v-show="twoMask">需要一层 maxsk</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropThree',
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
                {
                    text: 'three',
                    id: 'three',
                    class: ''
                },
            ],
            feedList: [],
            tempindex: -1,
            twoMask: false,
            oneMask: false,
        }
    },
    mounted() {
    },
    methods: {
        /** @description 拖动目标在 拖拽一开始触发 */
        dragstart(e) {
            const type = e.target.dataset.type;
            const index = e.target.dataset.index;
            if (type === 'two') {
                this.exchangeTempindex(this.feedList, index);
                this.twoMask = true;
            }
            if (type === 'one') {
                this.exchangeTempindex(this.list, index);
                this.oneMask = true;
            }
        },

        exchangeTempindex(list, index) {
            this.tempindex = index;
            list[index].class = true;
        },
        
        /** @description 拖动目标在 拖拽移动过程中一直触发 */
        drag() {
            // console.log('drag')
        },

        /** @description 拖动目标在 拖拽元素触发 */
        dragend(e) {
            const type = e.target.dataset.type
            const index = e.target.dataset.index
            if (type === 'one') {
                if (this.list[index]) this.list[index].class = false
            }
            if (type === 'two') {
                if (this.feedList[index]) this.feedList[index].class = false
            }
            this.twoMask = false;
            this.oneMask = false;
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

        /** @description 可拖拽元素移动到释放区，鼠标释放时候触发 */
        drop(e) {
            const type = e.target.dataset.type;
            console.log(type)
            if (type === 'two') {
                this.exchangeItem(this.list, this.feedList)
            }
            if (type === 'one') {
                this.exchangeItem(this.feedList, this.list)
            }
        },
        exchangeItem(delListItem, addListItem) {
            const item = delListItem.splice(this.tempindex, 1);
            this.tempindex = -1;
            if (item && item[0]) {
                item[0].class = false;
                addListItem.push(item[0])
            };
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
.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #004c40;
    opacity: .2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.two-mask {
    background: $blockBgColor;
}
.one-content {
    min-height: 38px;
    border: 1px dashed $layoutBgColor;
    margin-bottom: $marginSmall;
    position: relative;
}
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
    position: relative;
}
</style>
