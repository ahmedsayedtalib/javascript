/**
 * Set Data Type
 * Syntax: new set(iterable)
 * Object to store unique values
 * cannot access elements by index
 * 
 * properties:
 * size
 * 
 * methods:
 * add
 * delete
 * clear
 * has
 */


let myData = [1,1,1,2,3,"A"];
//let myUniqueData = new Set([1,1,1,2,3]);
//let myUniqueData = new Set(myData);
let myUniqueData = new Set();
myUniqueData.add(1).add(2);
myUniqueData.add(3).add(4).add("A");
//myUniqueData.clear();


console.log(myData);
console.log(myUniqueData);
console.log(myUniqueData.size);
console.log(myUniqueData.has("A"));

