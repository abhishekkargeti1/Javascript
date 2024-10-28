const User={
    _email:'abhishek.kargeti@gmail.com',
    _password:'1808',
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}


const user1 = Object.create(User)
console.log(user1._email);
