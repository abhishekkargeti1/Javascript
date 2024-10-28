class User{
    constructor(userName){
        this.userName=userName
    }
    logMe(){
        console.log(`Username is ${this.userName}`);
    }
    static createId(){
        return `123`
    }

}
const abhishek= new User("Abhishek")
console.log(abhishek.createId())