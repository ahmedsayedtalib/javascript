/**DOM [Traversing]
 * nextSibling
 * previousSibling
 * nextElementSibling
 * previousElementSibling
 * parentElement
 * */

let span = document.querySelector(".two");
let span3 = document.querySelector(".three");

console.log(span.nextSibling); //this will return the comment because it is the next sibling
console.log(span.nextElementSibling);//this will return the next (Element Only) sibling
console.log(span.parentElement);

span.onclick = function () {
    span.parentElement.style.color = "green";
    span.parentElement.classList.remove("my-div");
    span.parentElement.classList.add("ahmedsayed");
};

span3.onmouseenter = function () {
    span3.parentElement;
};

span3.onmousedown = function () {
    span3.parentElement.appendChild(span);
    span3.parentElement.appendChild(span3);

}




/**
 * <!DOCTYPE html>
<html lang="en-ar">

<head>
    <link rel="stylesheet" href="index.css">
    <title>AhmedSayed Personal Website</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>



<body style="height: 5000px">

    <div id="my-div">
        <span class="one">One</span>
        <!--Comment-->
        <span class="two">Two</span>
        <!--Comment-->
        <span class="three">Three</span>
    </div>
            






<script src="main.js"></script>
</body>
</html>

 */

