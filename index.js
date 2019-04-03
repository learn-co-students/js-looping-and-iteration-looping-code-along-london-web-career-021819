// Code your solutions in this file
function printBadges(array) {
  for (let x = 0; x < array.length; x++) {
    console.log(`Welcome ${array[x]}! You are employee #${x+1}.`)
  }
  return array
}

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
