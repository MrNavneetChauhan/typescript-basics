interface Dog1 {
    name : string;
    age : number
}

interface Dog1 {
    breed : string,
    bark:()=>boolean
}

const myDog: Dog1 = {
    name : "JACK",
    age : 1,
    bark(){
        return true
    },
    breed : "street dog"
}

// Suppose we want to crate another interface which has all the properties which Dog1 has but rest are different then we can use 'extends' keyword //

interface Dog2 extends Dog1 {
    job : "drug sniffer" | "bomb" | "guide dog";
}

const chewy : Dog2 = {
    name : "Chewy",
    age : 4.5,
    breed : "Lab",
    bark(){
        return true
    },
    job : "drug sniffer"

}