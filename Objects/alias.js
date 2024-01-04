var coordinate = { x: 2323, y: 2334 };
function printDetails(person) {
    return {
        name: "navneet",
        age: 34,
        gender: "male"
    };
}
var numerical = 343;
function returnPayload() {
    return {
        title: "Unchaned Melody",
        artist: "Righteous Brothers",
        numStreams: 2323243,
        credits: {
            producer: "Phil Spector",
            writer: "Alex North"
        }
    };
}
// We can alos use dot notation to return exact type //
function calculatePayload(song) {
    return song.numStreams * 0.0033;
}
// Let's print something, and what type should we given
function printSong(song) {
    return song.title; // no need to explicitly tell the void type or any other type typescript will infer from return type
}
// Also we can use the 'type Payload' to define variable consist of nested object and have same data keywords //
var xerox = {
    artist: "Navneet",
    title: "Life of pie",
    numStreams: 2323,
    credits: {
        writer: "Steve smith",
        producer: "Shetty"
    }
};
console.info("info", printSong(xerox));
console.info("info", calculatePayload(xerox));
