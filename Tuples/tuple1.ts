/*

*** Tuples *** 
Tuples are a special type exclusive to Typescript (they don't exist in JS.)

Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.
*/

// Creating a Tuple with its type definition 

type tuple1 = [number,string];

const myArr:tuple1 = [2,"he"];
// or in other way we can do like :-//

const myArr2:[number,number,string] = [1,2,"Hi"];

