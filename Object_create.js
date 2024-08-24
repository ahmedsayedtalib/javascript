/*create object with create mode
*/

let user = {
    age: 40,
    doubleAge : function(){
        return this.age * 2; // if user instead of this. the value 80 will be unchangable in the copyObj
    }
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());


let obj = Object.create({}); //empty object created
obj.name = "Ahmed";//a value was added to the object
console.log(obj);
////////////////////////////////////

let copyObj = Object.create(user); // to copy object user to the new copyObj
console.log(copyObj); // will return {}, but if you click on it, it will show the object(user) in the prototype
copyObj.age = 35; // you know that this will update the age only in the copyObj function right?
console.log(copyObj.age);
console.log(copyObj.doubleAge()); // but this will still read from the object user, if we want it to read
// from the new copyObj.age value, we should use (this) when declaring the age in the user's doubleAge func.

let thirdObj = Object.create(copyObj);
thirdObj.age = 65;
console.log(thirdObj);
console.log(thirdObj.doubleAge());

