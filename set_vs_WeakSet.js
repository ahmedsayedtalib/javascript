/**
Set vs WeakSet:-
"The WeakSet is weak, meaning refrences to objects in a WeakSet are held weakly.
If no other refrences to an object stored in the WeakSet exists, those objects can be collected."

Set  => Can store data values
WeakSet => collection of objects only

Set => has a size property
WeakSet => does not have a size property

Set => has keys, values, Entries
WeakSet = > does not have clear, keys, values and entries

Set => can use forEach
WeakSet => cannot use forEach

UsageL store objects and removs them once they become inaccesible
 */

let mySet = new Set([1,1,1,2,3,"A","A"]);
console.log(mySet);

let iterator = mySet.values();

// Values + Keys Alias
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());


// Size
console.log(`size of elements inside Set is: ${mySet.size}`);

// forEach
console.log(`#`.repeat(30));

mySet.forEach((el) => console.log(el));
console.log(`#`.repeat(30));



// Type of Data my WaekSet
// let myWs = new WeakSet([1,1,1,2,3,"A","A"]); #will not work because WeakSet expects an object 
let myWs = new WeakSet([{A:1, B:2}]);
console.log(myWs);



