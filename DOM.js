/**DOM selectors
 * find element by ID
 * find element by Tag Name
 * find element by Class Name
 * find element by CSS Selectors
 * find element by Collection
 */

let myIntro = document.getElementById("p1");
let myExperts = document.getElementById("p2");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("pre","pre");
console.log(myIntro);

console.log(myExperts);

console.log(myTagElement[1]);

console.log(myClassElement);

let mySubmit = document.getElementById("submit");

mySubmit.onclick = function(){
    return myTagElement[2].innerHTML ="Registration is successful"
};

let myQueryElement = document.querySelector(".js");
console.log(myQueryElement);

let myImagesQuery = document.querySelectorAll(".images");
console.log(myImagesQuery);

myQueryElement.textContent = "This has changed from <span>Main.js</span> File"; //This will print it including span

myQueryElement.innerHTML = "This has changed from <span>Main.js</span> File";//This will print without span


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
}
