var movie = {
    title: "3 idiots",
    director: "Rajkumar Hirani",
    releaseYear: 2009,
    boxOffice: {
        budget: 3234343434,
        grossUS: 23343434,
        grossWorldWide: 309483904834908
    }
};
function getProfit(movie) {
    return movie.boxOffice.grossWorldWide - movie.boxOffice.budget;
}
var profit = getProfit(movie);
console.info("profit", profit);
