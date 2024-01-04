// Task1
// Create a variable called highScore that can be a number OR a boolean
var highScore = 121;
// Task2
// Create an array called stuff //
// it can be array of numbers OR an array of strings //
// it cannot be an array of numbers and strings (mixed together)
var stuff1 = []; // here in the array we can put mixed data types so this is not a correct solution.
stuff1.push(1);
stuff1.push("helo");
var stuff3 = [];
var mixArr = [];
// Task6
// Write a function called greet that accepts a single string or an array of strings //
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format //
function greeting(prop) {
    if (typeof prop === "string")
        console.log("Hello, ".concat(prop));
    else {
        prop.map(function (item) {
            console.log("Hello, ".concat(item));
        });
    }
}
greeting("Navneet");
greeting(["Person1", "Person2", "Person3"]);
