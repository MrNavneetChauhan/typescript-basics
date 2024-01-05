
function mergeObjects<T extends object,U extends object>(object1:T,object2:U){
    return {
        ...object1,
        ...object2
    }
}

const sol1 =  mergeObjects({name:"navneet"},{lastnamea:"chauhan"});
console.info("solution1",sol1)

// Here we have fixed 'ANY' type, but here if we want to define both prop in function should be object, then instead of passing generic type we can use 'EXTEND' property.

// lets take another example //

interface Lengthy{
    length : number
}


function printDoubleLength1(thing:Lengthy){
    return thing.length * 2
}

function printDoubleLength2<T extends Lengthy>(thing : T){
    return thing.length * 2
}

// both are doing the same thing

function printDoubleLength3 <T /* extends Lengthy */> (thing : T){
    return thing.length * 2
}


printDoubleLength1({length:3})
printDoubleLength2({length:3})
printDoubleLength3<{length : number}>({length:3}) // here this thing won't work, as we have define interface,we have to either defined prop by alias,interface or by object

