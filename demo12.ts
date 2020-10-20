/**
 * 类的只读属性
 * 
 */
class Person {
    constructor(public readonly name: string) {}
}
const xiaoming = new Person('小明')
// xiaoming.name = '小红' // 报错：无法分配到 "name" ，因为它是只读属性

/**
 * 抽象类
 * abstract 用于定义抽象类和其中的抽象方法。
 * 抽象类是不允许被实例化的：
 * 抽象类中的抽象方法必须被子类实现：
 */
abstract class Animal {
    constructor(public readonly name: string) {}
    abstract yell():void
}

class Cat extends Animal {
    yell() {
        console.log('喵 喵 🐱')
    }
}

let xiaopang = new Cat('小胖')
console.log(xiaopang.name)
xiaopang.yell()

export {}