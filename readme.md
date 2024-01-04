                                                *** What does typescript do? ***

Static Checking
Typescript detects errors in our code without running it. This is called static checking.

Why Types ?
TypeScript's Type system ....

- Helps us find errors!
- Analyzes our code as we type.
- Only exists in development. [ at the end , it will convert to javscript only, which browser understands.]

- Object - Tuple
- Array - Enum\
- Function - Others!

**_ Functions defining _**

- So in functions , in typescript -> we can define it,that the return value of the function would be number or string.

- we can also define function's arguments data type, eg: "This function accetps two numbers and returns a number."

**_ Object/Array defining _**

"Object must have a property called colors, set to an Array of strings".

**_ Variables Defining _**
This variable is a string.

<!-- Declaring a variable in JS -->
const myAwesomeVariable = "So awesome";

<!-- Declaring a variable in TS -->
const myAwesomeVariable: string = "So awseome"


<!-- Type inference -->
Type inference refers to the typescript compiler's ability to infer types from certain values in your code.

Typescript can remember a value's type even if you didn't provide a type annotation, and it will enforce that type moving forward.

<!-- 'Any' Data Type -->
'any' is an escape hatch! It turns off type checking for this variable so you can do your thing.
NOTE : it sort of defeats the purpose of TS and types, so use it sparingly!.


*** Annotation is very basic method to defined variable data type. Inference will be best choice over annotation, as typescript remember the type of data assigned at first time. *** 


<!-- Function Return data type -->

We can sepicify the type returned by a function. Even though Typescript can often infer this, I prefer the explicit annotations.

Add the type annotation after the function parameter list.


<!-- Void Type -->

Void is a return type for functions that don't return anything. it means just that this function is void of any data. 
Typescript can infer this type fairly well, but sometimes it may want you to annotate a function wityh a void return explicitly.

*** Alias ***
Instead of writing out object types in an annoatation, we can declare them separately in a type alias, which is simply the desired shape of the object.

This allows us to make our code more readable and even reuse the types elsewhere in our code.




*** Different ways to defin array type ***

let names: string[] = ["hello","world"];

similarily, 
let names : Array<string> = ["hello","world"];

// another example //

let ages : number[] = [22,33];
similarily,
let ages : Array<number> = [22,33]


*** Union-Narrowing the Type ***
Narrowing the Type is simply doing a type check before working with a value. If your value is a string you may want to use it differently than if you got a number.

Since unions allow multiple types for a value, it's good to check what came through before working with it

<!-- typescript configuration -->
-  To run typescript enter tsc filename
- to continously run tsc on particluar file run ->  tsc -w filename

- To run typescript at overall level, so that all files of tsc, convert into js, run -> tsc
- to run continoulsy run -> tsc -w

-  we can also put restrictions, to convert only desired files, just pass files:["filename1","filename2"] for more,go to typescript confiugration documentation.


<!-- Through inclue and exclude also we can handle above point -->
mention in include , which files you want to include,
and vice versa in exclude.

<!-- OutDir -->
Through this configuration, we can decide where we want to store, js files , converted from ts files, you can provide path, or simply by passing name, can put it inside a folder.

<!-- Target Option -->
through this we can descide , which version of javascript we want to get from typescript. or which version of js should be get by compilation of typescript.

<!-- strict mode -->
strict mode is good to use as true, if not, then after defining annotation, it can be manipulated.