/**Block scope [if,switch,for]. block vars are only accessible locally
 * Global scope is accessible from everywhere, whether a function, if, switch or for loop
 */

var x = 10;

if (10 === 10) {
    var x = 50;
}
console.log(x);
///////////////////////////////////////////////////

var y = 10;

if (true) {
    let y = 50;
}

console.log(y);
///////////////////////////////////////////////////////////////////

let num1 = 1;
let num2 = 2;
function calc() {
    result = num1+num2;
    console.log(result);
}
calc();// notice the variables were declared globally, meaning outside the function
///////////////////////////////////////////////////////////////////////////////////////

function calc2(numx,numy) {

    let result = numx+numy;
    return result;
}
console.log(calc2(1,4));
//console.log(numx);// the console will return an error because the variable numx was declared locally(block var)







