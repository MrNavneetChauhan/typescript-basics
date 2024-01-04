function square(num){
    num.toUpperCase();
    num();
    return num*num
}

square(23);
square("hello");
square(true)
// Here argument num's data type is not defined, so it will take any by default, and it is not a good type to use //

// As we have not defined it's type and it is 'any', therfore we can execute it or can multiply a number to string [on which it should show error, in typescript.]. //



// Annotation in function //
function greet(person: string){
    return `Hi there, ${person}`
}


const doSomething = (person: string,age: number,isFunny:boolean)=>{

}

doSomething("helo")

// in this above case, typescript will show error, if not same number of arguments are provided //
// also will check it's data type //

// what if we want to give default value for all the props then ? //

// Then we can do it like this, as we were doing it earlier. //

function defaultArguments(person:string = "navneet",age:number=26,isFunny:boolean=true){

}

// And the best method to write would be inference //

function bestMethodForDefaultArguments(person="navneet",age=26,isFunny=true){

}