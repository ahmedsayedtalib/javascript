/**BOM [Browser Object Model]
 * Local Storage
 * setItem
 * getItem
 * removeItem
 * clear
 * key
 * 
 * 
 * Info
 * No Expiration Time
 * HTTP and HTTPS
 * Private Tab
 * */

//set
window.localStorage.setItem("color","coral");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

//remove
//window.localStorage.removeItem("color");
//window.localStorage.clear(); //removes all items

//get key
console.log(window.localStorage.key(0)); //return the key of index 0 
console.log(window.localStorage.key(1)); //return the key of index 1
console.log(window.localStorage.key(2)); //return the key of index 2



//set color on the page
document.body.style.backgroundColor = window.localStorage.getItem("color");



//get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage["fontWeight"]);
console.log(window.localStorage.fontSize);
console.log(window.localStorage);
console.log(typeof window.localStorage);


