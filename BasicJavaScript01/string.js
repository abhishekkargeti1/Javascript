const  name ="Abhishek"
const surname ="kargeti"

// console.log(name+" "+surname);  outdataed syntax

console.log(`My name is ${name} My surname is ${surname}`)


const gamaName =  new String(" Abhi-kargeti ")
console.log(typeof gamaName)
console.log( gamaName[0])

console.log(gamaName.__proto__);
console.log(gamaName.length);
console.log(gamaName.toUpperCase());
console.log(gamaName.toLowerCase());
console.log(gamaName.charAt(3));
console.log(gamaName.charAt(0));
console.log(gamaName.charAt(1));
console.log(gamaName.charAt(2));

console.log(gamaName.indexOf('i'));

let newWord=gamaName.substring(0,3); 
console.log(newWord);// Abh

let newWord1 = gamaName.slice(-12,6)
console.log(newWord1);


let newWord2 = gamaName.trim()
console.log(newWord2);
console.log(gamaName)



const url  = "https://Abhishek.com/Abhishek%20Kargeti"
console.log(url.replace("%20","-"))
console.log(url.includes("Abhishek"))

console.log(gamaName.split("-"));

let newWord4 = gamaName.split("-")
console.log(typeof newWord4);









