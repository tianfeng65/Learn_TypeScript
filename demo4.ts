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
