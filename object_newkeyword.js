/**Object
 * Create with new keyword new object()
 */

let user = {
    name:"Ahmed",
    age:38
};


console.log(user);

user.name = "Ali"; // this is the new keyword way of creating objects.
user["country of presence"] = "Sudan";

console.log(user.name);
console.log(user["country of presence"]);

user.sayhello = function () {
    return `Hello, ${user.name}`;
}

console.log(user.sayhello());


