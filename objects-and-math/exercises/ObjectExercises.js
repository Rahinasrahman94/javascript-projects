
  // let d=0;
  let roundsArray=[];
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautId : Math.floor(Math.round(Math.random()*10))+1,
   move : function() {
      let m = Math.round(Math.random()*10);
     
      return  m ;
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautId : Math.floor(Math.round(Math.random()*10))+1,
   move : function() {
      let m = Math.round(Math.random()*10);
    
      return m ;
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautId : Math.floor(Math.round(Math.random()*10))+1,
   move : function() {

    let m = Math.round(Math.random()*10);
    
      return m ;
   }
};

let  dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautId : Math.floor(Math.round(Math.random()*10))+1,
   move : function() {
      let m = Math.round(Math.random()*10);
    
      return m ;
   }
};
let microAnimals = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautId : Math.floor(Math.round(Math.random()*10))+1,
   move : function() {
      let m = Math.round(Math.random()*10);
      return  m ;
   }
};
let  allAnimals =[superChimpOne,salamander,superChimpTwo,dog,microAnimals];
for(item in allAnimals)
   {
console.log(allAnimals[item].name + " is a " +allAnimals[item].species +" . They are "+ allAnimals[item].age+" years old and "+ allAnimals[item].mass+" Their ID is "+allAnimals[item].astronautId)
   }

function fitnessTest(arr)
 { 
   let rounds;
   let n;
   for(let i=0;i<arr.length;i++)
{         
         rounds = 0;
         n = arr[i].move();
        while(n<=20)
         {
            n += arr[i].move();
            rounds ++;
           
         }
         roundsArray[i] = rounds;
        
      }
      
      return roundsArray;
      
   }
console.log(fitnessTest(allAnimals));
for(items in allAnimals)
   {
      console.log(allAnimals[items].name+" takes "+roundsArray[items]+" to complete 20 steps")
   }