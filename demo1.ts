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