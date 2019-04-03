function printBadges(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
    }
    return array;
}


function tailsNeverFails() {
    let coin = 1
    let counter = 0
    while (coin >= 0.5) {
        
    coin = Math.random()
    if (coin >= 0.5) {
        counter ++
    } 
    else {
        coin = 0
    }
}
    return `You got ${counter} tails in a row!`
}