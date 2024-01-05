function doThing1(thing:number | string):(number|string){
    return thing
}

// here we have to write a lot syntax , so to use same thing, we can use "GENERIC";

function doThing2<Type>(item:Type):Type{
    return item
}

doThing2<number>(2);

// So Generic are basically likes function , we have to define them in function and then we have to pass it's type in the calling.


// another example of generic ///

function getRandomNumberElement<T>(list:T[]):T{
    const randIdex = Math.floor(Math.random() * list.length )
    return list[randIdex]
}

getRandomNumberElement<string|number>(["helo","brother",1])


// Example of infer in generic ///

getRandomNumberElement(["helo","brothers"]) // here it has automatically infered the type from argument,

// Above case will not be always same, sometimes have to pass generic type //



// example of merging two obects //
function merge<T,U>(object1:T,object2:U){
    return {
        ...object1,
        ...object2
    }
}

// here we are simple merging the objects, so no need of interface , alias just pass the geneic type in argument and it will work //


merge<{name: string,age:number},{gender:string,single: boolean}>({name:"navneet",age:24},{gender:"male",single : true})


const combo = merge({name:1212},{age:"28"})
