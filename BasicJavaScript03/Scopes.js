// {} scopes
// let & const  life is in blockscope 
// var life is not limited by blockscope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);


function fun1(){
    const userName="Abhishek"
        function fun2(){
            const website ="youtube"
            console.log(userName); // Abhishek
        }
       // console.log(website); // undefined 
         fun2() // abhishek
}

// fun1() // abhishek  



// if (true) {
//     const username ="Abhishek"
//     if (username === "Abhishek") {
//         const surname =" Kargeti "
//         console.log(username+surname);
//     }
//     console.log(surname);
    
// }
// console.log(username);



console.log(addOne(5))  // Because of Hosting this can be possible
function addOne(num1){
    return num1+1
}

addTwo(5) // In this hosting will not work because it is expression not function
const addTwo = function (num){
        return num+2
}


