let num = 1234;

//Returns 'undefined'.
let num1 = num.toString();
let result = num1.indexOf(".");
if(result> -1)
{
console.log("Decimal");
console.log(num1.length-1);
}
else{
console.log("Integer");
console.log(num1.length);
}
//Use type conversion to print the length (number of digits) of an integer.

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
