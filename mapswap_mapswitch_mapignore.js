/** Map
 * Swap cases
 * Inverted numbers
 * Ignore boolean value
*/

let swappingCases = "aHMED";
let invertedNumbers = [1,-10,-20,15,100,-30];
let ignoreNumbers = "Ahm321ed777Saye345d1986";


let sw = swappingCases.split("").map(function(ele) {
    return  ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");

console.log(sw);
///////////////////////////////////////////////////////////////////////////////////

let inv = invertedNumbers.map(function (i) {
    return -i;
});
console.log(inv);
///////////////////////////////////////////////////////////////////////////////////

let ign = ignoreNumbers.split("").map(function(ele){
return isNaN(parseInt(ele)) ? ele : "";

}).join("");
console.log(ign);
 
