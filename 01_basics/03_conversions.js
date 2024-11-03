let no1 = 30
console.log(typeof(no1));

let no2 = "30"
let no2_conver = Number(no2)
console.log(typeof(no2_conver));

let no3 = "30abc"
let no3_conver = Number(no3)
console.log("value of no3_conver is: ", no3_conver)
console.log(("type of no3_conver is: ", typeof(no3_conver)));


let no4 = null
let no4_conver = Number(no4)
console.log("Value of no4_conver is: ", no4_conver);
console.log("type of no4_conver is: ", typeof(no4_conver));


let no5 = undefined
let no5_conver = Number(no5)
console.log("Value of no5_conver is: ", no5_conver);
console.log("type of no5_conver is: ", typeof(no5_conver));


let intNumber = 100
let stringNumber = String(intNumber)
console.log(typeof stringNumber)

let tr = 1
let fl = 0
let bool = Boolean(tr)
console.log(typeof bool);
