/**
 * 类的访问类型：private、protected和public
 */

 //1、public不在类里对name的访问属性进行定义，那么它就会默认是public访问属性。
 //   public从英文字面的解释就是公共的或者说是公众的，在程序里的意思就是允许在类的内部和外部被调用。
 //2、private 私有属性，只允许再类的内部被调用，外部不允许调用。
 //3、protected 受保护的属性，允许在类内及继承的子类中使用。
class Person {
    name: string; //等价于这么写：public name: string;
    private age: number;
    protected gender: string;
    sayHello() {
        console.log(`hello everyone, I am ${this.name}, I am ${this.age} years old, my gender is ${this.gender}.`) // 这里的this.name this.age this.gender是内部调用
    }
}
//以下属于类的外部
const xiaohong = new Person()
xiaohong.name = '小红'           // 外部读写name属性
//xiaohong.age = 24             // 报错：属性“age”为私有属性，只能在类“Person”中访问。
//xiaohong.gender = 'femail'    // 报错：属性“gender”受保护，只能在类“Person”及其子类中访问。
xiaohong.sayHello()             // 外部调用sayHello方法

class Teacher extends Person {
    sayHello() {
        console.log(`同学们大家好，我是你们的${this.gender === 'femail' ? '女' : '男'}老师，我来给大家上课。`) // 在继承的类中调用受保护的属性
    }
}

const teacherWang = new Teacher()
teacherWang.sayHello()
