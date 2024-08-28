/**DOM [Deal with elements]
 * before [element || string]
 * after [element || string]
 * append [ element || string]
 * prepend [ element || string]
 * remove
 * */

let element = document.getElementById("my-div");
let createdP = document.createElement("p");
let createdPre = document.createElement("pre");
let createdPreText = document.createTextNode("Pre text");
createdPre.appendChild(createdPreText);
let createdSpan = document.createElement("span");
let createdSpanText = document.createTextNode("Span text, ");
createdSpan.appendChild(createdSpanText);

element.before("hello from JS"); // before will put this statement before the element

let createdPtext = document.createTextNode("created via JS for createdP, ");
createdP.appendChild(createdPtext);

element.after(createdP);
element.append(createdPre);

createdSpan.setAttribute("style", "color: blue");
element.prepend(createdSpan);

console.log(element.children);

//element.remove();  **removes the element and all it's children




