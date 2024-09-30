// two types of Memory
// 1. stack  (Primitive)
// 2. heap   (Non-Primitive)

// Example
let myName = "Abhishek Kargeti"
let anotherName = myName
console.log(anotherName);
anotherName= "Abhi"
console.log(anotherName);
console.log(myName);


// Non Primitive

let user={
    email:"abhishek.kargeti@gmail.com",
    UPIId: "9643668742@paytm"
}

let user2 = user

console.log(user2);

user2.email="abhishek@gmail.com"
console.log(user2);
console.log(user);