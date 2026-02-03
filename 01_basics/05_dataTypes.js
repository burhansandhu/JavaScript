/* primitive Data Types:

String, Number, Boolean, BigInt, null, undefined, symbol

Non-Premitive (Reference):

Array, Objects, Functions
*/

// Array
const my_array = ["Burhan", "Riaz", "Tayyab"]

// Object
let my_obj = {
    name:"Burhan",
    age: 21,
    University: "UMT"
}

//  Function
const my_function = Function() 
{
    console.log("Hello World"); 
}


/* Stack:
primitive data types comes under stack, in stack we given a copy of
original object and change in copy not reflect change in original value
it works as shallow copy in python

Heap:
Non-primitive data types comes in heap, in this we given memory reference
of original value and change in 1 cause change in other
it works as deep copy in python

*/