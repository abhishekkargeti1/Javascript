// Array

// const myarr = [0,1,2,3,4]
// const heros =["ironMan","CaptainAmerica"]
// const myarr1 = new Array(1,2,3,4); 
// console.log(myarr[0]);
// console.log(myarr[2]);/


// Array Methods

// myarr.push(7)
// myarr.push(8)
// console.log(myarr);

// myarr.pop()
// console.log(myarr);

// myarr.unshift(9)
// console.log(myarr);

// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))
// console.log(myarr.includes(3))
// console.log(myarr.indexOf(3))


// const newArr = myarr.join();
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myarr);
// console.log( typeof myarr);


// slice , splice   

// console.log("A ", myarr);
// const myArr1 = myarr.slice(1,3);
// console.log(myArr1);
// console.log("B ", myarr);
// const myArr2 = myarr.splice(1,3); // this manuplate the original array  . It remove the range element from the array .
// console.log("C ", myarr);
// console.log(myArr2);


// Array Part 2

const heros = ["Thor","IronMan","CaptainAmerica"]
const heros2 = ["Flash","Superman","WonderWomen"]
// heros.push(heros2)
// console.log(heros);
// console.log(heros[3]);
// console.log(heros[3][1]);

// let h1 =heros.concat(heros2) gives new Array 
// console.log(h1);

// const newArr = [...heros,...heros2] gives new Array. Add multiple Array 
// console.log(newArr);


// const anotherArr =[1,2,3,4,[4,5,6],7,[8,9,10,[8,5]]]
// const newArr2 = anotherArr.flat(3)
// const newArr2 = anotherArr.flat(Infinity)
// console.log(newArr2);

// console.log(Array.isArray("Abhishek")) // check is this an array 

// console.log(Array.from("Abhishek")) // Convert things in array


// console.log(Array.from({name:"Abhishek"})) // always return empty array

let score1 = 200
let score2 = 300
let score3 = 400

// console.log(Array.of(score1,score2,score3))



