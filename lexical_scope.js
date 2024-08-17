/**Lexical scope 
 * search for (google):- execution context && lexical environment for more information
*/

function parent() {
    let a = 10;
    function child() {
        let a = 20;// a was changed from 10 to 20 so output will be 20,
        // if a not declared in the child func. it will return the parent's function value 10.
        console.log(a);
        function grandchild(){
            let a =50; //if a wasnt declared, it will search for child a, if not found=> parent then globally
            console.log(a);
        }
        grandchild();
    }
    child();
}
parent();/* will return 10, because child function can read from parent and globally as well, but parent
function cannot read from child function*/


