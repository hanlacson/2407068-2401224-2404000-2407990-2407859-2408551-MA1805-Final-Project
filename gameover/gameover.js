let button1Image;
let button2Image;
let loseBackgroundImage;

function preload() {
  // own images for buttons and background
  loseBackgroundImage = loadImage('gameover.png');
  button1Image = loadImage('playagain.jpeg');
  button2Image = loadImage('mainmenu.jpeg');
}

function setup() {
  createCanvas(600, 600);

  drawGameOver();
}

function drawGameOver() {
  //  background image
  image(loseBackgroundImage, 0, 0, width, height);

  // button with image
  let button1 = createImg('playagain.jpeg');
  button1.position(100, 300);
  button1.size(150, 150); //  size of button
  button1.mousePressed(button1Clicked);

  // button with image
  let button2 = createImg('mainmenu.jpeg');
  button2.position(380, 300);
  button2.size(150, 150); //  size of button
  button2.mousePressed(button2Clicked);
}

function button1Clicked() {
  // redirect to game page to play again
  window.location.href = drawGame(); //location of game page
}

function button2Clicked() {
  // redirect to main/start menu page
 window.location.href = drawStartPage(); //location of main menu page
}