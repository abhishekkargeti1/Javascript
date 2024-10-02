(function fun1(){
    console.log("Db Connected");
})();  // this is name iffe

( () => console.log("Hello World")
)(); // this is normal iffe

( (name) => console.log(`Hello ${name}`)
)("Abhishek")