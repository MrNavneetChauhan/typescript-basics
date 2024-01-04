type Structure = {
    readonly title : string,
    originalTitle? : string,
    director : string,
    releaseYear : number,
    boxOffice : {
        budget : number,
        grossUS : number,
        grossWorldWide : number
    }
}

const movie:Structure = { // it will not show error,as we have not added originalTitle //
    title : "3 idiots",
    director : "Rajkumar Hirani",
    releaseYear : 2009,
    boxOffice :{
        budget : 3234343434,
        grossUS : 23343434,
        grossWorldWide: 309483904834908
    }
}

function getProfit(movie:Structure):number{
    return movie.boxOffice.grossWorldWide - movie.boxOffice.budget;
}

const profit = getProfit(movie);
console.info("profit",profit)