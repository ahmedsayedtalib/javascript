
/**Higher Order Functions
 * Is a function that accepts functions as parameters and/or returns a function.
 * 
 * Map
 * method creates a new array
 * populated with the results of calling a provided function on every element in the calling array
 * 
 * Syntax map(callBakFunction(Element, Index, Array) { }, thisArg)
 * Element => The current element being processed in the array.
 * Index => The index of the current element being processed in the array.
 * Array => The current Array.
 * 
 * 
 * Notes
 * Map returns a new array
 * 
 * 
 * Examples
 * Anonymous Function
 * Named Function
*/


let myNums = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];

for (let i = 0; i <myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray);
//////////////////////////////////////////////////
//Same idea with map:-

let addSelf = myNums.map(function(element,index,array){
    console.log(`current element => ${element}`);
    console.log(`current index => ${index}`);
    console.log(`current array => ${array}`);
    console.log(`this => ${this}`);

//return element + element;
},10);
