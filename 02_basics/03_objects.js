//object Literal


const myobj = {
    name: "Burhan",
    age: 21,
    id: 108,
    city: "Lahore"
}

// console.log(myobj.city);
// console.log(myobj["city"]); //preffered

myobj.city = "Sheikhupura" ////////

// console.log(myobj["city"]);

// Object.freeze(myobj) // this will freeze object and changing after that statement will not affect object
myobj.name = "Burhan ul haq"
console.log(myobj["name"]);

// adding a function to myobj
myobj.hello = function(){
    console.log("Hello World");
}

console.log(myobj.hello());
