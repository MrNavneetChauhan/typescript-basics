// Task 1
// Create an empty array of numbers called "ages" //
var ages1 = [];
var ages2 = [];
// Task2
// Create an array variable called gameBoard that starts as an empty array. //
// It shoud be typed to hold a 2 dimensional array of strings.
var gameBoard = [];
gameBoard.push(["one", "two"]);
console.info("gameBoard", gameBoard);
//  Task4
function getTotal(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        sum += item.price;
    }
    return sum;
}
var products = [
    { name: "pant", price: 1244 },
    { name: "shirt", price: 1100 },
    { name: "shorts", price: 800 },
    { name: "tshirt", price: 788 },
];
var total = getTotal(products);
console.info("total", total);
// let 's try to use different approach //
function anotherTotal(arr) {
    var total = arr.reduce(function (accumulator, currentValue) { return (accumulator + currentValue.price); }, 0);
    return total;
}
var total2 = anotherTotal(products);
console.info("total2", total2);
