/**DOM selectors
 * a fuction to explore images with next and back buttons
 */
let imageClass = document.getElementsByClassName("images");
console.log(imageClass);
let images = ["./logos/cisco.jpg","./logos/juniper.png","./logos/microsoft.png","./logos/redhat.png",
    "./logos/ansible.png","./logos/aws.png","./logos/azure.png","./logos/bash.jpg","./logos/bootstrap.png",
"./logos/checkpoint.png","./logos/paloalto.png","./logos/fortinet1.png"];
let currentIndex = 0;
let nextButton = document.getElementById("button1");
let backButton = document.getElementById("button2");
console.log(nextButton);
let imageElement = document.images[0];

nextButton.ondblclick = function(){
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
};

backButton.onclick = function(){
currentIndex = (currentIndex - 1 + images.length) % images.length;
imageElement.src = images[currentIndex];
};
















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
