/**
 * 类
 */
class Person {
    sayHello() {
        console.log('hello world')
    }
}

const xiaoming = new Person()
xiaoming.sayHello()

// 类的继承
class Student extends Person{
    study() {
        console.log('老师，我也想学这个')
    }
}

const studentHe = new Student()
studentHe.sayHello()
studentHe.study()

// 类的重写
class Teacher extends Person {
    sayHello() {
        console.log('同学们好呀')
    }
}

const teacherWang = new Teacher()
teacherWang.sayHello()

// supe关键字的使用，可以读取父类中的属性，调用父类中的方法
class EnglishTeacher extends Teacher {
    sayHello() {
        super.sayHello()
        console.log('I teach you English, and I hope you like my class!')
    }
}
const teacherLi = new EnglishTeacher()
teacherLi.sayHello()
