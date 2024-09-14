/**BOM [Browser Object Model]
 * Introduction
 * window object is the browser window
 * window contain the document object
 * all global variables and objects and fucntions are members of window object
 * Test document and console
 * what can we do with window object?
 * open window
 * close window
 * resize window
 * print document
 * run code after period of time once or more
 * fully control the URL
 * save data inside browser to use later
 * 
 * BOM [alertMsg, confirmMsg, promptMsg]
 */


console.log("Hello, Ahmed");
window.document.title = "Hello, JS";
document.title = "Hello, AhmedSayed";

//window.alert("Hello");

/*let confirmMsg = confirm("Are you sure?");

console.log(confirmMsg); // if ok is pressed, the console will return true. Else if cancel is pressed, the console will return false

if (confirmMsg === true) {
    document.write("Hahahaha");
} else {
    document.write("Why like this???!");
}*/

let promptMsg = prompt("What is your name?");
document.write(`Hello, ${promptMsg}`);



