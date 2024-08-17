/** for loop 
for (let i = 0; i <10; i++) {console.log(i);}
*/

let myList = [1,2,"Ahmed","Sayed","Talib","Osman","Mohammed",33,50,"Ali"];

let newList =[];

for ( i = 0;  i < myList.length; i++) {
    if ( typeof myList[i] === "string" ) {
        newList.push(myList[i]);
    }
}

console.log(newList);

