/**BOM */

let formDiv = document.createElement("div");
let form = document.createElement("form");
let formUserName = document.createElement("input");
let formEmail = document.createElement("input");
let formPassword = document.createElement("input");
let formUsernameLabel = document.createElement("label");
let formEmailLabel = document.createElement("label");
let formPasswordLabel = document.createElement("label");
let formBr1 = document.createElement("br");
let formBr2 = document.createElement("br");
let formBr3 = document.createElement("br");
let formBrUserName = document.createElement("br");
let formBrEmail = document.createElement("br");
let formBrPassword = document.createElement("br");
formPassword.setAttribute("type","password");

let formSubmit = document.createElement("input");
formSubmit.setAttribute("value", "Submit");
formSubmit.setAttribute("type", "submit");
formSubmit.setAttribute("style", "background-color: green;margin-top:10px;margin-right:10px;color:white;width:60px;height:50px;border-radius:20px 20px 20px 20px");

let formCancel = document.createElement("input");
formCancel.setAttribute("value", "Cancel");
formCancel.setAttribute("type", "reset");
formCancel.setAttribute("style", "background-color: red;margin-top:10px;margin-right:10px;color:white;width:60px;height:50px;border-radius:20px 20px 20px 20px");

formDiv.appendChild(form);
form.appendChild(formUsernameLabel);
form.appendChild(formBrUserName);
form.appendChild(formUserName);
form.appendChild(formBr1);
form.appendChild(formEmailLabel);
form.appendChild(formBrEmail);
form.appendChild(formEmail);
form.appendChild(formBr2);
form.appendChild(formPasswordLabel);
form.appendChild(formBrPassword);
form.appendChild(formPassword);
form.appendChild(formBr3);
form.appendChild(formSubmit);
form.appendChild(formCancel);

formUsernameLabel.textContent = "Username";
formEmailLabel.textContent = "Email Address";
formPasswordLabel.textContent = "Password";

form.style.marginLeft = "40px";
form.style.marginTop = "50px";

document.body.appendChild(formDiv);

window.onload = function () {
    formUserName.focus();
};

formUserName.onfocus = function () {
    formUserName.style.backgroundColor = "grey";
};

formUserName.onblur = function () {
    if (formUserName.value.length >= 5) {
        formUserName.style.backgroundColor = "green";
        formUserName.style.color = "white";
        formUsernameLabel.textContent = "Username"; // Reset label text
    } else {
        formUserName.style.backgroundColor = "red";
        formUsernameLabel.textContent = "Enter a valid username with at least 5 characters";
    }
};

formEmail.onblur = function () {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(formEmail.value)) {
        formEmail.style.backgroundColor = "green";
        formEmail.style.color = "white";
        formEmailLabel.textContent = "Email Address"; // Reset label text
    } else {
        formEmail.style.backgroundColor = "red";
        formEmailLabel.textContent = "Enter a valid email below";
    }
};

formPassword.onblur = function () {
    if (formPassword.value.length >= 8 &&
        /[a-z]/.test(formPassword.value) && // Check for lowercase letters
        /[A-Z]/.test(formPassword.value) && // Check for uppercase letters
        /\d/.test(formPassword.value) &&    // Check for numbers
        /[!@#$%^&*(),.?":{}|<>]/.test(formPassword.value)) { // Optional: Check for special characters

        formPassword.style.backgroundColor = "green";
        formPassword.style.color = "white";
        formPasswordLabel.textContent = "Password"; // Reset label text
    } else {
        formPassword.style.backgroundColor = "red";
        formPasswordLabel.textContent = "Enter a password that has at least 8 characters, includes uppercase letters, lowercase letters, special characters, and numbers";
    }
};

// Validate form before submission
form.onsubmit = function (event) {
    let isValid = true;

    if (formUserName.value.length < 5) {
        formUserName.style.backgroundColor = "red";
        formUsernameLabel.textContent = "Enter a valid username with at least 5 characters";
        isValid = false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formEmail.value)) {
        formEmail.style.backgroundColor = "red";
        formEmailLabel.textContent = "Enter a valid email below";
        isValid = false;
    }

    if (!(formPassword.value.length >= 8 &&
          /[a-z]/.test(formPassword.value) && 
          /[A-Z]/.test(formPassword.value) && 
          /\d/.test(formPassword.value) &&    
          /[!@#$%^&*(),.?":{}|<>]/.test(formPassword.value))) {
        formPassword.style.backgroundColor = "red";
        formPasswordLabel.textContent = "Enter a password that has at least 8 characters, includes uppercase letters, lowercase letters, special characters, and numbers";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
};

