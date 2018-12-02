
<template>
    <div>
        <ul>
            <li>通过 draggable 可拖拽的目标</li>
            <li>可拖动目标的是事件:dragstart drag dragend</li>
        </ul> 
        <ul class="flex-start drag-content">
            <li 
                v-for="(item, index) in list"
                :key="index"
                :data-index="index"
                @dragstart="dragstart"
                @drag="drag"
                @dragend="dragend"
                draggable="true"
                class="drag-item"
                :class="{ 'drag-enter cursor-move': item.class }">
                {{ item.text }}
            </li>
        </ul>
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
            ]
        }
    },
    methods: {
        dragstart(e) {
            const index = e.target.dataset.index
            this.list[index].class = true
            console.log('dragstart')
        },
        drag() {
            console.log('drag')
        },
        dragend(e) {
            const index = e.target.dataset.index
            this.list[index].class = false
            console.log('dragend')
        }
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
.drag-item {
    background: $mainColorLigt;
    padding: $marginSmall $marginNormal;
    margin: $marginSmall;
    color: #fff;
}
.drag-enter {
    background: $mainColorLigt;
    opacity: .5;
}
</style>
