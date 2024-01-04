
// Here in this case arr consist of string only therefore no need to define item type in array //

const arr = ["hlo","bye","brother","sister","etc"];
arr.map((item)=>{
    console.info("item",item)
})



// Here in this case arr consist of both string and number, therefore we have to define item as string as or as number. [we have to use | <- this opeartor]

const arr2 = ["one","two","three",1,2,3];
arr2.map((item:string | number)=>{
    console.info("item",item)
})
console.info("arr2",arr2);


// Void Type //

// if we declare a function as void, and try to return something from function than typescript will show the error //

function declareAsVoid():void{
    // return "" // here TS will show error //
}

// In this case, TS can infer the return type in this case.
function another(){
    return "string" + 12
}


