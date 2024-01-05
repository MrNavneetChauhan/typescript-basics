// IF we don't pass default generic type ,sometimes,the it will show type as 'UNKNOWN' 
// let see an example //

function makeEmptyArray<T = number>():T[]{ // here we are return type of empty []
    return []
}

const stringArr = makeEmptyArray<string>(); // here we are sending generic type as string, so type is defined here

// but what if we don't pass anything then, type would be "UNKNOWN" //


const anotherStr = makeEmptyArray(); // here by default type will be number, as we have passd <T= number> therefore //

const booleanarr = makeEmptyArray<boolean>();
