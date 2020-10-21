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

export {}