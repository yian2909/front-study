var arrs = [1,2,3,4,5]
arrs.forEach((e) => {
    console.log(e)
})

//遍历的同时把每个元素*2
let res = arrs.map((e) => {
    return e*2
})
console.log(res)