const myArray =["js","java","cpp","ruby"]
// myArray.forEach( (value)=>{
//     console.log(value);
// });


// function printme(item){
//     console.log(item);
// }
// myArray.forEach(printme)


// myArray.forEach( (item, index,arr)=>{
//         console.log(item," ",index," ",arr);
        
// })


const myCoding  =[
    {
        language :"java",
        languageFileName:"java"
    },
    {
        language :"C++",
        languageFileName:"cpp"
    },
    {
        language :"JavaScript",
        languageFileName:"js"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.language);
    console.log(item["languageFileName"])
    
} )