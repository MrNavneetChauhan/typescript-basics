/*
*** Interfaces ***

Interfaces serve almost the exact same purpose as type aliases (with a slightly different syntax)

We can use them to create reusable, modular types that describe the 'shapes of objects'. / Only Objects /

*/
var obj = { name: 'navnet', age: 343, gender: 'male', sayHi: function () {
        return "interface";
    } };
console.info("this is the method response", obj.sayHi());
var obj2 = { name: "navneet", age: 343, gender: "male", sayHi: function () { return "alias"; } };
console.info("this is the method response in alias", obj2.sayHi());
