function User(email,pasword){
    this._email=email
    this._pasword=pasword

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this.email=value
        }
    })

}

const User1 = new User("abhishek.kargeti@gmail.com","1808")
console.log(User1.email);
