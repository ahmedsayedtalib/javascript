/**
FUNCTIONS
 */

function hello(userName) {
    console.log(`Hello, ${userName}`);
}

hello("Ahmed");


function dateOfBirth(start,end,exclude) {

for (let i = start; i <= end; i++) {
    if (i === exclude) {
        continue;
    }
    console.log(i);

    }
    }

dateOfBirth(1980,2024,2018);

