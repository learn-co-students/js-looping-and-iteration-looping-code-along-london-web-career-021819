// Code your solutions in this file
const people = ['Ada', 'Brendan', 'Ali'];

function printBadges(people) {
	for (let i = 0; i < people.length; i++) {
		console.log(`Welcome ${people[i]}! You are employee #${i+1}.`);
	}

	return people;
}

printBadges(people);

function tailsNeverFails() {
function coinResult() {
  return Math.random() >= 0.5;
}
let i = 0
  while (coinResult()){
    i++
  }
  return 'You got ${i} tails in a row!'
}

tailsNeverFails()
