//variables
let crownSprite;
let message = "";
let showRectangle = false;
let crownTexture;

function preload() {
  // load crown png image
  crownTexture = loadImage('crown.png');
}

function setup() {
  // canvas with dimensions 500x500
  createCanvas(500, 500);
    // the sprite object
  crownSprite = new Crown();
}

function draw() {
  background(255,0,0,0);  // background color to transparent
  crownSprite.update(); //update sprite positioning
  crownSprite.display(); // display the sprite
  if (showRectangle) {
    sprite.displayRectangle();
  }
}

// sprite class = represents graphical sprite that moves and interacts with the user
class Crown {
  constructor() {
    // sprite's initial position, size and movement 
    this.x = width -200;
    this.y = 100;
    this.size = 100;
    this.angle = 0;
    this.amplitude = 10;
    this.frequency = 0.05;
  }

  update() { // update sprite's position based on its movement properties
    this.y = 200 + sin(this.angle) * this.amplitude;
    this.angle += this.frequency;
  }

  handleClick() { //click event
    message = "Unbelievable! you have managed to find the mighty Crown!";
    showRectangle = true;
  }

  display() {
    image(crownTexture, this.x, this.y, this.size, this.size);
  }


  displayRectangle() { // message below item rectangle/outline
    const rectPadding = 10;
    const rectX = width / 2 - textWidth(message) / 2 - rectPadding;
    const rectY = height - 60 - rectPadding;
    const rectWidth = textWidth(message) + 2 * rectPadding;
    const rectHeight = 30 + 2 * rectPadding;

    fill(255);
    rect(rectX, rectY, rectWidth, rectHeight);
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);
    text(message, width / 2, height - 45);
  }
}

function mousePressed() { //mouseclick function
  if (isInsideTriangle(mouseX, mouseY, sprite.x, sprite.y, sprite.size)) {
    sprite.handleClick();
  }
}

function isInsideTriangle(px, py, x, y, size) { // checks if a point is inside triangle 
  const d = dist(px, py, x, y + size); // calculates distance between the point and the base of the triangle
  return px >= x - size && px <= x + size && py >= y && py <= y + size && d <= size; // checks if the point is within the triangle's boundaries
}