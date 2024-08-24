/* Reduce
- Longest Word
- Remove Characters + Use Reduce
*/
let theBiggest = ["Bla","Propaganda","Other","The GodFather Triology","AAA","Battery","Test","Pragnannandha"];
let removeChars = ["A","@","@","H","M","@","@","E","D","@"];

let newBiggest = theBiggest.reduce(function(acc,current){ // reduce function elements are(accumulator,current,index,array)
return acc.length > current.length ? acc : current ;
});
console.log(newBiggest);


let noChars = removeChars.filter(function(nC){
    return nC !== "@";

}).reduce(function(acc,curr){
    return acc+curr;
});

console.log(noChars);
