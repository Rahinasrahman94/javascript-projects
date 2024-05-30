function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));


// Steal some fuel from the shuttle:
let nonSuspiciousFunction = function(a) {
  if (checkFuel(a) === 'green') {
     return a - 100001;
  }
  else if (checkFuel(a) === 'yellow') {
     return a - 50001;
  }
  else {
     return a;
  }
};

  let innocentfunction = function(cargoHold)
{
  let items; 
  let itemsInCargo= [];
 items = cargoHold.splice(3,1,"clothes");
 itemsInCargo.push(items);
     items = cargoHold.splice(4,1,"light");
     itemsInCargo.push(items);
  return itemsInCargo;
  }

  let irs = function(levelOfFuel, itemsInCargo ){
    let arr = itemsInCargo
    return `Raided ${nonSuspiciousFunction(fuelLevel)} kg of fuel from the tanks, and stole ${arr[0]} and ${arr[1]} from the cargo hold.`
 }

console.log(irs)
 



