

let myAdmins = ["Ahmed","Mohamed","Sayed","Talib"];
let myEmployees = ["Ali","Khalid","Omer","Abdulrahman","Abdullah","Osama","Ammar","Anas"];
let adminCount = 0;
let employeeIndex = 0;

for (let i = 0; i < myAdmins.length; i++) {
    document.write(`<div>`);
    document.write(`<h3>The Admin for team ${adminCount+1} is ${myAdmins[i]}</h3><h4>Employees:</h4>`);
    adminCount++;

    // List only 2 employees per admin
    for (let e = 0; e < 2; e++) {
        if (employeeIndex < myEmployees.length) {
            document.write(`<p>${e+1}-${myEmployees[employeeIndex]}</p>`);
            employeeIndex++;
        }
    }

    document.write(`</div><hr>`);
}


