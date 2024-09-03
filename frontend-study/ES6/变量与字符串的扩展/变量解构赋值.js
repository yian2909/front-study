var foods = {
    best:'火锅',
    good:'薯条',
    nomal:'快餐',
    bad:'泡面'
}

//获取foods中的best和bad
//var best = foods.best
//var bad = foods.bad

//解构赋值
var{ best, bad } = foods

//把best改为best1，bad改为bad1
//var { best:best1,bad:bad1 }=foods

//console.log(best)
//console.log(bad)

const address = {
    city:{
        name:'南京市',
        area:{
            name:'栖霞区',
            school:{
                name:'南工',
            },
        },
    }
}

//console.log(address.city.name)
//console.log(adress.city.area.name)

//嵌套的解构赋值
let{
    city:{
        name:cityName,
        area:{
            name:areaName,
            school:{name:schoolName},
        },
    },
} = address
console.log(cityName)
console.log(areaName)
console.log(schoolName)

