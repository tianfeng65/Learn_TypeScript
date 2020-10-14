# Learn_TypeScript
跟着技术胖学习TS
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
