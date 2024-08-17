/**Functions:
 * Rest parameters
 * Only one allowed
 * Must be last element 
 *  */

function calc(...numbers) { // rest parameter starts with ... and accept as much values as you input
    let result = 0;

    console.log(Array.isArray(numbers))

    for (let i = 0; i < numbers.length; i++) {
        console.log(`${numbers[i]}`);

        result += numbers[i];
    }
    console.log(`the sum of the array is:-`);
    return result;
    
}

console.log(calc(1,2,4,30,44,144));

