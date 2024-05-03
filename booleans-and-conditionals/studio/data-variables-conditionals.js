const date = "Monday 2019-03-18";
const time ="10:05:34 AM";
let astronautCount = 8;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;
if((astronautCount <= 7) && (astronautStatus === "ready") &&(totalMassKg <= maximumMassLimit ) && (fuelTempCelsius > -300 && fuelTempCelsius < -150)&&(fuelLevel === 100)&&(weatherStatus === "clear"))
{
  console.log( "Shuttle is ready for  launch")
}
else{
  console.log("Shuttle cannot be launched");
}