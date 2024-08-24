/*forEach
---- a method that executes a provided function once for each array element.

Syntax forEach(callBackFunction(element, index, array){}, thisArg)
Element => The current element being processed in the array.
Index => The index of the current element being processed in the array.
Array => The current array.

Note
--Does not return anything [undefined]
-- break will not break the loop
*/

let AllLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

AllLis.forEach(function(ele){
ele.onclick = function (){
    AllLis.forEach(function(ele){
        ele.classList.remove("active");
    });
    this.classList.add("active");
    allDivs.forEach(function(ele){
ele.style.display = "none";
    });
};

});


console.log(AllLis);
