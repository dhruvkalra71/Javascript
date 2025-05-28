const id = 53 // Stays constant - Doesn't change
let PersonName = "Dhruv" // Preferrable
var password = "helloWorld" //Don't use
city = "Noida"
let state; //Undefined

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([id, PersonName, password, city, state])
