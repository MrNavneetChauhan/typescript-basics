// Task 1
// Create an empty array of numbers called "ages" //
const ages1: number[] = [];
const ages2: Array<number> = [];

// Task2
// Create an array variable called gameBoard that starts as an empty array. //
// It shoud be typed to hold a 2 dimensional array of strings.

const gameBoard: string[][] = [];
gameBoard.push(["one", "two"]);
console.info("gameBoard", gameBoard);

// Can we set limit of array, that it contains , only that limit of items //

// Task3

type Product = {
  name: string;
  price: number;
};

//  Task4

function getTotal(arr: Product[]): number {
  let sum: number = 0;
  for (const item of arr) {
    sum += item.price;
  }
  return sum;
}

const products: Product[] = [
  { name: "pant", price: 1244 },
  { name: "shirt", price: 1100 },
  { name: "shorts", price: 800 },
  { name: "tshirt", price: 788 },
];

const total = getTotal(products);
console.info("total", total);

// let 's try to use different approach //

function anotherTotal(arr:Product[]){
    const total = arr.reduce((accumulator,currentValue)=>(accumulator + currentValue.price),0)
    return total;
}

const total2 = anotherTotal(products)
console.info("total2",total2)