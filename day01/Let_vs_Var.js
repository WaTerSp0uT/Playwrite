/**
 * 
 * Let can be declared only once
 */

let school = "Horward";

console.log(school);

let school1 = "Doger";

//This example will throw an error, let -> can be used onl with in the same block.
// Here it is not reachable with-in the block
if (true){
    let a =200;
}
//console.log(a);

console.log("====================================");
// Var can be duplicated

var country = "Japan";
var country = 'Ukraine';

console.log(country);
console.log("====================================");

// Var can be reachable outside the block
if (true){
    var a =200;
}
console.log(a);