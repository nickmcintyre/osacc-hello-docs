 let font;
 let slide = welcome;
 let links;

 function preload() {
   font = loadFont('assets/Inconsolata.otf');
 }

 function setup() {
   createCanvas(windowWidth, windowHeight);

   links = createDiv();
   links.hide();

   textAlign(CENTER, CENTER);
   textFont(font);
 }

 function draw() {
  slide();
 }

 function keyPressed() {
  if (key === '0') {
    welcome();
  } else if (key === '1') {
    slideOne();
  } else if (key === '2') {
    slideTwo();
  } else if (key === '3') {
    slideThree();
  } else if (key === '4') {
    slideFour();
  } else if (key === '5') {
    slideFive();
  } else if (key === '6') {
    questions();
  } else if (key === '7') {
    final();
  }
 }

 function welcome() {
  background(50);
  fill(255);
  noStroke();

  textSize(64);
  text('Hello, Docs!', width * 0.5 , height * 0.5);

  textSize(48);
  text('Getting started with documentation', width * 0.5 , height * 0.6);

  slide = welcome;
 }

 function slideOne() {
  background(50);
  fill(255);
  noStroke();

  textSize(64);
  text("Hi, we're Greg and Nick!", width * 0.5 , height * 0.5);

  slide = slideOne;
 }

 function slideTwo() {
  background(50);
  fill(255);
  noStroke();

  textSize(64);
  text('Two big questions:', width * 0.5 , height * 0.4);

  push();
  textSize(48);
  textAlign(LEFT, CENTER);
  text('1. Why are you writing documentation?', width * 0.22 , height * 0.55);
  text('2. How will you write your docs?', width * 0.22 , height * 0.65);
  pop();

  slide = slideTwo;
 }

 function slideThree() {
  background(50);
  fill(255);
  noStroke();

  push();
  textSize(48);
  textAlign(LEFT, CENTER);
  text('Why?', 48, 48);
  pop();

  push();
  textSize(64);
  text('Who will read your docs?\nWhat do they need?', width * 0.5 , height * 0.5);
  pop();

  slide = slideThree;
 }

 function slideFour() {
  background(50);
  fill(255);
  noStroke();

  push();
  textSize(48);
  textAlign(LEFT, CENTER);
  text('How?', 48, 48);
  pop();

  push();
  textSize(64);
  text('What form will your docs take?\nWhat do you need to write well?', width * 0.5 , height * 0.5);
  pop();

  slide = slideFour;
 }

 function slideFive() {
  background(50);
  fill(255);
  noStroke();

  push();
  textSize(48);
  textAlign(LEFT, CENTER);
  text('Write!', 48, 48);
  pop();

  push();
  textSize(32);
  textAlign(LEFT, CENTER);
  text("1. Plan an audit of your project's existing documentation.", width * 0.05 , height * 0.3);
  text("2. Create/remix style guides for writing and example code.", width * 0.05 , height * 0.4);
  text('3. Make one "easy" and one "difficult" API reference more accessible.', width * 0.05 , height * 0.5);
  text('4. Create 2 or 3 new examples that could introduce the rest of the conference \n   attendees to your project.', width * 0.05 , height * 0.62)
  pop();

  slide = slideFive;
 }

 function questions() {
  background(50);
  fill(255);
  noStroke();

  textSize(64);
  text('Questions?', width * 0.5 , height * 0.5);

  slide = questions;
 }

 function final() {
  background(50);
  fill(255);
  noStroke();

  textSize(64);
  text('Thanks!', width * 0.5 , height * 0.5);

  slide = final;
 }

 function doubleClicked() {
  let fs = fullscreen();
  fullscreen(!fs);
 }

 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 }