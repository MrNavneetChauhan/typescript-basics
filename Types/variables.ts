// Here defining a variable containing string in typescript //
let movieTitle: string = "Amadeus";

// in javascript we can re-assign any data type to variable, but in typescript , once we define data type of variable, then only that data type can be re-assign.

// movieTitle= 2132; // Throwing error as movieTitle is a string //


// ***Number Data Type*** //

// Here defining a variable containing string in typescript //
let numCatLives: number = 1232;
// numCatLives = "string" || 32434  [showing same error] // same cause.

// same with it we can't assign different data type //


// *** Boolean Data Type *** //

let gameOver: boolean = false;

// gameover = "string" [showing error] // same cause //.


// Type Inference //
let rememberAnnotation = "Amazintg";
// rememberAnnotation = 39847; [Showing error]//

// So above as rememberAnnotation has stored a string value, thus typscript automatically remember it's data type and will throw error, if got different data type on re-assign. this process called as Type inference //

// 'Any' Data type //

let thing: any = "string";
thing = 329487349;
thing = true;
thing = {};
thing=[];
thing(); // not even defined it as function expression, still not shwoing error //
thing.toUpperCase(); // at line 37, thing is an empty array
thing.navneet(); // here it is not even throwing error for wrong method.

// So any should be the last case, not a  good to use.//
