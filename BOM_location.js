/**BOM [Browser Object Model]
 * location Object
 * href Get / Set [ URL || Hash || File || Mail]
 * host
 * hash
 * protocol
 * reload()
 * replace()
 * assign
 * */

let div = document.querySelector("div");
console.log(location);
console.log(location.href);

//location.href = "https://google.com" changes to link to google.com

console.log(location.hostname);
console.log(location.host);
console.log(localStorage);
console.log(location.protocol);
console.log(location.port);
console.log(location.hash);
location.replace("https://google.com"); //removes the website from history
locaction.assign("https://google.com"); //changes the page on but does not replace in the history
