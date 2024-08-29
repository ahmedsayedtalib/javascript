/**DOM [Cloning]
 * cloneNode(Deep: true of false) false is default
 * */
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP}-clone`;

myDiv.appendChild(myP);

console.log(myP);







/**<!DOCTYPE html>
<html lang="en-ar">

<head>
    <link rel="stylesheet" href="index.css">
    <title>AhmedSayed Personal Website</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>



<body style="height: 5000px">

    <p id="my-p" class="my-p">This is <span>P</span></p>
    <div>Div</div>







<script src="main.js"></script>
</body>
</html>
 */

