const input = require('readline-sync');
let  cargoHold = [];
let contentsOfThecabinet =[];
let cabinetNumber;
let item;
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
let foodCabinet =[];
let equipmentCabinet =[];
let petsCabinet =[];
let sleepAidsCabinet =[];
cargoHold =[food,equipment,pets,sleepAids];
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
foodCabinet = food.split(",");
foodCabinet.sort();
equipmentCabinet = equipment.split(",");
equipmentCabinet.sort();
petsCabinet = pets.split(","); 
petsCabinet.sort();
sleepAidsCabinet =sleepAids.split(",");
sleepAidsCabinet.sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold = [foodCabinet,equipmentCabinet,petsCabinet,sleepAidsCabinet]
cabinetName = ["foodCabinet","equipmentCabinet","petsCabinet","sleepAidsCabinet"];
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
cabinetNumber = input.question("Please Enter the Cabinet number  ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(cabinetNumber > cargoHold.length)
{
    console.log("Please enter available number,You can enter upto",cargoHold.length);
}
else
{
    console.log(cargoHold[cabinetNumber])
    contentsOfThecabinet = cargoHold[cabinetNumber];
    console.log(`Selected Cabinet : ${cabinetName[cabinetNumber]} 
     Items :${cargoHold[cabinetNumber]}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
cabinetNumber = input.question("Please Enter the Cabinet number :");
cabinetItem = input.question("Please Enter the Item from the cabinet:");
let str = cargoHold[cabinetNumber].includes(cabinetItem);
//console.log(str);
if(str)
{
    console.log("Cabinet :"+ cabinetName[cabinetNumber] + "   DOES contain :" + cabinetItem)
}
else{
    console.log("Cabinet :"+ cabinetName[cabinetNumber] + "  DOES Not contain : " + cabinetItem)
}