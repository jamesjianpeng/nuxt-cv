<template>
    <div>
        extend 原型继承
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

var superType =  Object.create(new SuperType())

console.log(superType)
// var sub = Object.create(new SuperType())

export default {
    name: 'extendIndex'
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
