class User{
    constructor(userName){
        this.userName=userName
    }
    logMe(){
        console.log(`UserName is ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName,email,password){
        super(userName)
        this.email = email
        this.password=password
    }

    addCourses(){
        console.log(`New Course Added By ${this.userName}`);
    }
}

const teacher1 = new Teacher("Abhishek","abhishek.kargeti@gmail.com","1808")
// teacher1.addCourses()
const teacher2 = new User("Abhi")
teacher2.logMe()

console.log(teacher1 === teacher2);
console.log(teacher1 instanceof Teacher);
console.log(Teacher instanceof User);
