/**DOM [CSS]
 * Style
 * cssText
 * removeProperty(propertyName) [inline, stylesheet]
 * setProperty(propertyName, value, priority)
 */

let element = document.getElementById("my-div");


element.style.color = "blue";
element.style.fontStyle = "italic";
element.style.fontWeight = "bold";
element.style.fontSize = "40px";

element.style.cssText = "font-size: 35px; color: green; text-align: center; opacity: 0.9";
element.style.removeProperty("color"); //removes color from inline property (HTML code).
element.style.setProperty("color","green","important");// important sets a flag and a priority.

console.log(document.styleSheets[0].cssRules);


document.styleSheets[0].rules[0].style.setProperty("background-color","skyblue","important");
