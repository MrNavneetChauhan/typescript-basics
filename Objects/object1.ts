function printName(person:{firstname: string,lastname: string}){
    return `${person.firstname} ${person.lastname}`
}

printName({firstname:"Navneet",lastname:"Chauhan"});


/*
Objects can be typed by declaring what the object should look like in the annotation.

Accessing a property that isn't defined or perfroming opeartions without keeping types in mind will throw errors!
*/

// we can also define variable in object type for example //

let coordinate : {x: number,y:number} = {
    x : 324,
    y: 39248
}

// Declaring return type //

function randomCoordinate():{x:number,y:number}{
    return {
        x: 23984,
        y: 9023847
    }
}