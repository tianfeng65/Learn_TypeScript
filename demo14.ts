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

export {}