//const foods = ['炸鸡','啤酒','烧烤']
//let [a,b,c] = foods
//console.log(a)
//console.log(b)
//console.log(c)

//
const foods = ['炸鸡',['啤酒','烧烤',['烤鸡腿','烤羊肉']]]
let [a,[b1,b2,[c1,c2]]] = foods
console.log(a)
console.log(b1,b2)
console.log(c1,c2)