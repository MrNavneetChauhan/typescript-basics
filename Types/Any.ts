// Example of any, and it should be last optiun to use. //

// For example we have to find sepeicific word in the given array of list.

const movies = ["Arrival","The Thing","Aliens","Amadeus"];

let foundMovie; // Generally in js foundMovie will take undefined value, and type of the variable will be 'Any'
for(const item of movies){
    if(item === "Amadeus"){
        foundMovie = "Amadus"
    }
}

// So we can assign any value to it, we can also execute this variable, even it it carries string , number or boolean etc.

foundMovie(); // So it has not even shown the error, there for any should be last  option to use//


