// Optional type-> So basically during the annotation or alias, we can also mention optional data type, [can be present or not];
var myPoint = { x: 34, y: 343 }; // Here not even defining z, and it's not showing error, because it's optional.
function printPayload(data) {
    return {
        x: data.x,
        y: data.y
    };
}
console.info(printPayload({ x: 232, y: 334 }));
