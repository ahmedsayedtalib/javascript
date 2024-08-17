/**Arrow function
 * regular vs arrow [parameter vs no parameter]
 * multiple lines
 */


let print = function() { //anonymous function

    return 2100;
}

console.log(print()); 
//////////////////////////////////////////////////////////////


function print2() { //regular function

    return 2000;
}

console.log(print2());
//////////////////////////////////////////////////////////////


let print3 = _ => 2500; //arrow function, notice the(=>) looks like an arrow,,

console.log(print3()); // there is no return here, 
//////////////////////////////////////////////////////////////


let print4 = (num1,num2)=>num1+num2;/**we must use () if we have more than one parameter
 unlike the print3() example where () is optional*/  
console.log(print4(100,150));



