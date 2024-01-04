/*
*** Interfaces *** 

Interfaces serve almost the exact same purpose as type aliases (with a slightly different syntax)

We can use them to create reusable, modular types that describe the 'shapes of objects'. / Only Objects /

*/


interface Payload3 {
    name : string;
    age : number;
    readonly gender:string;
    address?:string;
    sayHi : ()=>string
}

let obj:Payload3 = {name : 'navnet',age:343,gender:'male',sayHi:()=>{
    return "interface"
}};

console.info("this is the method response",obj.sayHi())
// obj.gender = "female" //it will throw error, as gender is in readmode only. //


// let's test can we do the same in alias or not //
 type Payload2 = {
    name : string,
    age : number,
    readonly gender : string,
    address?:string,
    sayHi: ()=> string
 }


const obj2:Payload2 = {name : "navneet",age:343,gender:"male",sayHi()=>{ "alias"}}
console.info("this is the method response in alias",obj2.sayHi())

// The method definition will be followed as it is, if nothing props are passed then, it will not take any prop during declaration.

// another example //
interface NewProduct{
    name : string;
    price : number;
    applyDiscount(discount:number):number;
}

const shoes:NewProduct = {
    name : "Blue Suded Shoes",
    price: 100,
    applyDiscount(){
        return 1
    }
}