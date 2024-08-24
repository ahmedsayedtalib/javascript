/* Reduce
A method that executes a reduce function on each element of the array resulting in a single output value.

Syntax
reduce(callBackFunc(Accumulator, current value, current index, source array){}, intialValue)
Accumulator => the accumulated value previously returned in the last invocation.
current value => the current element being processed in the array
index => the index of the current element being processed in the array.
-------- starts from index 0 if an initialValue is provided.
-------- otherwise, it starts from index 1.
Array => the current array.
*/

let nums = [10,20,15,30];
let add = nums.reduce(function(accumulator,current,index,array){
    console.log(`accumulator is => ${accumulator}`);
    console.log(`current is => ${current}`);
    console.log(`index is =>${index}`);
    console.log(`array is =>${array}`);
    console.log(accumulator+current);
    console.log(`#############################`);
    return accumulator + current;
},5); //5 is an intial value of the accumulator.
// if not inserted, the accumulator initial value will start from the value in index 0
// and the current will start from index 1, but now that we inserted it, the accumulator will take it as a 
// start value, and the current will start from index 0.

console.log(add);
