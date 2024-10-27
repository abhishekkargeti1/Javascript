function setUserName(userName){
    // DB Call
    console.log("Hello World")
    this.userName= userName
}
function createUser(userName,email,password){
    setUserName.call(this,userName)
    this.email=email
    this.password=password
}

const user1 = new createUser("abhishek","abhishek.kargeti@gmail.com","1808")
console.log(user1);
