<template>
    <div>
        我是构造原型模式
    </div>
</template>

<script>
/**
 * @file 构造函数 + 原型模式
 * 
 */
function Person (){}

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})

function Car(obj) {
    this.owner = obj.owner; // 拥有者
    this.vender = obj.vender; // 厂商
    this.type = obj.type; // 车的类型
    this.name = obj.name; // 车名
    this.no = obj.no; // 车牌号码
    this.oilWear = obj.oilWear; // 油耗
    this.oilPrice = obj.oilPrice; // 油的价格
    this.distance = obj.distance; // 路程
}

Car.prototype = {
    getInfo: function() {
        return {
            owner: this.owner, // 拥有者
            vender: this.vender, // 厂商
            type: this.type, // 车的类型
            name: this.name, // 车名
            no: this.no, // 车牌号码
            oilWear: this.oilWear, // 油耗
            oilPrice: this.oilPrice, // 油的价格
            distance: this.distance, // 路程
        }
    },
    getCost: function() {
        return this.distance * this.oilWear * this.oilPrice
    }
}

Object.defineProperty(Car.prototype, 'constructor', {
    enumerable: false,
    value: Car
})

var sedanCar = new Car({
    owner: '小明', // 拥有者
    type: '轿车', // 车的类型
    name: '奔驰', // 车名
    no: '2333', // 车牌号码
    vender: '德国', // 厂商
    oilWear: 0.3, // 油耗
    oilPrice: .5, // 油的价格
    distance: 0 // 路程
})

var truck = new Car({
    owner: '小明的爸爸', // 拥有者
    type: '货车', // 车的类型
    name: '解放牌货车', // 车名
    no: '6666', // 车牌号码
    vender: '中国', // 厂商
    oilWear: 0.5, // 油耗
    oilPrice: .6, // 油的价格
    distance: 0 // 路程
})

console.log(sedanCar)
console.log(truck)

console.log('truck instanceof Car: ', truck instanceof Car)
console.log('truck instanceof Object: ', truck instanceof Object)
console.log('sedanCar instanceof Car: ', sedanCar instanceof Car)

console.log('Car.prototype.isPrototypeOf(sedanCar) :', Car.prototype.isPrototypeOf(sedanCar))
console.log('Object.prototype.isPrototypeOf(sedanCar) :', Object.prototype.isPrototypeOf(sedanCar))
console.log('Person.prototype.isPrototypeOf(sedanCar) :', Person.prototype.isPrototypeOf(sedanCar))

console.log('Object.getPrototypeOf(sedanCar) === Car.prototype:', Object.getPrototypeOf(sedanCar) === Car.prototype)
console.log('Object.getPrototypeOf(sedanCar) === Object.prototype:', Object.getPrototypeOf(sedanCar) === Object.prototype)

export default {
    name: 'ConstructorPrototypeIndex'
}
</script>

