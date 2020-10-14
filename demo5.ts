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

