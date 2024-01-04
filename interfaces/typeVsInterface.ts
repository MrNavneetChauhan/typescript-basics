// Difference between Type alias and Interfaces //

// Interfaces are used only for object, weather as with type alias we can defined variables, literal types and object etc

// For example //

/* ****** First Difference **** */
//  literal type

type literalExample = "one" | "two" | "three";
const onlyThreeValue:literalExample = "one"

// we can't do the same with interface //



/* ****** Second Difference **** */
// by declaring interface again with same name, we can extend the interface , but can't do the same in type 

// example 

interface para {
    definition : string
}

interface para {
    example : String
}

// here in para interface, both definition and example are added //


/* Third Different */
// in interrface we can use 'Extend keyword' to inherit other interface, but can't do the same, in type alias there is another feautre called as intersect with the help of 'ampersand'

// example 

interface NewPara extends para {

    anotherExample : string
}

// example in case of type alias //

const newObj:para & NewPara  = {
 definition:"this is definition",
 example : "this is example",
 anotherExample: "this is another example"  
}