// OPPS , Object , why use OOPS , Parts Of OPPS 

// Object Liternal 

const user ={
    userName:"Abhishek",
    loginCount:"8",
    signedIN:true,
    getUserDetails:function(){
        console.log("Got user Details From Db ");
        console.log(this.userName)
        console.log(this.loginCount)
        console.log(this.signedIN)
       // console.log(this)
    }


}

// console.log(user["userName"]);
// console.log(user.getUserDetails());

// console.log(this)



// Contructor Function


function User(userName,loginCount,isLoggedIn){
        
        this.userName = userName 
        this.loginCount= loginCount
        this.isLoggedIn = isLoggedIn
        greeting = function(){
            console.log(`Hello , Welcome ${this.userName}`);
            
        }
        return this

}

const userOne = new User("Abhishek",12,true)
const userTwo = new User("Abhi",11,false)
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);


console.log(userOne instanceof User)
console.log(userTwo instanceof User)



