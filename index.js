// Code your solutions in this file
function printBadges(array) {
array.forEach(function (array, index) {
console.log(`Welcome ${array}! You are employee #${index+1}.`)
});
return array
}


function tailsNeverFails(){
     function flip(){
        return Math.random() >= 0.5 }
     let i = 0
     while (flip()){
        i++
    }
     return `You got ${i} tails in a row!`
}
