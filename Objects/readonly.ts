type User = {
    readonly id : number;
    username : string;
}

const userInfo :User = {
    id : 932847398473,
    username : "Navneet"
}

console.log("info",userInfo.id)
userInfo.id = "changing" // it will throw error, since id is in readonly mode only.//