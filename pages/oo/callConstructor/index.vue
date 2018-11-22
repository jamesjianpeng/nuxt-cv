<template>
    <div>
        extend 借用构造函数
        <img src="~/assets/image/extend/extend_prototype.png" alt="">
    </div>
</template>

<script>
/**
 * @file 组合式继承
 * @description 原型继承 + 借助构造函数
 */
function SuperType (name) {
    this.name = name;
    this.getSuperTypeName = function() {
        return this.name
    }
}

function SubType (name, age) {
    this.age = age
    SuperType.call(this, name)
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    return this.age;
}

var instance1 = new SubType()

console.log(instance1)
console.log(instance1 instanceof SuperType)
console.log(instance1 instanceof SubType)
console.log(instance1 instanceof Object)

var instance2 = new SubType()

console.log(instance2)

export default {
    name: 'extendIndex'
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
