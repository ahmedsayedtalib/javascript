/** LOOP CONTROL:- Break, CONTINUE,LABEL
*/

let products = ["Keyboard","Mouse","Laptop","Server",2000,10000,300,"switch","Router","Hub","Firewall"];

let colors = ["Blue","Red","Green","Yellow"];

mainLoop: for (let i = 0; i < products.length; i++) { //mainLoop is declared to work as the LABEL
    if (typeof products[i] === "number") { //continue
        continue; }
        console.log(`#${products[i]}`);
        for (let j = 0; j < colors.length; j++) {
            console.log(`-${colors[j]}`);
            if(colors[j] === "Red") {
                break mainLoop; // This Label will break the code after the first "Red" color shows.
            }
        }
    }
