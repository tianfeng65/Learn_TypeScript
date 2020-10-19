/**
 * interface
 * 规范类型，接口只是对我们开发的约束，在生产环境中并没有体现。
 * 也可以说接口只是在 TypeScript 里帮我们作语法校验的工具，编译成正式的js代码，就不会有任何用处了。
 * 
 * 接口与类型别名的区别：
 * 1、接口必须代表对象。
 * 2、接口可以定义非必选值 'gender?: string'
 * 3、接口可以加入任意值 '[propname: string]: any'
 * 4、接口可以规范方法 'sayHello()'
 * 5、class对接口的实现
 * 6、接口可以继承 'Teacher'
 */
interface Student {
    name: string;
    age: number;
    height: number;
    gender?: string;
    [propname: string]: any;
    sayHello(): void
}

interface Teacher extends Student {
    teach(): void
}
const screen = (student: Student) : void => {
    if(student.age < 25 && student.height > 170) {
        console.log(`${student.name}进入面试`)
    } else {
        console.log(`${student.name}你被淘汰`)
    }
}

const xiaoming = {
    name: '小明',
    age: 25,
    height: 180,
    gender:'mail',
    hobby: ['basketball', 'football'],
    sayHello: () => console.log('hello world')
}
screen(xiaoming)

class xiaohong implements Student {
    name = '小红';
    age = 24;
    height = 160;
    gender = 'femail';
    sayHello = () => console.log('hello, im xiaohong');
}

const teacherWang: Teacher = {
    name: '王老师',
    age: 45,
    height: 178,
    sayHello: () => console.log('hello im a Chinese teacher'),
    teach: () => console.log('同学们好，把书翻到第20页')
}

export {}