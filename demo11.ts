/**
 * 类的Getter、Setter
 * 注意： getter setter不是方法，而是特殊的属性
 */
class Person {
    constructor(private _age: number){}
    get age() {
        return this._age
    }
    set age(val) {
        this._age = val < 18 ? 18 : val
    }
}
const xiaojiejie = new Person(24) // 小姐姐的年龄不可以随便透露，但是提供了getAge方法访问
//console.log(xiaojiejie._age) // 报错：属性“_age”为私有属性，只能在类“Person”中访问。
console.log(xiaojiejie.age) // 使用getter得到24
xiaojiejie.age = 15 // 使用setter赋值，可以自定义逻辑
console.log(xiaojiejie.age) // 使用getter得到24

/**
 * 类中的static
 * 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用，
 * 同样也有静态属性
 */
class Teacher {
    static occupation = '老师';
    static sayHello() {
        return '同学们好'
    }
}

console.log('职业: ', Teacher.occupation, '常说: ', Teacher.sayHello())

export {}