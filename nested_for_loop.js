/** Nested for Loops
 * The nested for loop repeats itself according to the root for loop
*/

let products = ["keyboard", "Mouse", "Screen", "Laptop", "Server", "Switch", "Router"];
let color = ["Blue","Red","Green"];
let model = [2020,2021,2022,2023,2024];

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`#${[products[i]]}`)
    console.log("#".repeat(15));

    for (let c = 0; c < color.length; c++) {
        console.log(`-${color[c]}`);

    for ( let m = 0; m < model.length; m++) {
        console.log(`#${model[m]}`);
    }
}}

