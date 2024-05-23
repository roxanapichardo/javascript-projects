function makeLine(size)
{
    let line ='';
    for(let i=0;i<size;i++)
    {
        line += '#';
    }
    return line;
}
console.log(makeLine(5));

console.log("\n"); 

function makeSquare(size,)
{
    let line ='';
    for(let i=0; i<size; i++)
    {
        for(let j=0; j<size ;j++)
        {
            line += '#';
        }
        line+='\n'; 
    }
    
    return line;
}
console.log(makeSquare(5)); 

console.log("\n"); 

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }

console.log(makeRectangle(5,3)); 

console.log("\n"); 

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }

  console.log(makeDownwardStairs(5)); 

  console.log("\n"); 


  function makeSpaceLine(numSpaces, numChars)
  {
      let spaceLine= '';
      for(let i=0;i<numSpaces ; i++)
      {
          spaceLine+=" ";
      }
      for(let j=0;j<numChars;j++)
      {
          spaceLine+='#';
      }
      for(let i=0;i<numSpaces ; i++)
      {
          spaceLine+=" ";
      }
      return spaceLine;
  }

  console.log(makeSpaceLine(3,5)); 

  console.log("\n");

  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle; 
  }
  console.log(makeIsoscelesTriangle(5)); 

  console.log("\n"); 

  function makeDiamond(height)
{
    let diamond = '';
    for(let i=0; i <height ;i++)
    {
        diamond+= (makeSpaceLine(height - i - 1 , 2 * i + 1 )+'\n');
    }
    for (let i=height-2; i>=0;i--)
    {
        diamond += (makeSpaceLine(height - i -1  , 2 * i + 1 )+'\n');

    }

  
    return diamond;}

console.log(makeDiamond(5)); 
