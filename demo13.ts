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