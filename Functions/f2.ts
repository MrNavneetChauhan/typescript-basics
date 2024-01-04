// Function Return Types //
/*
We can sepicify the type returned by a function. Even though Typescript can often infer this, I prefer the explicit annotations.

Add the type annotation after the function parameter list.
*/

// Typescript can often infre data type in return for example let's take one case //

function mult(num:number){
    return num*num
}

mult(5)

// If i don't return anything from function then by default it will show 'void' as functions return data type //

// to define return put colon and data type after close paranthesis //

function returnTest(x:number,y:number):number{
    return x+y
}

returnTest(3,4)

