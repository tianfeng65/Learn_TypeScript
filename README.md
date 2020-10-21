# Learn_TypeScript
学习TS，记录学习笔记

# 一、起步
```javascript
/**
 * 1、安装node。
 * 2、全局安装typescript。
 * 3、node不认识ts文件，使用tsc命令将ts文件转换为js文件，然后node js文件。
 * 4、这样有点麻烦，全局安装ts-node就可以使用ts-node直接运行ts文件。
 */

function jspang() {
    const web: string = 'hello world'
    console.log(web)
}
jspang()
```
# 二、静态类型

```javascript
/**
 * 1、如何定义静态类型
 * 
 * 这里的: number就是定义了一个静态类型。
 * 这样定义后count这个变量在程序中就永远都是数字类型了，不可以改变了。
 */
let count: number = 1
// count = 'jspang' //* 比如我们这时候给count复制一个字符串，它就报错了。

/**
 * 2、自定义静态类型（接口 interface）
 * 
 * 现在你定义一个小姐姐的类型，然后在声明变量的时候，就可以使用这个静态类型了，看下面的代码。
 * 这时候你如果声明变量，跟自定义不一样，VSCode直接就会报错。需要注意的是，这时候xiaohong变量也具有uname和age属性了。
 * 如果使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定了。
 * 这个特点就大大提高了程序的健壮性，并且编辑器这时候也会给你很好的语法提示，加快了你的开发效率。
 */
interface XiaoJieJie {
    name: string;
    age: number
}

const xiaohong: XiaoJieJie = {
    name: '小红',
    age: 24
}

/**
 * 3、基础静态类型和对象静态类型
 * 
 * 3.1、基础静态类型非常简单，只要在声明变量的后边加一个:号，然后加上对应的类型哦。
 * 包括null,undefinde,symbol,boolean，void，number，boolean,string。
 * 比如下面的代码，就是声明了一个数字类型的变量，叫做count。
 */
const age: number = 25
const myName: string = 'tianfeng'
const isMale: boolean = true

/**
 * 3.2、对象静态类型
 * 最简单的对象形式
 */

const tf: {
    age: number,
    name: string,
    isMale: boolean
} = {
    age: 25,
    name: 'tianfeng',
    isMale: true
}
console.log(tf.name)

/**
 * 3.2、对象静态类型
 * 数组形式：变量xiaoJieJies必须是一个数组，数组里的内容必须是字符串。你可以试着把字符串改为数字，VSCode会直接给我们报错。
 */

const xiaoJieJies: String[] = ['不知火舞', '王昭君', '甄姬']

/**
 * 3.2、对象静态类型
 * class形式
 */
class Person {}
const tianfeng: Person = new Person()

/**
 * 3.2、对象静态类型
 * function形式
 */

const eat: (food: string) => void = food => {
    console.log(`我吃了${food}`)
}

eat('汉堡王')
```
# 三、类型推断 & 类型注解
```javascript
/**
 * 1、类型注解 type annotation
 * 这段代码就是类型注解，意思是显示的告诉代码，我们的count变量就是一个数字类型，这就叫做类型注解。
 */

const count: number = 123

/**
 * 2、类型推断 type inferrence
 * 这段代码并没有显示的告诉你变量countInference是一个数字类型，
 * 但是如果你把鼠标放到变量上时，你会发现 TypeScript 自动把变量注释为了number（数字）类型，
 * 也就是说它是有某种推断能力的，通过你的代码 TS 会自动的去尝试分析变量的类型。
 */
let countInferrence = 234
// countInferrence = '123' //不能将类型“string”分配给类型“number”。

/**
 * 3、注意事项
 * 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了，它会使用自己的类型推断。
 * 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
 */

 // 这段代码ts类型推断会明确one、two、three为number类型。
 const one = 1
 const two = 2
 const three = one + two 

 /**
  * 这里的one、two、total会被推断为any类型。
  * 这时候如果你传字符串，你的业务逻辑就是错误的，但是ts类型推断却没有报错，
  * 所以你必须加一个类型注解，把上面的代码写成下面getTotal2的样子。
  */
 function getTotal(one, two) {
     return one + two
 }
 const total = getTotal(1 , '234') 
 
  /**
  * 这里的one、two、total2会被推断为number类型。
  * total2这个变量不需要加类型注解，因为当one和two两个变量加上注解后，TypeScript 就可以自动通过类型推断，分析出变量的类型。
  */
 function getTotal2(one: number, two: number) {
     return one + two
 }
 const total2 = getTotal2(123, 1)

 /**
  * TypeScript 也可以推断出对象中属性的类型，比如现在写一个小姐姐的对象，然后里边有两个属性。
  * 写完后你把鼠标放在XiaoJieJie对象上面，就会提示出他里边的属性及其类型，这表明 TypeScript 通过类型推断也分析出了对象的属性的类型。
  */
 const xiaohong = {
     name: '小红',
     age: 25
 }

 /**
  * 在写 TypeScript 代码的一个重要宗旨就是每个变量，每个对象的属性类型都应该是固定的，如果你推断就让它推断，推断不出来的时候你要进行注释。
  */
```
# 四、函数的参数与返回值的类型注解
```javascript
/**
 * 函数的参数与返回值的类型注解
 * 
 * 1、给getTotal函数返回值加上类型注解
 * 在之前的getTotal函数中其实是有一个小坑的，就是我们并没有定义getTotal的返回值类型，虽然TypeScript可以自己推断出返回值是number类型。 
 * 但是如果这时候我们的代码写错了，比如写程了下面这个样子。这时候total的值就不是number类型了，但是不会报错。
 * 这时错误的根本是getTotal()函数的错误，所以合适的做法是给函数的返回值加上类型注解，代码如getTotal2：
 */
function getTotal(one: number, two: number) {
    return one + two + ''
}

const total = getTotal(1, 2) 
console.log(typeof total)// 虽然没有报错，但是结果却是个string
// 正确的做法：给函数返回值加上类型注解
function getTotal2(one: number, two: number): number{
    // return one + two + ''  //错误会在这里就提示出来，从根本上解决了返回值的类型错误问题
    return one + two
}
const total2 = getTotal2(1, 2)

/**
 * 2、函数无返回值如何注解: void
 * 
 * 有时候函数是没有返回值的，比如现在定义一个sayHello的函数，这个函数只是简单的terminal打印，并没有返回值。
 * 没有返回值的函数，我们就可以给他一个类型注解void，代表没有任何返回值。
 */
function sayHello(): void {
    console.log('hello world!')
}

/**
 * 3、never返回类型，少见
 * 如果一个函数是永远也执行不完的，就可以定义返回值为never，那什么样的函数是永远也执行不完的那?我们先来写一个这样的函数(比如执行执行的时候，抛出了异常，这时候就无法执行完了)。
 * 还有一种是一直循环，也是我们常说的死循环，这样也运行不完，比如下面的代码：
 */

function errFunction(): never {
    throw new Error('some error')
    console.log('hello world')
}

function forEver(): never {
    while(true) {
        console.log('hello world')
    }
}
// try {
//     errFunction()
// } catch (error) {
//     console.log(error)
// }
// forEver()

/**
 * 4、函数的参数是对象时，如何定义类型注解
 */

/**
 * 这里参数传入了一个对象，但是对象的one，two属性以及函数返回值都被类型推断为了any。
 * 所以两次不同的调用都没有报错，都能跑的通，但是ts却不是ts了，变成了AnyScript。
 */
function add({one, two}) {
    return one + two
}
const result = add({one: 1, two: 3}) // 4
const result2 = add({one: '1', two: '3'}) // '13'
//使用类型注解对函数的对象参数进行约束
function add2({one, two}: {one: number, two: number}): number {
    return one + two
}
add2({one: 12, two: 34}) // 46

function getNum({one}: {one: number}): number{
    return one
}
getNum({one: 100})// 100
```

# 五、数组类型的定义

```javascript
/**
 * 1、一般数组类型的定义
 */
// 数组的元素类型只有一种
const numArr = [1, 2, 3] // 会被类型注解定义为number[]
const numArr2: number[] = [2, 3, 4]
const strArr: string[] = ['a', 'b', 'c']
const undefinedArr: undefined[] = [undefined, undefined, undefined]
// 数组的元素类型不止一种
const arr = [1, 2, 3, true] // 会被类型注解定义为涵盖当前所有元素的最小情况。即(number | boolean)[]
const arr2: (number | boolean)[] = [1, true, 0, false]

/**
 * 2、数组中对象类型的定义
 */
const people: {name: string, age: number}[] = [
    {name: '小王', age: 25},
    {name: '小李子', age: 26}
]
/**
 * 上面{name: string, age: number}的写法有点繁复，而且当我们在别的地方也需要使用这个类型怎么办。
 * TypeScript 为我们准备了一个概念，叫做类型别名(type alias)。
 * 比如刚才的代码，就可以定义一个类型别名，定义别名的时候要以type关键字开始。现在定义一个Person的别名。
 */
type Person = {name: string, age: number} // 自己定义了一个数据类型
const people2: Person[] = [
    {name: '小王', age: 25},
    {name: '小李子', age: 26}
]
// 使用class也可以，把上面的type换成class看看吧。
```

# 六、元祖
```javascript
/**
 * 元祖的使用和其类型约束
 * TypeScript 中提供了元组的概念，这个概念是JavaScript中没有的。
 * 其实你可以把元组看成数组的一个加强，它可以更好的控制或者说规范里边的类型。
 * 工作中不经常使用元组，因为如果要使用元组，完全可以使用对象的形式来代替。
 */

 //看数组类型的一个问题，把xiaowang数组中的各种值颠来倒去，ts不会报错。
 //因为我们虽然约束了数组元素的类型，但是却没有约束具体位置上的元素类型。
 const xiaowang: (number | string)[] = ['小王', 'teacher', 30]

 //元祖类型把数组上每个元素类型的位置给固定住了， 30只能在最后一个位置, 而且数组长度也被定死为3。
 const xiaohong: [string, string, number] = ['小王', 'teacher', 30]
```

# 七、接口
```javascript
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
```

# 八、类的概念和使用
```javascript
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

```

# 九、类的访问类型
```javascript
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

```

# 十、类的构造函数
```javascript
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
```

# 十一、类的Getter、Setter、static
```javascript
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
```

# 十二、抽象类
```javascript
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
    constructor(public readonly name) {}
    abstract yell()
}

class Cat extends Animal {
    yell() {
        console.log('喵 喵 🐱')
    }
}

let xiaopang = new Cat('小胖')
console.log(xiaopang.name)
xiaopang.yell()
```
# 十三、联合类型
```javascript
/**
 * 联合类型
 * 联合类型（Union Types）表示取值可以为多种类型中的一种。
 * 联合类型使用 | 分隔每个类型。
 * 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
 */
let myFavoriteNumber: string | number // 允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。
myFavoriteNumber = '65' // 可以
console.log(myFavoriteNumber.length) // 2 可以，被推断为string类型
myFavoriteNumber = 65   // 可以
//console.log(myFavoriteNumber.length)// 报错，被推断为number类型，而类型“number”上不存在属性“length”。
//myFavoriteNumber = true // 不可以

/**
 * 访问联合类型的属性或方法
 * 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
 */
function getLength(something: string | number): number {
    return something.length // 报错： 类型“number”上不存在属性“length”。length 不是 string 和 number 的共有属性，所以会报错。
}
```

# 十四、类型断言
```javascript
/**
 * 类型断言
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型。
 * 值 as 类型
 * 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：
 * 使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。
 */

//1、将一个联合类型断言为其中一个类型
interface Cat {
    name: string,
    run(): void
}

interface Fish {
    name: string,
    swim(): void
}

function getName(animal: Cat | Fish): void {
    console.log(animal.name) // 这里只能访问到Cat类型和Fish类型的公共的属性和方法
}

function isFish(animal: Cat | Fish): boolean {
    // return typeof animal.swim === 'function' ? true : false // 类型“Cat”上不存在属性“swim”。
    return typeof (animal as Fish).swim === 'function' ? true : false //将 animal 断言成 Fish,就不会报错了。
}

const lanlan: Cat = {
    name: '小蓝猫',
    run() {
        console.log('跑的飞快')
    }
}

const liyu: Fish = {
    name: '小鲤鱼',
    swim() {
        console.log('划水')
    }
}
console.log(isFish(lanlan)) // false
console.log(isFish(liyu))   // true

//2、将一个父类断言为更加具体的子类

class ApiError extends Error {
    code: number = 0
}

class HttpError extends Error {
    statusCode: number = 200
}

function isApiError(error: Error) {
    if(typeof (error as ApiError).code === 'number') {
        return true
    } 
    return false
}

//3、将任何类型断言成any
//理想情况下，TypeScript 的类型系统运转良好，每个值的类型都具体而精确。
//当我们引用一个在此类型上不存在的属性或方法时，就会报错：这种错误提示显然是非常有用的。
const foo: number = 123;
foo.length = 1 // 报错：类型“number”上不存在属性“length”。

//但有的时候，我们非常确定这段代码不会出错，比如下面这个例子：
//浏览器环境下：
window.foo = 123; // 报错： 类型“Window”上不存在属性“foo”。
(window as any).foo = 123; // ok
//node环境：
globalThis.foo = 123; // 类型“typeof globalThis”上不存在属性“foo”
(globalThis as any).foo = 123

//需要注意的是，将一个变量断言为 any 可以说是解决 TypeScript 中类型问题的最后一个手段。
//它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any。

//4、将 any 断言为一个具体的类型
//我们不可避免的需要处理 any 类型的变量，它们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留的或其他人编写的烂代码，还可能是受到 TypeScript 类型系统的限制而无法精确定义类型的场景。
function getAnimal(key: any): any {
    return (window as any).catch[key]
}

const tom = getAnimal('tom') as Cat
tom.run()
```

# 十五、枚举类型
```javascript
// Enum 枚举类型：用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
//枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

//我们也可以给枚举项手动赋值：未手动赋值的枚举项会接着上一个枚举项递增
enum Colors {red=1, green=3, blue}

console.log(Colors['red'] === 1)    // true
console.log(Colors['green'] === 3)  // true
console.log(Colors['blue'] === 4)   // true

console.log(Colors[1] === 'red')    // true
console.log(Colors[3] === 'green')  // true
console.log(Colors[4] === 'blue')   // true
```

# 十六、泛型
```javascript
/**
 * 泛型
 */
function join(first: string | number, second: string | number) {
    return `${first}${second}`
}
join('2','3') // '23'
join(2, 3)    // '23'
join(2, '3')  // '23'

/**
 * 现在有这样一个需求，就是first参数如果传的是字符串类型，要求second也传字符串类型。
 * 同理，如果是number类型，就都是number类型。显然，上面的join方法无法满足我们的需求。
 * 学习泛型来解决这个问题。
 */

function join2<T>(first: T, second: T) {
    return `${first}${second}`
}

// join2<string>('2', 3)  // 报错：参数都要是string类型

function consoleArr<T>(arr: T[]) {
    console.log(arr)
}

// consoleArr<number>([1, '2']) //报错：数组元素都要是number类型

//类中使用泛型：一开始我们接受的参数是
class Select <T>{
    constructor(private list: T[]){}
    getItem(index: number) {
        return this.list[index]
    }
}
const cats = ['美短', '英短', '布偶']
const selectCat = new Select <string> (cats)
console.log(selectCat.getItem(0)) // '美短'

const numbers = [1234, 23245, 4456]
const selectNum = new Select <number> (numbers)
console.log(selectNum.getItem(2)) // 4456

//泛型中的继承
interface Cat {
    name: string,
    age: number
}

// 这里的T泛型继承自接口Cat，说明其应该实现该接口，包含接口中所有定义的属性，方法
class SelectCat <T extends Cat> {
    constructor(private cats: T[]){}
    getCat(index: number): string {
        return this.cats[index].name
    }
}

const cats2 = cats.map(cat => ({name: cat, age: 1}))
const selectCat2 = new SelectCat(cats2)
console.log(selectCat2.getCat(2))
```