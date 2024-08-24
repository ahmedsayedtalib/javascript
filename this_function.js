/** function(this) keyword
 * This introduction
 * whit inside object method
 * when a function is called as a method of an object,
 * its this is set to the object the method is called on
 * Global object
 * test vatiables with window and this
 * global context
 * function context
 * search
 * strict mode
 */

console.log(this); //this will return the window because it was called from inside the window
console.log(this === window);

myVar = 100;

console.log(this.myVar);
console.log(window.myVar);

function sayHello () {
    console.log(this);
    return this;
}

sayHello();
console.log(sayHello() === window);

document.getElementById("button").onclick = function (){
    console.log(this);
};
/////////////////////////////////////////////////////////////

let user = {
    name:"Ahmed",
    age: 37,
    ageInDays : function(){
        console.log(this); //this will return the object(user) because it is called from inside the object(user)
        return this.age * 365; // this === user because it is a method inside the object user
    },
}

console.log(user.age);
console.log(age.ageInDays());
