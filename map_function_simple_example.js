////Map function simple example:-

let myNums = [1,2,3,4,5,6,7,8,9];
let newArray = [];

for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i]+myNums[i]);
};

console.log(newArray);
//////////////////////////////////////////////////////////

//MAP FUNCTION:-
let addSelf = myNums.map(function(element,i,a){//map function consists of(element,index,array).element is mandatory, index and array are not

    return element + element;
});
    
console.log(addSelf);
///////////////////////////////////////////////////////////

let thirdWay = myNums.map((a) => a + a);
console.log(thirdWay);
