/** products practice
*/

let product = ["Keyboard","Mouse","Laptop","Switch","Router","Firewall"];
let color = ["Blue","Green","Red","Yellow"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {

    document.write(`<div>`);
    document.write(`<h3>${i+1}- ${product[i]}</h3>Available colors:-<br>`);

    for (let c = 0; c <color.length; c++) {
        document.write(`<p>${color[c]}</p>`);
        document.write(color.join("||"));
    }
    document.write(`</div>`);
}   
