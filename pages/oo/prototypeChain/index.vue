<template>
    <div>
        extend 借用构造函数
        <img src="~/assets/image/extend/extend_prototype.png" alt="">
    </div>
</template>

<script>

function SuperType () {
    this.name = 'super';
    this.getSuperTypeName = function() {
        return this.name
    }
}

function SubType () {
    this.name = 'sub';
    this.getSubTypeName = function() {
        return this.name
    }
}

SubType.prototype = new SuperType()

Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    value: SuperType
})

var instance = new SubType();
console.log(instance)
console.log(instance.getSuperTypeName())
console.log(instance.getSubTypeName())

export default {
    name: 'extendIndex'
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
