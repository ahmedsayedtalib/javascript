/** DOM [Events]
 * Use events om HTML
 * Use events on JS
 * onclick
 * oncontextmenu
 * onmouseenter
 * onmouseleave
 * 
 * onload
 * onscroll
 * onresize
 * 
 * onfocus
 * onblur
 * onsubmit
 */

let myButton = document.getElementById("button");  
let myFormText = document.getElementById("username");
let mySubmit = document.getElementById("submit");


myButton.onclick = function () {
    myButton.oncontextmenu = 
    myFormText.setAttribute = ("value", "Ahmed Sayed Talib");
    console.log("clicked");
    let buttonPre = document.getElementsByTagName("pre");
    buttonPre[0].createTextNode("Enter a username");
    document.body.appendChild(buttonPre);
};

myFormText.onfocus = function() {
    myFormText.style.backgroundColor = "skyblue";
    let myFormTextPre = document.createElement("pre");
    let myFormTextPreText = document.createTextNode("enter a unique username");
    myFormTextPre.appendChild(myFormTextPreText);
    document.body.appendChild(myFormTextPre);
};

mySubmit.onclick = function(){
    let mySubmitElement = document.createElement("pre");
    let mySubmitElementPre = document.createTextNode("Your data has been submitted successfuly");
    mySubmitElement.appendChild(mySubmitElementPre);
    document.body.appendChild(mySubmitElement);
};

window.onscroll = document.write("Scrolling");
window.onresize = document.write("Resizing");

