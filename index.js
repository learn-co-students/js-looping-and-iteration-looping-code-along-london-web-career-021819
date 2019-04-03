function printBadges(employees){
  for (let i = 0; i < employees.length; i++){
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`)
  }
  return employees
}

function tailsNeverFails(){
  let number = Math.random()
  let tails = 0

  while(number >= 0.5){
    tails += 1
    number = Math.random();
  }
  return `You got ${tails} tails in a row!`
}
