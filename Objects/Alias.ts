let coordinate : {x: number,y:number} = {x:2323,y:2334};
// it's simply like => coordinate :string = "helo", but in this case it is object  and we are defining the object too.

/*
Instead of writing out object types in an annotation, we can delcare them separatley in a 'type alias' which is simply the desired shape of the object.

This allows us to make our code more readable and even reuse the types elsewhere in our code.
*/

type Person = {
    name : string,
    age : number,
    gender : string
}

function printDetails(person:Person):Person{
   return {
    name : "navneet",
    age: 34,
    gender : "male"
   }
}

// We can use 'Alias' in simple variable also, but would not recommend.

type num = number;

let numerical:num = 343

// What if we have nest objects in return then,alias play vital role here.//
// for example 

type Payload = {
    title : string,
    artist : string,
    numStreams : number,
    credits : {
        producer : string,
        writer : string
    }
}

function returnPayload():Payload{
    return {
        title : "Unchaned Melody",
        artist : "Righteous Brothers",
        numStreams : 2323243,
        credits : {
            producer :  "Phil Spector",
            writer : "Alex North"
        }
    }
}

// We can alos use dot notation to return exact type //
function calculatePayload(song: Payload):number{
    return song.numStreams * 0.0033
}

// Let's print something, and what type should we given

function printSong(song: Payload){
    return song.title // no need to explicitly tell the void type or any other type typescript will infer from return type
}

// Also we can use the 'type Payload' to define variable consist of nested object and have same data keywords //

const xerox: Payload = {
    artist : "Navneet",
    title : "Life of pie",
    numStreams: 2323,
    credits : {
        writer : "Steve smith",
        producer : "Shetty"
    }
}

console.info("info",printSong(xerox));
console.info("info",calculatePayload(xerox));