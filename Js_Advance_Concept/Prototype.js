// let myName ="Abhishek     "
// console.log(myName.truelength());


let myHero =["Thor","SpiderMan"]
let heroPower ={
    Thor : "hammer",
    SpiderMan : "sling",
    getSpiderPower: function(){
        console.log(`Spider Power is ${this.SpiderMan}`);
    }
}

Object.prototype.abhishek =function(){
    console.log(`Abhishek is Present in All Objects`);
    
}

// heroPower.abhishek()
myHero.abhishek()


Array.prototype.heyAbhishek = function(){
    console.log("Hello World");
    
}
myHero.heyAbhishek()
// heroPower.heyAbhishek()

