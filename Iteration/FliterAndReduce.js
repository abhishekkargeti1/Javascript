// const coding =["js","java","c++"]
// const value = coding.forEach( (item)=>{
//     // console.log(item);
//     return item
// } )

// // console.log(value);

// // ForEach Will Not return Any thing



// // map returns an array 
// const value1 = coding.map( (item)=>{
//         return item
// } )
// // console.log(value1);






// // Filter
// const myArray = [1,2,3,4,5,6,6]
// // const value2 = myArray.filter((num) => num > 3)
// const value2 = myArray.filter((num)=>{
//     return num>4
// })
// // console.log(value2);

// const bookCollection =[

// {
//     tittle :"Book1",
//     genre:"History",
//     publish:2002
// },
// {
//     tittle :"Book2",
//     genre:"Funny",
//     publish:2009
// },
// {
//     tittle :"Book4",
//     genre:"History",
//     publish:2010
// },
// {
//     tittle :"Book5",
//     genre:"Non-Fiction",
//     publish:2012
// },
// {
//     tittle :"Book6",
//     genre:"Science",
//     publish:2001
// }]


// let bookValue = bookCollection.filter( (item)=>{
//     return item.genre === "History"
// } )

// bookValue = bookCollection.filter( (item) => item.publish >=1992 && item.genre === "History" )
// console.log(bookValue);

// const myArray =  [1,2,3,4,5,7,6]

// const arr =myArray.map( (item)=>{
    //      return  item +=1
    // } )
    
    // console.log(arr);
    
    // const myArray =  [1,2,3,4,5,7,6]
    
    
    // const newNUm = myArray.map( (item)=>{ 
    //     return item*10
    // } ).map( (item)=>{
    //     return item +1
    // } ).filter( (item)=>{
    //     return item>=40
    // } )
    // console.log(newNUm);
    
    
    
    
    // Reduce 
    
    

    let arr = [1,2,3,4,5,6]

    let startValue =0
    // const result = arr.reduce( (number,currentValue)=>{
    //         return number+currentValue
    // } ,startValue)


    const result = arr.reduce( function (acc, currValue){
            console.log(`ACC ${acc} and CurrValue ${currValue}`);            
                return acc+currValue
    } ,0)
    console.log(result);
    