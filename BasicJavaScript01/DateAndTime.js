// Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate); 


// let CreateDate = new Date(2024,0,3);
// let CreateDate = new Date(2024,3,3,5,5);
//   let CreateDate = new Date("01-14-2024");
let CreateDate = new Date("2024-01-14");
//console.log(CreateDate.toLocaleString());
 


// let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(CreateDate.getTime());


// let timeStamp = Date.now();
// console.log(Math.floor(timeStamp/1000));


let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());


console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));

