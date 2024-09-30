"use  strict";

// alert("Hello")  we are using node js not browser

// console.log(3+3);
// console.log("Abhishek")

// Datatype

// let name="Abhishek"
// let age = 18
// let isloggedIn = true

// number
// string
// bigint
// boolean
// null => standalone value 
// undefined =>
// symbol 


// object 

// console.log(typeof null); // object 
// console.log(typeof undefined); // undefined


// Primitive DataType

// Call By Value 

// 1 String
// 2 number
// 3 Boolean 
// 4 Null => empty not 0 
// 5 undefined
// 6 symbol
// 7 BigInt


// Reference Type or Non Primitve Type

// 1 Arrays
// 2 Objects
// 3 Function


// What Type of lanaguage is Javascript ?
// Answer is  dynamically  tyoed Language  

const number = 32
console.log(typeof number);
const salary  = 32.54
console.log(typeof salary);
const isloggedIn = false    
console.log(typeof isloggedIn);
const outsidetemp = null
console.log(typeof outsidetemp);


// symbol

const id = Symbol('123')
const id1 = Symbol('123')

console.log(id === id1);

// bigint
const number2 = 455165851851541515185545n
console.log(typeof number2);


// Non Primitive Datatypes

// Array
const hero = ["Abhishek", "Nikhil", "Kargeti"]

// Object 
let myobj={
    name :"Hero",
    age :21
}
 

// Function 

let fun=function (){
    return "Hello I am Function";
}

console.log(fun());

console.log(typeof fun);







