function printBadges(names){
    for(let i=0; i<names.length; i++){
        console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
    }
    return names
}

function tailsNeverFails(){
     function flip(){
        return Math.random() >= 0.5 }
     let counter = 0
     while (flip()){
        counter++
    }
     return `You got ${counter} tails in a row!`
}
