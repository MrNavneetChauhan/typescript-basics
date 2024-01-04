function printName(person) {
    return "".concat(person.firstname, " ").concat(person.lastname);
}
printName({ firstname: "Navneet", lastname: "Chauhan" });
/*
Objects can be typed by declaring what the object should look like in the annotation.

Accessing a property that isn't defined or perfroming opeartions without keeping types in mind will throw errors!
*/
// we can also define variable in object type for example //
var coordinate = {
    x: 324,
    y: 39248
};
// Declaring return type //
function randomCoordinate() {
    return {
        x: 23984,
        y: 9023847
    };
}
