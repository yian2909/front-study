//form() flat()(扁平化 三维数组->一维数组) 
//form()
// let obj = {
//     0:'a',
//     1:'b',
//     length:2,
// }

// let arrs = Array.from(obj)
// console.log(arrs)

//flat:拍平
// let arrs1 = [1,2,[3,4,[5]]]
// arrs1 = arrs1.flat(3)
// console.log(arrs1)

//sort:排序
let arrs2 = [3,4,1,8,5]
let result = arrs2.sort((e1,e2) =>{
    return e1-e2 //升序
})
console.log(result)