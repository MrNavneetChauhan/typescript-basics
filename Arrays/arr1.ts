/*
 *** Array Types ***
 Array can be typed using a type annotation followed by empty array brackets, like number[] for an array of numbers.

 Note: these arrays only allow data of that one type inside them. More on that later!
*/

// Here as we have defined activeUsers as an empty array, so it will take it as 'never' type , and thus it will throw error if we try to add something inside it, it will try to make this type consistent.


const nonActiveUsers: [] = [];
nonActiveUsers.push(1)

const anyArr = []; // this syntax will also take 'never' as by default.

// to make it addible type we will use the same approach just like we were using in the variables //
// therefore :

const activeNumberUsers : number[] = [];
activeNumberUsers.push(1) // it will work fine. 

const activeStringUsers : string[] = [];
activeStringUsers.push("string is pushed");

const activeBoleanUsers : boolean[] = [];
activeBoleanUsers.push(true);


// another syntax to defined arr //;

const bools1 = Array<boolean>;

const bools2 : boolean[] = [];

// our custom types //

type Data = {
    x : number,
    y : number
}

const coords : Data[] = [];

coords.push({x :1,y:2}) // Here we have defined the item consist in array would be type of 'Data' which is an object consist of x-> number and y-> number.

coords.push({x:9,y:10});








