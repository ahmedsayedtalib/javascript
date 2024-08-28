/**DOM [Class list]
 * classlist
 * length
 * contains
 * item(index)
 * add
 * remove
 * toggle
 */

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("one"));
console.log(element.classList.item("2"));


element.onclick = function () {
    element.classList.remove("one", "two");
    element.classList.replace("show","ahmed");
    element.classList.replace("test","sayed");
    element.classList.add("talib","osman");
    element.classList.toggle("ahmed"); // toggle looks for class named "ahmed", if true it removes it, if false it adds it
};
