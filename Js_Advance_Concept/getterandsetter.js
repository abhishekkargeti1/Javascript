class User{
    constructor(userName,password){
        this.userName=userName
        this.password=password
    }
    set password(password){
        this._password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
}
const user1 = new User("Abhishek","1808")
console.log(user1.password);
