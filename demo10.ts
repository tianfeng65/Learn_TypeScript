/**
 * 类的构造函数
 * 构造函数就是在类被初始化的时候，自动执行的一个方法。我们通过这个构造方法经常作很多需要提前完成的工作
 */
class Person {
    public name: string;
    constructor(name: string) { 
        this.name = name
    }
}
const xiaowang = new Person('小王')
console.log(xiaowang)

// 这样写属性未免也太复杂了吧,一个name属性写了四遍。
// 当然有简写方式:
class Person2 {
    constructor(public name: string){}
}
const xiaohong = new Person2('小红')
console.log(xiaohong)

/**
 * 类继承的构造函数如何写:
 * 子类继承父类并有构造函数的原则，就是在子类里写构造函数时，
 * 必须用super()调用父类的构造函数，如果需要传值，也必须进行传值操作。
 * 就是是父类没有构造函数，子类也要使用super()进行调用，否则就会报错。
 */ 
class Teacher extends Person {
    constructor(public subject: string, name: string) {
        super(name)
    }
}
const teacherWang = new Teacher('chmistry', '王老师')
console.log(teacherWang)

export {}