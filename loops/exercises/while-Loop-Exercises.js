//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let startingfuellevel=0;
let numberofastronautsaboard=0;
let fuelstatus;
let altitude=0;
/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  
  while(startingfuellevel<5000 || startingfuellevel>30000) 
    {
      startingfuellevel = input.question("enter the fuel level");
  if(startingfuellevel<5000 && startingfuellevel > 30000 )
    {
    console.log("please enter the value between 5000 and 30000");
  startingfuellevel = input.question("enter the fuel level");
    }
  else{
    console.log("fuel level is good");
  }
}
//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while(numberofastronautsaboard<=0 || numberofastronautsaboard>7) 
  {
    numberofastronautsaboard = input.question("enter astronaut count"); 
    if(numberofastronautsaboard>8)
      {
    console.log("please enter the value between 1 and 7");
      }
}
  
  fuelstatus = startingfuellevel;
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while(fuelstatus > 100)
  {
    
   fuelstatus = fuelstatus - (numberofastronautsaboard*100)
   console.log(altitude);
    altitude = altitude + 50;
  }
console.log("The shuttle gained an altitude of"+altitude+"km")

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if(altitude>=2000)
  {
    console.log("Orbit achieved!")
  }
  else{
    console.log("Failed to reach orbit")
  }