// It will work fine for function declaration //
function getRandomElement<T>(list:T[]):T{
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx]
}

// But in case of Arrow Function //

const getAnotherRandomElement = <T,>(list:T[]):T=>{
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx]
}

// And then it will work fine //
