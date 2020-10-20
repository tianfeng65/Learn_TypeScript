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

export {}
