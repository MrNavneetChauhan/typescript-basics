/*
*** Enums ***
Enums allow us to define a set of named constants. We can give these constants numeric or string values.

There's quite a few options when it comes to enums!
*/
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 10] = "NORTH";
    Direction[Direction["SOUTH"] = 11] = "SOUTH";
    Direction[Direction["EAST"] = 12] = "EAST";
    Direction[Direction["WEST"] = 13] = "WEST";
})(Direction || (Direction = {}));
var myStatus = OrderStatus.DELIVERED;
var myDirection = Direction.EAST;
console.info("MyStatus", myStatus);
console.info("MyDirection", myDirection);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys[ArrowKeys["OTHER"] = 0] = "OTHER";
})(ArrowKeys || (ArrowKeys = {}));
console.info("Arrow", ArrowKeys.OTHER);
