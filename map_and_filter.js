/** Filters
 * method creates a new array
 * with all the elements that pass the test implemented by the provided function
 * 
 * Syntax filter(callBackFunction(element, index, array) {}, thisArg)
 * Element => the current element being oricessed in the array
 * Index => the index of the current element being processed in the array
 * Array => the current array
*/

//Get friends with names start with A
let friend = ["Ahmed","Omer","Ali","Ahmed","Khalid","Mohammed"];

let filterFriends = friend.filter(function(el){
return el.startsWith("A");
});
console.log(filterFriends);



// Get even numbers only
let numbers = [1,2,3,4,5,6,7,8,9];

//Test map vs filter
let addMap = numbers.map(function(ele){
    return ele + ele;
});
console.log(addMap);

let addFilter = numbers.filter(function(ev){
return ev % 2 === 0;
});

console.log(addFilter);
