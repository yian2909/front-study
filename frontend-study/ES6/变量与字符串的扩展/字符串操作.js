//判断某字符串中是否含有某个字符串片段
//const str = 'You are the best engineer.'
//console.log(str.indexOf('best'))
//console.log(str.indexOf('bs'))

//ES6的一些新方法
//console.log(str.includes('best'))
//console.log(str.startsWith('You'))
//console.log(str.endsWith('eer.'))

//字符串重复n次
//let str1 = '测试内容'
//str1 = str1.repeat(100)
//console.log(str1)

//字符串替换
let str2 = 'xxx love you,yyy love you ,zzz love you'
str2 = str2.replaceAll('you','me')
console.log(str2)

//模板字符串
const tittle = '模板元素'
let divStr = `
    <div>
        <span>${tittle}</span>
    </div>
`


