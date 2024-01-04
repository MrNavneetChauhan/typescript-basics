/*
*** Union-Narrowing the Type ***
Narrowing the Type is simply doing a type check before working with a value. If your value is a string you may want to use it differently than if you got a number.

Since unions allow multiple types for a value, it's good to check what came through before working with it
*/

function calculateTax(price:number | string, tax : number){
    if(typeof price === "string"){
        price = parseFloat(price.replace("$",""))

    }
    return price * tax
}

calculateTax("$56",234)

// 
const arr1: number[] = [1,2,3,4];
const arr3:any[] = [1,2,3,4,true,"asdf",{}];

const stuff : (number | string)[] = ["das","sadf",1,2];

// Equivalent to //
const stuff2 : number[] | string[] = ["asdf","asdf",1,2] // this will either take all number or all string but not both togther.

// in Arrays //

type Pointer = {
    x : number,
    y : number
}

type Lats = {
    longs: string;
    lat :string
}

const cords:(Pointer | Lats)[] = []; // either they have to follow Pointer type or Lats type, partial will not work //
cords.push({x: 3,y:45});
cords.push({longs:"custom longs",lat:"custom lats"})