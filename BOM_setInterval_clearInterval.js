/**BOM [Browser Object Model]
 * setInterval(function, timeout, additional params)
 * clearInterval(identifier)
 */


let div = document.querySelector("div");


let countdown = function() {

    div.innerHTML -=1;

if (div.innerHTML === "0") {
    clearInterval(counter);
}
}

let counter = setInterval(countdown,1000);

/*<!DOCTYPE html>
<html lang="en-ar">

<head>
    <link rel="stylesheet" href="index.css">
    <title>AhmedSayed Personal Website</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>



<body style="height: 5000px">
<div>5</div>







    
<script src="main.js"></script>
</body>
</html>

 * */
