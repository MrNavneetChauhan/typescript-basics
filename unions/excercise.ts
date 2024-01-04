// Task1

// Create a variable called highScore that can be a number OR a boolean

let highScore: number | boolean = 121;

// Task2

// Create an array called stuff //
// it can be array of numbers OR an array of strings //
// it cannot be an array of numbers and strings (mixed together)

let stuff1: (number | string)[] = []; // here in the array we can put mixed data types so this is not a correct solution.
stuff1.push(1);
stuff1.push("helo");

const stuff3: number[] | string[] = [];

// Task3 //

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// Task4 //
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// Task5 //
type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};


const mixArr:(RGB|HSL)[] = [];

// Task6

// Write a function called greet that accepts a single string or an array of strings //
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format //

function greeting(prop:(string | string[])){
    if(typeof prop === "string")console.log(`Hello, ${prop}`);
    else{
        prop.map((item)=>{
            console.log(`Hello, ${item}`)
        })
    }
}   

greeting("Navneet");
greeting(["Person1","Person2","Person3"])