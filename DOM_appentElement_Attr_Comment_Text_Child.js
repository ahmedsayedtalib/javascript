/**DOM [Create Elements]
 * createElement
 * createComment
 * createTextNode
 * createAttribute
 * appnedChild
 */

let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-custom");//+ here we create an attribute to assign it later to an element
let myText = document.createTextNode("Product One");
let styleAttr = document.createAttribute("style");
let myComment = document.createComment("This is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttribute); //+ AttributeNode assigns an already created Attr to the element
myElement.setAttribute("data-custom","Phone");
myElement.setAttributeNode(styleAttr);
myElement.setAttribute("style","color:green;font-size:60px");
myElement.appendChild(myComment); //append the comment to the element
console.log(myElement);

myElement.appendChild(myText); //append the created text to the created element

document.body.appendChild(myElement); // we don't use document.write, instead we use this syntax



