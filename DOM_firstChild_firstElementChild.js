/** DOM [Deal with children]
 * children
 * childNodes
 * firstChild
 * lastChild
 * firstElementChild
 * lastElementChild
 */


let divElement = document.querySelector("div");
console.log(divElement);

console.log(divElement.children); //returns elements only

console.log(divElement.children[2]);

console.log(divElement.childNodes); // return everything inside a div(elements, texts, comments)

console.log(divElement.childNodes[3]);

console.log(divElement.firstChild); //returns first child (can be comment or any type of child)

console.log(divElement.lastChild);

console.log(divElement.firstElementChild); // returns first child(element only)

console.log(divElement.lastElementChild);

console.log(divElement.textContent);

document.write(divElement.textContent);
