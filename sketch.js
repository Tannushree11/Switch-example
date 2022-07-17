var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);

  input = createInput();
  input.position(5 , 100);

  heading = createElement('h4', 'Enter any alphabet');
  heading.position(5 , 50);
 
}

function draw() {
  const value = input.value(); // value = e

  switch(value) {
    case 'a': console.log("Vowel");
              break;

    case 'e': console.log("Vowel");
              break;

    case 'i': console.log("Vowel");
              break;

    case 'o': console.log("Vowel");
              break;

    case 'u': console.log("Vowel");
              break;

    default: console.log("Alphabet entered is not a vowel");


  }

  
}

