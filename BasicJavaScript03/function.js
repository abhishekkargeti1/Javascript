// function fun() {
//   console.log("A");
//   console.log("B");
//   console.log("H");
//   console.log("I");
//   console.log("S");
//   console.log("H");
//   console.log("E");
//   console.log("K");
// }

// fun()


// function addTwoNumber(num1,num2){
//        console.log(num1+num2)
//        return num1+num2
// }

// addTwoNumber(2,3)
// addTwoNumber(4,"5")
// addTwoNumber(4,"a")
// addTwoNumber(4,null)


// const result = addTwoNumber(2,4)
// console.log(result);


// function userLogIn(userName = "user"){
//     if(!userName){
//         console.log("Please Enter A UserName")
//         return
//     }   
//     return `${userName} just Login`
// }

// const userMessage = userLogIn("Abhishek")
// console.log(userMessage)
// console.log(userLogIn("Abhishek"));



// function Part 2

// function calculateCartPrice(...num1){
//     return num1
// }

//  console.log(calculateCartPrice(2,56,44));

// To solve above problem  we use rest Operator
// console.log(calculateCartPrice(2,56,44)); // this returns an array 


// function fun (value1,value2,...x){
//     return x
// }

// console.log(fun(48,85,74,45,59));


const user={
    userName:"Abhishek",
    price:"1808"
}
function anyObjectHandler(anyObject){
        console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
        
}
// anyObjectHandler(user)
// anyObjectHandler({userName:"Sam",price:800})

const myarr =[200,400,300]

function fun2 (arr){
    console.log(arr[1]);
}

// fun2(myarr)
// fun2([200,800,500,515])



// Arrow Function


const user1 ={
    userName :"Abhishek",
    price:9909,
    welcomeMessage:function(){
        console.log(`Hello ${this.userName}, Welcome to website `);
        console.log(this);
        
        
    }

}
// user1["welcomeMessage"]()
// user1["userName"] = "Abhi"
// user1["welcomeMessage"]()


// console.log(this);


// function one(){
//     let userName="Abhishek"
//     console.log(this.userName);
// }

// one()


const fun =()=>{
    userName:"Abhishek"
    console.log(this.userName);
}

const fun21 =()=>console.log("hello World")  // another way to declare arrow Function

const fun3 =()=>(console.log("hello World")) // another way to declare arrow Function


fun()
fun21()
fun3()



const myArray =[1,3,2,4,5,5,]

myArray.forEach((value, index) => {
        console.log(value)
});



