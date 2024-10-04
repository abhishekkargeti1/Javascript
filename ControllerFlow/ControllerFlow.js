// if statement

const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("Logged In ");   
}

if(2 =="2"){
    console.log("True"); // because == check only value which is compare.
}

if(2 ==="2"){
    console.log("False"); // because === checks datatype and value which is campare.
}


// const score = 50

// if(score>70){
//     const power = fly
//     console.log(`User have Power of ${power}`);
// }else{
//     console.log(`User have No Power`);
// }


// const balance = 1000

// if(balance>500) console.log("You Have Sufficent Balance") , console.log("Hello World");  // 



// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");    
// }else if(balance < 750){
//     console.log("less than 750");    

// }else if(balance <900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }



const userLoggedIn = true
const userLoggedFromGoogle = false
const debitCard = true 
if(userLoggedIn && debitCard){
    console.log("Allowed to Buy Courses");
}else{
    console.log("Not Allowed");
}


if(userLoggedIn || userLoggedFromGoogle && debitCard){
    console.log("Allowed to Buy Course");
}else{
    console.log("Not Allowed To Buy Course");
}

// Nullish Coalescing Operator (??) : null undefined

let val1 
// val1 =5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1  = null ?? 10 ?? 15
console.log(val1);


// Terniory Operator

const value1 = 2 
value1 >3 ? console.log("true") : console.log("false");


// switch 

const value = 3

switch (value) {
    case 1:
        console.log("January ");
        break;
        
    case 2:
        console.log("Feb");
        break;
        
    case 3:
        console.log("March ");
        break;
        
    case 4:
        console.log("April ");
        break;
        
    case 5:
        console.log("May ");
        break;
        
    case 6:
        console.log("June ");
        break;
        
    default:
        console.log("Invalid Input");
        break;
}