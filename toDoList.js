
let taskDiv = document.querySelector(".taskDiv");
let listDiv = document.querySelector(".listDiv");
let taskButton = document.getElementById("taskButton");
let taskInput = document.getElementById("taskInput");
let listP = document.getElementById("listP");
let listremove = document.getElementById("listRemove");
let inputClass = document.querySelector(".inputClass");



taskDiv.forEach((taskInput.value), () => {


taskButton.addEventListener("click",(e) => {

    if ( taskInput.value > "0") {
    let i = 1 ;
    window.localStorage.setItem(`task ${i}`,taskInput.value);
    listP.append(`${i}) ${taskInput.value}`);
    listDiv.style.backgroundColor = "skyblue";
    listremove.style.display = "inline-block";
    document.body.appendChild(listDiv);
    listDiv.classList.add("addedtask");
    if (listDiv.className === "addedtask") {
    }
} else {
e.preventDefault();
}
})});













/**
 * let taskDiv = document.querySelector(".taskDiv");
let listDiv = document.querySelector(".listDiv");
let taskButton = document.getElementById("taskButton");
let taskInput = document.getElementById("taskInput");
let inputClass = document.querySelector(".inputClass");

taskButton.addEventListener("click", (e) => {
    if (taskInput.value.trim() !== "") {
        // Create a new div for each task
        let newTaskDiv = document.createElement("div");
        newTaskDiv.classList.add("task-item");

        // Set the task content
        let taskContent = document.createElement("p");
        taskContent.textContent = taskInput.value;

        // Create a remove button for the task
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Append the task content and remove button to the new div
        newTaskDiv.appendChild(taskContent);
        newTaskDiv.appendChild(removeButton);

        // Append the new task div to the listDiv
        listDiv.appendChild(newTaskDiv);

        // Store the task in local storage
        let taskCount = localStorage.length + 1;
        localStorage.setItem(`task ${taskCount}`, taskInput.value);

        // Style the listDiv
        listDiv.style.backgroundColor = "skyblue";
        listDiv.classList.add("addedtask");

        // Clear the input field
        taskInput.value = "";

        // Event listener for removing the task
        removeButton.addEventListener("click", () => {
            listDiv.removeChild(newTaskDiv);

            // Remove the task from local storage
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (localStorage.getItem(key) === taskContent.textContent) {
                    localStorage.removeItem(key);
                    break;
                }
            }

            // Hide listDiv if all tasks are removed
            if (listDiv.children.length === 0) {
                listDiv.style.backgroundColor = "transparent";
                listDiv.classList.remove("addedtask");
            }
        });
    } else {
        e.preventDefault(); // Prevent adding an empty task
    }
});























<!DOCTYPE html>
<html lang="en-ar">

<head>
    <link rel="stylesheet" href="index.css">
    <title>AhmedSayed Personal Website</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="index.css">

</head>


<body>
<div class ="taskDiv" style="width:700px;height:150px;background-color:skyblue;display:inline-block;
border: 2px; border-style: solid; border-color: blue; margin-left: 200px; margin-right: auto; margin-bottom: 100px;">
    <p style="text-align: center;margin-top: 0px;color:darkblue;font-size:30px;font-style: italic;">
        To Do List</p>
    <input id="taskInput" class="inputClass"  style="width: 600px;height: 40px;display: inline-block;font-size: larger;
    border-radius: 20px 20px 20px 20px; margin-left: 10px;"
    type="text" placeholder="enter your task here">
    <button id="taskButton" style="background-color: forestgreen;color: aliceblue;width:
    60px; height:40px; border-radius: 20px 20px 20px 20px;display: inline-block;">Add Task</button>

</div>
<div class="listDiv" style="width: 1000px;height: 100px; background-color: white; border-style: solid;border-color: green;
border: 5px; border-radius: 20px 20px 20px 20px; margin-left: auto; margin-right: auto;">
    <p id="listP" style="font-size: larger; color: blue; display: inline-block;"></p>
    <button id="listRemove" style="background-color: red;color: aliceblue;
    width: 70px; height: 40px;border-radius: 20px 20px 20px 20px; display: none; margin-left: 900px;">Remove Task</button>
</div>


<script src="main.js"></script>
</body>
</html>

 */

