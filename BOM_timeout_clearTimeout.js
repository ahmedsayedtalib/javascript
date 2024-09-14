/**BOM [Browser Object Model]
 * setTimeout(function, timeout, additional params)
 * clearTimeout(identifier)
 */


/*setTimeout(function(){
    console.log("Message from timeout");
},3000); //after 3000 milliseconds( 3 seconds);*/

let counter = setTimeout(sayMsg,3000);

function sayMsg () {
    console.log(`I am message from timeout`);
};

//setTimeout(sayMsg,30000,"Ahmed",38);

let button = document.createElement("button");
button.setAttribute("style","width:70px;height:60px");
button.append("Stop timeout");
document.body.appendChild(button);
button.onclick = function () {
    clearTimeout(counter); // the timeout is 3 sec, if this button is clicked before 3 sec. it will stop the
    //timeout counter therefor the console message will not appear.
};


