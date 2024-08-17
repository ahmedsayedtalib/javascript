/*concatenate && join
concat is to add new element to an existing array
join joins all the lists without spaces in an unorganized way*/


let myList =["Ahmed","Sayed","Talib","Osman","Mohammed"];
let newList=["Mohammed","Mo","Jahjah"];
let x =288**2;

console.log(myList.concat(newList,"Mona",[1,2],x));


let allTheLists =myList.concat(newList,"Mona",[1,2],x);

console.log(allTheLists);
console.log(allTheLists.join());
console.log(allTheLists.join("|")); //seperates the array elements with | sign
