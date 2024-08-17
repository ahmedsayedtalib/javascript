/* logical OR ||
-- null + undefined + Any falsy value
-- nullish coalescing operator ??
-- null + undefined
*/


console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean("100"));
console.log(Boolean(null));
console.log(Boolean(undefined));


let price= undefined;

console.log(`The price is $${price || 200}`);
console.log(`The price is $${price ?? 200}`);


