
function userInfo(userName,userAge = "Unknown age") { // we defined"Unknown Age" as the default value of userAge"
    let insurance = 2000;
    let discount = true;
    //userAge = userAge || "Unknown Age";

    if (userAge < 0) {
        console.error(`Are you sure your age is ${userAge}, WOW!!!`);
        return `Age cannot be minus 0. None is faster than light`;
    }
    if (userAge ==="Unknown Age") {
        console.error ("Your must specify your age");
        return;
    }

    if (userAge <= 30 && discount === true) {
        insurance = 2000;
    } else if (userAge > 30 && userAge <= 50 ) {
        insurance = insurance+(insurance*.10);
    } else if (userAge > 50 && userAge <=65) {
        insurance = insurance+(insurance*.30);
    } else if (userAge > 65) {
        insurance = "For senior citizens, No fees required";
    }

    return `Hello, ${userName}, you are ${userAge} years old, Your insurance amount is ${insurance}`;
}

console.log(userInfo("Ahmed",30));
