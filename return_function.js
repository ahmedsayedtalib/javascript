/**Function Return */

function taxes(salary,tax) {
    let salaryTax = salary-(salary*tax);
    console.log(`Your gross salary is ${salary}`);
    console.log(`the tax value is ${tax}`);
    return `Net salary after tax is:- ${salaryTax}`;
}

console.log(taxes(17000,.15));
