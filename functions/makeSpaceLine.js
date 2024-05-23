function makeSpaceLine(numSpaces, numChars)
{
  let Space = '';
  let chars='';
  
  for(let i=0;i<numSpaces;i++)
  {
    Space +='-';
  }
  for(let i=0;i<numChars;i++)
  {
   chars += '#';
  }
  return (Space+chars+Space);
}
console.log(makeSpaceLine(3, 5));