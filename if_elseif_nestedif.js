let price =1000;
let discount=true;
let discountprice=price*.35;
let country="Africa";

if (discount===true) {
    if (country==="Sudan") {
        discountprice=price-(price*.75);
    }
    else if (country==="Africa") {
        discountprice=price-(price*.70);     
    } else {
        discountprice=price;
    }
}

console.log(discountprice);

+++++++++++++++++++++++++++++++++++++++++++++++++++
let userName = "Ahmed";
let gender = "Male";
let age = 62;
let price = 2000;
let insurance = true;

console.log(`Hello ${gender === "Male" ? "Mr." : "Mrs."}${userName}, ${age}`);

age > 18 && age < 30 ? console.log(`Adult, Insurance price is $${price}`) : age >=  30 && age <= 40 ? console.log(`Youth, Insurance price is $${price}`) : age > 40 && age <= 60 ? console.log(`Mature, Insurance price is $${price}`) : console.log(`senior, Insurance price is $${price}`);
console.log("Price after discount is:- ");

if (insurance === true)
    {
if (age > 18 && age < 30) {
discountprice= price;
console.log(discountprice);
}
else if (age >=  30 && age <= 40) {
    discountprice= price-(price*.05);
    console.log(discountprice);
}
else if (age >  40 && age <= 50) {
    discountprice= price-(price*.10);
    console.log(discountprice);
}
else if (age >  50 && age <= 60) {
    discountprice= price-(price*.30);
    console.log(discountprice);
}
else {
    discountprice= "free";
    console.log(discountprice);
}}
