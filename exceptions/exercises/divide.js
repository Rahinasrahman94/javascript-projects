// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
const input = require('readline-sync');
function divide(numerator,denominator)
{
if(denominator === 0)
    {
        throw Error("You cannot divide by zero!");
    }
    try{
     let result = numerator/denominator
    return result;
    }
    catch (e)
    {
        console.error("error" +e);
    }
}
//let numerator = input.question("Numerator : ")
//let denominator = input.question("Denominator : ")
console.log(divide(9,0));
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
