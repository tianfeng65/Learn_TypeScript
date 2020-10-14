# Learn_TypeScript
跟着技术胖学习TS

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
const count: number = 1
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
