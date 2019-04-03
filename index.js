// Code your solutions in this file
const employees = ["Ada", "Brendan", "Ali"];

function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}

function maybeTails() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let counter = 0;
  while (maybeTails() == true) {
    counter++;
    maybeTails;
  }
  return `You got ${counter} tails in a row!`;
}
