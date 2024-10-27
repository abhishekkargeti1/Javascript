// class User{
//     constructor(userName,email,password){
//         this.userName=userName
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }

// }

// const user1 = new User("Abhishek","abhishek.kargeti@gmail.com","1808")
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());


// Behind the Code scene

function User(userName,email,password){
    this.userName=userName
    this.email=email
    this.password=password
}

User.prototype.encryptPassword=function(){
     return `${this.password}abc`
}
User.prototype.changeUsername= function(){
     return `${this.userName.toUpperCase()}`
}

const user2 = new User("Abhishek","abhishek.kargeti@gmail.com","1808")
console.log(user2.changeUsername()) 
console.log(user2.encryptPassword()) 
