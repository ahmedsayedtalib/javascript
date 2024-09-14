/**BOM [Browser Object Model]
 * stop()
 * print()
 * focus()
 * scrollTo(x, y || options)
 * scroll(x, y || options)
 * scrollBy(x, y || options)
 * */

// let myWindow = window.open("https://google.com","_blank","width=400,height=400");

//window.scrollTo(0,700);

//window.scroll(0,700);

//window.scrollBy(0,2000);

let body = document.querySelector("body");
body.style.width = "5000px";
body.style.height = "5000px";

window.scrollTo({
    left: 1500,
    top: 1500,
    behavior: "smooth"
})
