const input = require('readline-sync');
let symbol = input.question("enter the sign");
function makeLine(length)
{
  let line = '';
  for(let i=0;i<length;i++)
   {
  line += symbol; 
   }
  return line;
}
console.log(makeLine(5));

function makeSquare(height)
{
  let square = '';
for(let i=0;i<height;i++)
{
square += makeLine(height) +'\n'
}
return square;
}
console.log(makeSquare(5));

function makeRectangle(width,height) {
    let rectangle = '';
  for(let i=0;i<height;i++)
  {
  rectangle += makeLine(width) +'\n'
  }
  return rectangle;
  }
  console.log(makeRectangle(5,3));
function makeSpaceLine(numSpaces, numChars)
{
  let Space = '';
  let chars='';
  
  for(let i=0;i<numSpaces;i++)
  {
    Space +=' ';
  }
  for(let i=0;i<numChars;i++)
  {
   chars += symbol;
  }
  return (Space+chars+Space);
}
console.log(makeSpaceLine(3, 5));
function makeDownwardStairs(size) {
    let downwardStairs = '';
    for (let i = 0; i <= size; i++) {
      downwardStairs += (makeLine(i)+'\n');
    }
    return downwardStairs;
  }
  console.log(makeDownwardStairs(5));
  function makeIsoscelesTriangle(height)
{
  let IsoscelesTriangle ='';
  for(let i=0;i<height;i++){
 IsoscelesTriangle += makeSpaceLine(height - i - 1,2 * i + 1) +'\n';
  }
return IsoscelesTriangle.slice(0,-1);
}
console.log(makeIsoscelesTriangle(5));

function reversetraingle(height) {
    let traingleArray = makeIsoscelesTriangle(height).split('')
    let reversedtraingleArray = traingleArray.reverse();
    return reversedtraingleArray.join('');
}
console.log(reversetraingle(5));
function makeDiamond(height)
{
  let diamond='';
  for(let i=0;i<height;i++){
diamond += makeIsoscelesTriangle(5) +reversetraingle(5)+'\n';
  }
return diamond.slice(0,-1);
}