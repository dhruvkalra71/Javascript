let score = "33"

console.log(typeof score);
console.log(typeof(score));

let value = Number(score)
console.log(typeof value);
console.log(value);

/*
"33" => 33
"33abc" => NaN
true => 1
false => 0
undefined => NaN
null => 0
*/

let logIn = 1
let boolLogIn = Boolean(logIn)
console.log(boolLogIn);

/*
1 => true
0 => false
"" => false
"name" => true
*/