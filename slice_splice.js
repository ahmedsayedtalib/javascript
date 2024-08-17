/**slice && splice with arrays */


let myList =["Ahmed","Sayed","Talib","Osman","Mohammed"];
/*
console.log(myList);
console.log(myList.slice());
console.log(myList.slice(1,2));
console.log(myList.slice(1,3));
console.log(myList.slice(-1));
console.log(myList.slice(-4));
console.log(myList.slice(0,-1));*/

/////////////////////////////////////////////////////////////////////////////////////////////////

myList.splice(0,0,"Mohamed"); 
/** The splice function removes elements from the array. 
 * the first 1 is the index to start from, the second is the number of elements to be removed from the array 
 * "Mohamed" will be added in the index defined but without removing an elemnt, if you want to remove elemnts,
 * you specify the number of elements to be removed in the second value*/

console.log(myList);

