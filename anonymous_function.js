/**Anonymous Function
 * calling Named Function vs Anoymous Function
 * Argument to other Function
 * Task without name
 * setTimeout
 */



let calc = function (num1,num2) { // this is the format of anonymous function. 
    //it is a runtime function meaning that it shuld be declared first to work.
    // unlike the normal function where we can console.log(func) before declaring it.
    return num1+num2;
}

document.getElementById("show").onclick = function () {
    console.log("Show");
}

setTimeout(function() {
console.log("Good");
},4000);
