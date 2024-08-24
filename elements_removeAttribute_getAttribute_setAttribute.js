/**DOM [check Attributes]
element.attributes
element.hasAttribute
element.hasAttributes
element.removeAttribute
 */


console.log(document.getElementsByTagName("p")[0].attributes);
console.log(document.getElementsByTagName("div")[0].attributes);

let myP = document.getElementsByTagName("p")[0];
let myDiv = document.getElementsByTagName("div")[0];
console.log(myP.hasAttributes());
console.log(myDiv.hasAttributes());

myDiv.setAttribute("class","div");

console.log(myDiv.attributes);
console.log(myDiv.hasAttributes());

if (myDiv.getAttribute("class")==="div"){
    myDiv.setAttribute("class","Puff");
}

console.log(myDiv.attributes);
console.log(myDiv.getAttribute("class"));

if(myDiv.hasAttribute("data-src")=== false) {
    myDiv.removeAttribute("class");
}

console.log(myDiv.attributes);
console.log(myDiv.hasAttributes());


if(myP.getAttribute("data-src")!=="") {
    myP.setAttribute("data-src","AhmedSayed");
}
console.log(myP.getAttribute("data-src"));
