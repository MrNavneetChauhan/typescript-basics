/*
*** Enums ***
Enums allow us to define a set of named constants. We can give these constants numeric or string values.

There's quite a few options when it comes to enums!
*/

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
enum Direction {
    NORTH = 10,
    SOUTH,
    EAST,
    WEST
}

const myStatus = OrderStatus.DELIVERED;
const myDirection = Direction.EAST;
console.info("MyStatus",myStatus);
console.info("MyDirection",myDirection);

enum ArrowKeys  {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    OTHER = 0
}

console.info("Arrow",ArrowKeys.OTHER)