/**Objects:-
 * dot notation vs bracket notation
 * dynamic property name
 */


let myVar = "country"; //dynamic property name (must be accessed via bracket notation)

let uName = {
    name: "Ahmed Sayed",
    email: "ahmedsayed@abc",
    phone: 0302234392,
    country: "Sudan",
    greet : function() {
        return (`Hello, ${uName.name}`);
    }
};

console.log(uName.name);
console.log(uName.greet());
console.log(uName.country);
console.log(uName[myVar]); //bracker notation for dynamic property name


