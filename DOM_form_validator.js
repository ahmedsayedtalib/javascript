/** DOM [events]
 * Validate form practice
 * prevent default
 */

document.links[0].onmouseenter = function (event) {
    console.log(event)};

document.links[0].onclick = function(event) {
    console.log("Why google? You no like me?");
    event.preventDefault();
};
let formUserName = document.getElementById("username");
let formEmail = document.getElementById("email");
let formPassword = document.getElementById("password");
let formPre= document.getElementsByTagName("pre");
let userPre = document.createTextNode("* Enter a username");
let emailPre = document.createTextNode("* Enter a valid email address");
let passwordPre = document.createTextNode("* Enter a valid password");

document.forms[0].onsubmit = function (event){

    if(formUserName.value === ""){
        event.preventDefault();
        formUserName.style.backgroundColor = "coral";
        formPre[0].style.color = "red";
        formPre[0].appendChild(userPre);
    } else if(formEmail.value === "") {
        event.preventDefault();
        formEmail.style.backgroundColor = "coral";
        formPre[1].style.color = "red";
        formPre[1].appendChild(emailPre);
    } else if(formPassword.value === "" || formPassword.value.length < 8) {
        event.preventDefault();
        formPassword.style.backgroundColor = "coral";
        formPre[2].style.color = "red";
        formPre[2].appendChild(passwordPre);
}};
    /**ChatGPT Code:-
     * document.links[0].onmouseenter = function(event) {
    console.log(event);
};

document.links[0].onclick = function(event) {
    console.log("Why google? You no like me?");
    event.preventDefault();
};

let formUserName = document.getElementById("username");
let formEmail = document.getElementById("email");
let formPassword = document.getElementById("password");
let formPre = document.getElementsByTagName("pre");

let userPre = document.createTextNode("* Enter a username");
let emailPre = document.createTextNode("* Enter a valid email address");
let passwordPre = document.createTextNode("* Enter a valid password");

// Validate inputs as the user types
formUserName.oninput = function() {
    if (formUserName.value !== "") {
        formUserName.style.backgroundColor = "lightgreen";
        formPre[0].textContent = "";  // Clear error message
    } else {
        formUserName.style.backgroundColor = "coral";
        formPre[0].style.color = "red";
        formPre[0].textContent = userPre.textContent;
    }
};

formEmail.oninput = function() {
    if (formEmail.value !== "") {
        formEmail.style.backgroundColor = "lightgreen";
        formPre[1].textContent = "";  // Clear error message
    } else {
        formEmail.style.backgroundColor = "coral";
        formPre[1].style.color = "red";
        formPre[1].textContent = emailPre.textContent;
    }
};

formPassword.oninput = function() {
    if (formPassword.value !== "" && formPassword.value.length >= 8) {
        formPassword.style.backgroundColor = "lightgreen";
        formPre[2].textContent = "";  // Clear error message
    } else {
        formPassword.style.backgroundColor = "coral";
        formPre[2].style.color = "red";
        formPre[2].textContent = passwordPre.textContent;
    }
};

// Final validation on form submission
document.forms[0].onsubmit = function(event) {
    if (formUserName.value === "") {
        event.preventDefault();
        formUserName.style.backgroundColor = "coral";
        formPre[0].style.color = "red";
        formPre[0].textContent = userPre.textContent;
    }

    if (formEmail.value === "") {
        event.preventDefault();
        formEmail.style.backgroundColor = "coral";
        formPre[1].style.color = "red";
        formPre[1].textContent = emailPre.textContent;
    }

    if (formPassword.value === "" || formPassword.value.length < 8) {
        event.preventDefault();
        formPassword.style.backgroundColor = "coral";
        formPre[2].style.color = "red";
        formPre[2].textContent = passwordPre.textContent;
    }
};

     * 
     */

