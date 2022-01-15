let kleur;
let canvas;
let dikte;
let functie;
let kleuren_random;
let kleur_random;


function setup() {
  //menu knoppen
  button = createButton('New');
  button.position(300, 0);
  button.mousePressed(new_canvas);
  button = createButton('Save');
  button.position(350, 0);
  button.mousePressed(bewaar);
 
  // default waardes
  createCanvas(400, 400);
  canvas = true;
  functie = 'lijn';
  dikte = 1;
  kleur = 'black';
  background(150);
  
  kleuren_random = ['red', 'blue', 'green', 'black','purple','pink'];

}

function draw() {
  
  // leeg scherm
  
  if (canvas){
     strokeWeight(0);
     fill('white');
     rect(0,46,windowWidth, windowHeight);
     canvas = false}
  strokeWeight(1);
  
// MENU balk tekenen
  stroke ('black')
  fill('green');
  circle (10,10,15);
  fill('red');
  circle (35,10,15);
  fill('Yellow');
  circle (60,10,15);
  fill('black');
  circle (10,30,15);
  fill('blue');
  circle (35,30,15);
  //random kleur
  kleur_random = random(kleuren_random);
  fill(kleur_random);
  circle (60,30,15)
  // tonen gekozen kleur en dikte
  fill(kleur);
  // menu gekozen lijn dikte
  strokeWeight(dikte);
  circle (90,10,15);
  strokeWeight(1);
  fill ('black')
  triangle (130,20,200,20,200,5);
  //menu teken functies
  // gum
  fill ('white');
  rect(220,2,22,20);
  //lijn
  fill ('black');
  line (250,20,260,6);
  //punt
  fill ('black');
  circle (270,12,5);
  //puntjes 
  fill ('black');
  circle (270,30,2);
  circle (265,40,2);
  circle (275,40,2);
  
  
 // end  menu
  
  
  // menu verwerking
  // is er een menu knop gedrukt??

  //Green selected? en muisknop ingedrukt?
  if (mouseIsPressed && mouseX < 15 && mouseY < 15)
    {
      kleur = 'green';
 
    }
  
  //yellow selected?
  if (mouseIsPressed &&  mouseX > 50 && mouseX <65 && mouseY < 15)
    {
      kleur = 'yellow';
  
    }
   
  // red?
   if (mouseIsPressed &&  mouseX > 25 && mouseX < 45 && mouseY < 15)
    {
      kleur = 'red';
  
    }

  //black
  if (mouseIsPressed &&  mouseX < 15 && mouseY> 20 && mouseY < 45)
    {
      kleur = 'black';
 
    }
    // blue?
  if (mouseIsPressed &&  mouseX > 25 && mouseX < 45 && mouseY > 20 && mouseY < 45)
    {
      kleur = 'blue';
  
    }
  
    // random / kleur selecteren?
  if (mouseIsPressed &&  mouseX > 50 && mouseX < 65 && mouseY > 20 && mouseY < 45)
    {
      kleur_random = random(kleuren_random);
      kleur = kleur_random;
 
    }

  
  
  // menu functie welke is gekozen??
  // lijn geselecteerd?
  if (mouseIsPressed &&  mouseX > 245 && mouseX < 260 && mouseY < 15)
    { functie = 'lijn';
  
    }
  // punt geselecteerd?
  if (mouseIsPressed &&  mouseX > 265 && mouseX < 275 && mouseY < 15)
    { functie = 'punt';
    
    }
  // puntjes geselecteerd?
  if (mouseIsPressed &&  mouseX > 265 && mouseX < 275 && mouseY > 25 && mouseY < 50)
    { functie = 'puntjes'
   
    }
   
 // lijn dikte
 
  if (mouseIsPressed &&  (mouseX > 130 && mouseX < 200) && mouseY < 20)
    {
      if (mouseX > 130 && mouseX < 140) {dikte = 1}
      if (mouseX > 140 && mouseX < 150) {dikte = 2}
      if (mouseX > 150 && mouseX < 160) {dikte = 3}
      if (mouseX > 160 && mouseX < 170) {dikte = 4}
      if (mouseX > 170 && mouseX < 180) {dikte = 5}
      if (mouseX > 190 && mouseX < 200) {dikte = 6}
    }
 // gum geselecteerd
  if (mouseIsPressed &&  (mouseX > 220 && mouseX < 240) && mouseY < 25)
    {
       
      functie = 'gum'
    }
  
 // verwerken van de gekozen functie (gum/lijn/punt/puntjes)
  switch (functie) {
     // tekenen van een lijn
    case 'lijn': 
    //check dat niet de menu overschreven wordt!!!
    if (mouseIsPressed && mouseY > 50){
        stroke(kleur);   
        strokeWeight(dikte);
        if (pmouseY < 50) 
           {pmouseY = 50}
        line (pmouseX,pmouseY,mouseX,mouseY);
        }
    break;
  
    // tekenen van een punt
    case 'punt':
    if (mouseIsPressed && mouseY > 50){
       stroke(kleur); 
       strokeWeight(dikte);
       circle (mouseX,mouseY,dikte);
      }
     break;
  
   // tekenen van een puntjes
     case 'puntjes': 
    if (mouseIsPressed && mouseY > 55){
      
      stroke(kleur); 
      strokeWeight(dikte);
      circle (mouseX,mouseY-5,dikte);
      circle (mouseX+5,mouseY,dikte);
      circle (mouseX-5,mouseY,dikte);
    }
    break;
     // gum
    case 'gum': 
    if (mouseIsPressed && mouseY > 50){
    
      stroke('white');   
      //circle (mouseX,mouseY,10);
      strokeWeight(10);
      if (pmouseY < 50) 
         {pmouseY = 50}
         rect (mouseX,mouseY,10,10);
    }
    break;
  }
}

//leeg scherm
//default waardes 
function new_canvas(){
  canvas = true;
  functie = 'lijn';
  kleur = 'black';
  dikte = 1; 
}

//bewaren van de tekening
function bewaar(){
  save('tekening.png');
}

