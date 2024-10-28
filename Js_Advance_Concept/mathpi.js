const des =  Object.getOwnPropertyDescriptor(Math,"PI")
console.log(des);


console.log(Math.PI);
const chai ={
    name:"Abhishker",
    price:"1808",
    isAvailable:false
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai,"name",{
    writable:false,
    configurable:false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));



for(let [key,value]of Object.entries(chai)){
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
}