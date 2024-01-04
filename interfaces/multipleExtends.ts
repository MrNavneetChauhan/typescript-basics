interface PersonInfo {
    name : string
}

interface Employee {
    readonly id : string;
    email : string
}

interface Engineer extends PersonInfo,Employee{
    level : string,
    languages : string[]
}

const tony:Engineer = {
    name : "Tony",
    id:"alsdkfjdlsfj",
    email:"tony@cloudify.biz",
    level : "intermediate",
    languages : ["hindi","english","sanskrit"]
}