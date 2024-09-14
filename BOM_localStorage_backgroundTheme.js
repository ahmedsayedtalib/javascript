// Select all <li> elements and the .experiment div
const lis = document.querySelectorAll("ul li");
const exp = document.querySelector(".experiment");

// Check if there's a saved color in localStorage
const savedColor = window.localStorage.getItem("color");

if (savedColor) {
    console.log("Yes");

    // Change the background color of the .experiment div
    exp.style.backgroundColor = savedColor;

    // Remove the active class from all <li> elements
    lis.forEach((li) => {
        li.classList.remove("active");
    });

    // Add the active class to the <li> element with the saved color
    const activeLi = document.querySelector(`[data-color="${savedColor}"]`);
    if (activeLi) {
        activeLi.classList.add("active");
    }
} else {
    console.log("No");
}

// Add click event listeners to each <li> element
lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        const color = e.currentTarget.dataset.color;

        // Remove the active class from all <li> elements
        lis.forEach((li) => {
            li.classList.remove("active");
        });

        // Add the active class to the clicked <li> element
        e.currentTarget.classList.add("active");

        // Save the selected color to localStorage
        window.localStorage.setItem("color", color);

        // Change the background color of the .experiment div
        exp.style.backgroundColor = color;
    });
});


/*
 * <!DOCTYPE html>
<html lang="en-ar">

<head>
    <link rel="stylesheet" href="index.css">
    <title>AhmedSayed Personal Website</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="index.css">

</head>
<style>
    body {
        background-color: beige;
    }
    ul{
        padding: 0;
        margin: 0;
        background-color: skyblue;
        margin: 20px auto;
        padding: 20px;
        width: 400px;
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
    ul li{
        width: 60px;
        height: 60px;
        border: 2px solid transparent;
        opacity: 0.4;
        cursor: pointer;
        transition: 0.3s;
    }
    ul li.active, ul li:hover {
        opacity: 1;
    }
    ul li:first-child {
        background-color: red;
    }
    ul li:nth-child(2) {
        background-color: green;
    }
    ul li:nth-child(3) {
        background-color: blue;
    }
    ul :nth-child(4) {
        background-color: yellow;
    }
    ul :nth-child(5) {
        background-color: purple;
    }
    .experiment {
        background-color: red;
        width: 600px;
        height: 300px;
        margin: 20px auto;
    }
</style>


<body>
    <ul>
        <li class="active" data-color="red"></li>
        <li data-color="green"></li>
        <li data-color="blue"></li>
        <li data-color="yellow"></li>
        <li data-color="purple"></li>
    </ul>
    <div class="experiment"></div>





<script src="main.js"></script>
</body>
</html>
*/
