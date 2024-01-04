
// Here typescript infer data type of props from its value //
function twoFer(name : string = "you"):string{
    return `one for ${name}, one for me.`
}

twoFer();
twoFer("Elton")


// Write a isLeapYear() function that accepts a year and returns true/false depending on if the year is a leap year 

// isLeapYear(2012) => true
// isLeapYear(2013) => false

function isLeapYear(year:number):boolean{
    if(year % 4 === 0 && year % 100 !== 0)return true;
    else if(year % 400 === 0)return true;
    return false;
}


