// So basically we can have multiple 'Types' and can combined them using '& or ampersand' thus called as intersection, as we can use proeprties of different types in one go.
type Circle = {
    radius : number
}

type Colorful =  {
    color : string
}

// Now i want to make cirlce which is colorful and have both proeprties and all properties of intersected types will be mandatory. therefore: //

type ColorfulCircle = Circle & Colorful;

const happyFace : ColorfulCircle = {
    radius : 5,
    color : "red"
}

// here as radius and color are in different types, but since we are using intersection or ampersand we have to mention both. //


// what if you want to add extra data on intersection type //
// example //

type Cat = {
    numLives : number
}

type Dog = {
    breed : string
}

type CatDog = Cat & Dog & {
    age : number
}

const christy : CatDog = {
    numLives : 2323,
    breed : "german",
    age : 23
}

