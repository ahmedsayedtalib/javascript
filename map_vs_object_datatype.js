/**
Map Data Type
Syntax: new Map(Iterable with key/value)
Map vs Object

Map => does not contain key by default
object => has default key

Map => key can be anything[function,object, or any primitive data types]
object => string or symbol

Map => ordered by insertion
Object => not 100% till now

Map => get items by size
Object => need to do manually

Map => can be directly iterated
Object => not directly and needs to use object.keys() and so on

Map => better performance when add or remove data
Object => low performance when comparing to Map
 */

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

let myNewObject = {
    10: "Number",
    "10": "String"
}

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);


console.log(`This is the object output:-`);
console.log(myNewObject);
console.log(myNewObject[10]);

console.log(`#`.repeat(30));

let myNewMap = new Map ();
myNewMap.set(10, "Number");
myNewMap.set("10","String");
console.log(`This is the map output:-`);
console.log(myNewMap);
console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));




