/**
 * Destructuring
 * -- Destructuring function parameters
 */


const user = {
    theName: "Ahmed Sayed",
    theAge: 39,
    theSkill: {
        Systems: 80,
        Networks: 85,
        DevOps: 70,
        Programming: 40
    }
}


showDetails(user);

function showDetails ({theName:n,theAge:a,theSkill:{Systems:s,Networks:net,DevOps:d,Programming:p}}=user) {
console.log(`your name is ${n}`);
console.log(`your age is ${a}`);
console.log(`Networks:- ${net}`);
console.log(`Systems:- ${s}`);
console.log(`DevOps:- ${d}`);
console.log(`Programming:- ${p}`);
}


