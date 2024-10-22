// const promise1 = new Promise((resolve,reject)=>{
//     // Do Aysnc Task
//     setTimeout(()=>{
//         console.log("Aysnc Task Complete");
//         resolve()
//     },1000)
// } )

// promise1.then(()=>{
//     console.log("Promise Consumed");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task 2 Completed");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Async 2 Resolve");
// })

// const Promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"Abhishek",email:"abhishek.kargeti@gmail.com"})
//     },1000)
// })

// Promise2.then((userDetails)=>{
//     console.log(userDetails);
// })

// const Promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "Abhishek",
//         email: "abhishek.kargeti@gmail.com",
//         password: "1808",
//       });
//     } else {
//       reject("Something Went Wrong");
//     }
//   }, 2000);
// });

// Promise4.then((userDetails) => {
//   console.log(userDetails);
//   return userDetails.username;
// })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((error) => {
//     console.log(error);
//   }).finally(()=>{
//     console.log("The Promise is Either Resolve or Rejected");
//   })
// // console.log(userName);



// const Promise5  = new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//         // console.log("Task Complete");
//              resolve({username: "Abhishek",email: "abhishek.kargeti@gmail.com",password: "1808"})
//         } else{
//             reject("Error Is Occured")
//         } 
//     },1000)
    
// })


// async function consumePromise5(){
//    try {
//     const response = await Promise5
//     console.log(response);
//    } catch (error) {
//         console.log(error);
//    }
// }
// consumePromise5()



// Fetching Data From Api 


// async function getData(){
//     try {
//         const response = await fetch('https://api.github.com/users/abhishekkargeti1')
//     console.log(typeof response);
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getData()


// fetch('https://api.github.com/users/abhishekkargeti1').then((response)=>{
//         const data =  response.json()
//         console.log(typeof data);
//         return data
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//         console.log(error);
// })


async function getData(){
        try{
          const apikey = "2d736546bca0b37a134f1262a91a5a20"
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=966dfd6ec0334ed38c9154806242010&q=Delhi`);
         console.log(typeof response)
         const data = await response.json()
         console.log(typeof data)
         console.log(data)
        }catch(error){
          console.log(error)
        }
       }
       getData()

