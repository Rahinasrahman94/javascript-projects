/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
for(let i=0; i<=20;i++)
  {
    console.log(i);
  }

for(let i=3; i<=29;i++)
  {
    if(i%2 != 0)
      {
    console.log(i);
      }
  }
  
  for(let i=12; i>=-14;i--)
    {
      if(i%2 == 0)
        {
      console.log(i);
        }
    }
    for(let j=50; j>20;j--)
      {
        if(j%3 == 0)
          {
        console.log(j)
          }
      }
      
    

//Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
let string1 = "LaunchCode";
let forarray = [1, 5, 'LC101', 'blue', 42]
//Construct ``for`` loops to accomplish the following tasks:
  //a. Print each element of the array to a new line.
  //b. Print each character of the string - in reverse order - to a new line. */ 
 for(let i=0;i<forarray.length;i++)
  {
    console.log(forarray[i]);
  }
for(let i=string1.length;i>=0;i--)
  {
    console.log(string1[i]);
  }



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  let  numarrays=[2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let evenarray =[];
  let oddarray = [];
  let j=0;
  let k=0;
  for(let i=0;i<numarrays.length;i++)
    {
      if(numarrays[i]%2==0)
        {
          evenarray[j]=numarrays[i];
         j++;
         
        }
        else{
          oddarray[k]=numarrays[i];
          k++;
        }
    }
    console.log(evenarray);
    console.log(oddarray);
