/**BOM [Browser Object Model]
 * History API
 * Properties
 * length
 * Methods
 * back()
 * forward()
 * go(Delta) => Position in history
 * 
 * Search for
 * pushstate() + replaceState()
 * */

console.log(history);
console.log(history.length);
console.log(history.forward(2));
console.log(history.back(-3));
console.log(history.go(3));

