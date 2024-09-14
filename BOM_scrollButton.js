/**BOM [Browser Object Model]
 * practice => Scroll to Top
 * scrollX [Alias => Page XOffset]
 * scrollY [Alias => PageYOffset]
 * */

let button = document.querySelector("button");


window.onscroll = function() {
    if (window.scrollY >= 1000) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
    console.log(`scrolling ${window.scrollY}`);
    console.log(`scrolling ${window.scrollX}`);
};

button.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
};

/*<!DOCTYPE html>
<html lang="en-ar">

<head>
    <link rel="stylesheet" href="index.css">
    <title>AhmedSayed Personal Website</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>



<body style="height: 5000px; width: 5000px;">

    <button style="width: 80px; height: 60px;background-color: blue;color: beige; display: none; position:fixed;
    border-radius: 20px 20px 20px 20px;cursor:pointer;bottom: 20px;right: 20px;">Scroll to top</button>







    
<script src="main.js"></script>
</body>
</html>
*/
