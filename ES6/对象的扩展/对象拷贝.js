//浅拷贝(a也被改变)
let a = {name:'后端'}
let b = a
b.name = '前端'
console.log(a)
console.log(b)

//深拷贝
let obj1 = {
    name:'电影',
    category:{
        cartoon:'动漫',
        kunfu:'武侠',
        love:'爱情',
    },
    platform:['腾讯视频','爱奇艺','优酷'],
}    

let obj2 = JSON.parse(JSON.stringify(obj1))
obj2.category.kunfu = '修仙'
obj2.platform[2]='bilibili'
console.log(obj1.category.kunfu)