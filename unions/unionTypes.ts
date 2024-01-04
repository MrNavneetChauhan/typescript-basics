// What if a variable consist of more then one data type //
// then union comes into picture, and plays vital role. //

let age: number | string | boolean = 21; // not a good practice,should avoid this type of syntax,however if it is the last choice, can use it.
age = 23;
age = "24";
age = true;

// we can also do the same with custom types as well -> for example : //

type Param = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};


let coordinates:Param | Loc = {x : 1,y : 34};
coordinates = {lat:23,long:34}
coordinates = {lat:23,x:2,long:34}

// coordinates = {lat:23,x:3} // this syntax is invalid //

// both are valid
