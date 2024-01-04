//  Type 'Never' //
/*
The never type represents values that NEVER occur. We might use it to annotate a function that always throws an exception, or a function that never finishes executing.

Don't confuse withy 'Void' - void returns undefined or null, which is technically still a type of value. With never, a function doesn't even finish executing.

*/

// first case where you are throwing error inside a function therefore this function will 'never' be able to return any thintg //

function makeError(msg: string):never{
    throw new Error(msg);
}

function gameLoop():never{
    while(true){
        console.info("still executed")
    }
    // return "" // It will throw error, "Game Loop Running!."
}