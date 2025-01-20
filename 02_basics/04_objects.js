// Singleton Object

// const myobj = new Object

const myobj = {}
myobj.id = 108
myobj.name = "Burhan"
myobj.IsLoggedIn = false

//console.log(myobj);

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

// const obj3 = Object.assign({}, obj1, obj2) //merging 2 objects
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3); //also merigng
