
function userInfo(userName ="N/A", userAge = "N/A", userSalary = "N/A", show ="Yes", ...userSkills) {

    document.write(`<div>`);
    document.write(`Welcome, ${userName}, `);
    document.write(`You are ${userAge} years old.<br>`);
    document.write(`Expected salary is $${userSalary}, salary after tax is ${userSalary-(userSalary*.30)}<br><br>`);
    document.write(`<h3>Areas of expertise:-</h3>`);
    if (show === "Yes") {
        if (userSkills.length > 1) {
            document.write(`${userSkills.join(" || ")}`);
        } else { 
            document.write("No skills were added yet");

        } }
        else {
        document.write("Skills are hidden");
    }
    
    document.write(`</div>`);
}

 console.log(userInfo("Ahmed",38,6300,"Yes","Network Administration","System Administration","Firewalls",
 "Devops","Database Administration","Programming","Web Design"));



