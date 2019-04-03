// Code your solutions in this file

function printBadges(names){
  for (let i = 0; i < names.length; i++) {
    badge = `Welcome ${names[i]}! You are employee #${i+1}.`;
    console.log(badge);
  }
  return names;
}


function tailsNeverFails(){
  let coin = "Tails"
  let tailsCount = 0;
  while (coin === "Tails") {
    if (Math.random() >= 0.5) {
      tailsCount++;
    }
    else {
      coin = "Heads";
    }
  }
  return `You got ${tailsCount} tails in a row!`
}
