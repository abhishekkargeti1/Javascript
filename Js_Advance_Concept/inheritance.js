const user={
    username:"Abhishek",
    email:"abhishek.kargeti@gmail.com"
}

const teacher ={
    makeVideo:true
}
const teacherSupport={
    isAvaibale :false
}
const TASupport ={
    makeAssigment:"Js Assignment",
    fullTime:true,
    __proto__: teacherSupport
}

teacher.__proto__= user


// New Way Of Code of Above 


Object.setPrototypeOf(teacherSupport,teacher)


let myName ="Abhishek     "
let myName1 ="AbhishekKargeti     "

String.prototype.truelength=function(){
    console.log(`${this}`);
    // console.log(`${this.myName}`);
    console.log(`True length is :${this.trim().length}`);
    
}
myName.truelength()
"kargeti".truelength()