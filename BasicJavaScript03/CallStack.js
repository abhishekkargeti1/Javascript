// Execution Context

// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Exection Context

    // Two Phase of JavaScript Code 
        // 1. Memory / Creation Phase   // here only memory is Allocated 
        // 2. Exection Phase            // Here the acutal operation take place


 // Example 

 let value1 = 10
 let value2 = 5
 function fun(num1,num2){
    return num1+num2
 }

 let result1 = fun(value1,value2)
 let result2 = fun(10,2)


// 1. Global Exection / Global Enviroment
            // a. this will locate 

// 2. Creation Phase / Memory Phaase
            // a. collecting variable and assign undefined to them 
                // 1. value1 = undefined   
                // 2. value2 = undefined   
                // 3. fun = defination
                // 4. result1 = undefined   
                // 5. result2 = undefined      

// 3. Exection Phase
            // a. assign  actual values to the variable 
                // 1. value1 = 10
                // 2. value2 = 5 
                // 3. let result1 = fun(value1,value2)
                // function create new exection context 
                        // a. create a new variable  enviroment 
                        // b. excetion thread 
                        // c. here step 2 and 3 will repeat because new sandbox is created bu Function
                                // a. Creation Phase / Memory Phaase
                                        // a. collecting variable and assign undefined to them 
                                                // 1. num1 = undefined   
                                                // 2. num2 = undefined
                                //  3. Exection Phase
                                        // a. assign  actual values to the variable 
                                                // 1. num1 = 10
                                                // 2. num2 = 5 
                                // 4. After function completion new Sandbox is deleted


// CallStack 

// 1. Global Exection
 