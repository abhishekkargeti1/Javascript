// Declaration Object 
// Two ways 
// 1. literal
        //  const user = {} // object created
// 2. Constructor => it make singleton objects 
        //Object.create // constructor object creation

// Object literals

// const mySym =  Symbol("key1") // Declaration of Symbol
// console.log(mySym);

// const user = {
//     name :"Abhishek",
//     "Full Name":"AbhishekKargeti",
//     [mySym]:"mykey1", // to assign Symbol in object
//     age:18,
//     location: "Delhi",
//     email:"abhishek.kargeti@gmail.com",
//     isLoggedIn:false,
//     lastLoggedIn:["Monday","Tuesday"]
// }

// console.log(user.name);  // first Way to access element from Object 
// console.log(user["Full Name"]);  // Second Way to access element from Object
// console.log(user["email"]);
// console.log(user.mySym);
// console.log( user[mySym]); // to Access  symbol in object

// user.email="abhishek.kargeti@yahoo.com"
// console.log(user["email"]);
// Object.freeze(user) // to lock the attribute of object
// user.name="Abhi"
// console.log(user);

// user.geeting = function(){
//     console.log("Hello World")
// }

// user.geeting1 = function(){
//     console.log(`Hello I am ${this.name}`)
// }

// console.log(user.geeting); // undefined 
// console.log(user.geeting());  
// console.log(user.geeting1());  



// Object Part 2

// Singleton Object

const TinderUser = new Object();  // Singleton Object 

// console.log(TinderUser);

const TinderUser1 = {}
// console.log(TinderUser1);


TinderUser.id="1808"
TinderUser.name="Abhishek"
TinderUser.isLoggedIn=false


// console.log(TinderUser);


// const regularUser = {
//     email :"abhishek.kargeti@gmail.com",
//     fullName:{
//         userFullName:{
//             Firstname: "Abhishek",
//             LastName:"Kargeti"
//         }
//     }
// }

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.Firstname);

// console.log(regularUser.fullName.name?.userFullName.LastName);


const obj1 ={
    id:1808,
    name:"Abhishek"
}

const obj2={
    contact:9643668742,
    email:"abhishek.kargeti@gmail.com"
}
const obj3 ={
    obj1,obj2
}
// console.log(obj3);



// const obj4 =Object.assign(obj1,obj2)  // It will change in Original Object Obj1

// console.log("Object 4 ",obj4);
// console.log(obj1);


// const obj5 =Object.assign({}, obj1 , obj2)  // It will Create a New Object and Do not change the exsiting array

// const obj5 ={...obj1,...obj2} // Spread Operation
// console.log(obj5);
// console.log(obj1);

console.log(TinderUser);

console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(typeof Object.keys(TinderUser));
console.log(Object.entries(TinderUser));
console.log(TinderUser.hasOwnProperty('name'));







