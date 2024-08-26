/**DOM [Create Elements]
 * createElement
 * createComment
 * createTextNode
 * createAttribute
 * appnedChild
 */

for(let i = 0; i < 100; i++) {
    // Create new div element
    let divElement = document.createElement("div");
    divElement.className = "product";
    
    // Create and style heading
    let headingElement = document.createElement("h3");
    headingElement.style.color = "blue";
    headingElement.style.fontFamily = "Arial, Helvetica, sans-serif";
    headingElement.style.fontSize = "25px";
    let headingText = document.createTextNode("Product");
    headingElement.appendChild(headingText);
    
    // Create paragraph element
    let paragElement = document.createElement("p");
    let paragText = document.createTextNode("Samsung Galaxy S25");
    paragElement.appendChild(paragText);
    
    // Create pre element for price
    let preElement = document.createElement("pre");
    let preText = document.createTextNode("price: $1350");
    preElement.appendChild(preText);
    
    // Append all elements to the div
    divElement.appendChild(headingElement);
    divElement.appendChild(paragElement);
    divElement.appendChild(preElement);

    //Chnage the backgrund color
    if (i%2 === 0) {
        divElement.style.backgroundColor = "skyblue"
    }
    else  {
        divElement.style.backgroundColor = "rgb(220, 255, 220)"
    }
    // Append the div to the body
    document.body.appendChild(divElement);
}

