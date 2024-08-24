/**DOM [Get/Set elements contenc and attributes]
 * InnerHtml
 * textContent
 * Change attributes directly
 * change attributes with methods
 * getAttribute
 * setAttribute
 * 
 * Search
 * innerText
 */

let jsClass = document.querySelectorAll(".js");
console.log(jsClass);
jsClass[0].innerHTML = "Hello from js innerHTML";

let navLinks = document.getElementsByTagName("li");
navLinks[0].setAttribute("href","courses.html");
console.log(navLinks);
console.log(navLinks[0]);
console.log(navLinks[1]);
console.log(navLinks[2]);
console.log(navLinks[3]);

navLinks[0].setAttribute("href","courses.html");
navLinks[0].setAttribute("target","_blank");
console.log(navLinks[0].getAttribute("href"));





























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
