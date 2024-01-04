/*
Literal types are not just types - but the values themseleves too!

On it's own, that's not super helpful. But combine it with something like unions and you can have very fine-tuned type options for Typescript to enforce.
*/

// Example of <Literal Types> //
const num:3 = 3;
// here in the above case, you can't put any other value except there as the type is number and value is 3 defined in the type. //

const str:"hi" = "hi";
// here in the above case, you can't put any other value except there as the type is string and value is 'hi' , defined in the type. //

// examples //

const giveAnswer = (answer:"yes" | "no" | "maybe")=>{
    return `The answer is ${answer}`
}

// CAN provide one of the literals in the union //
giveAnswer("no");

// CAN't provide anytihing else //
// giveAnswer("oh boy I'm not sure")  / this will throw error, since we have defined answer can only have three string value.

// another best example of combination of 'literal and union'

type DayOfWeek = "Monday" | "Tuesday" |"Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | false | 0;

let today:DayOfWeek = "Monday" // will only contain these values //
