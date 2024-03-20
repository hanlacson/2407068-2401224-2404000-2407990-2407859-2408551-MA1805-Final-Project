// variables
let sprite;
let message = "";
let showRectangle = false;
let img;

function preload() {
  // 
  img = loadImage('cape.png');
}

function setup() {
  // canvas with dimensions 500x500
  createCanvas(500, 500);
  // the sprite object
  sprite = new Sprite();
  smooth();
}

function draw() {
  // background color to transparent
  background (255,0,0,0);
  // update sprite's position
  sprite.update();
  // display sprite
  sprite.display();
  // if showRectangle flag is true, display the rectangle
  if (showRectangle) {
    sprite.displayRectangle();
  }
}

// sprite class = represents graphical sprite that moves and interacts with the user
class Sprite {
  constructor() {
    // sprite's initial position, size and movement 
    this.x = width - 450;
    this.y = -40;
    this.size = 120;
    this.angle = 4;
    this.amplitude = 2;
    this.frequency = 0.05;
  }

  // update sprite's position based on its movement properties
  update() {
    this.y = 200 + sin(this.angle) * this.amplitude;
    this.angle += this.frequency;
  }

  // click event
  handleClick() {
    // message popup upon finding item
    message = "Congratulations! You found the first item: the Cape! Hang in there, there's 2 more to go.";
    showRectangle = true;
  }

  // sprite is a red triangle for now as issues with image/assets
    display() {
    image(img, this.x, this.y, this.size, this.size);
  }

  // message below item rectangle/outline
  displayRectangle() {
    const rectPadding = 10;
    const rectX = width / 2 - textWidth(message) / 2 - rectPadding;
    const rectY = height - 60 - rectPadding;
    const rectWidth = textWidth(message) + 2 * rectPadding;
    const rectHeight = 30 + 2 * rectPadding;

    fill(255);
    rect(rectX, rectY, rectWidth, rectHeight);
    fill(0);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(message, width / 2, height - 45);
  }
}

// mouse click function
function mousePressed() {
  // if function for the mouse click if inside the triangle
  if (isInsideTriangle(mouseX, mouseY, sprite.x, sprite.y, sprite.size)) {
    // handleClick() method
    sprite.handleClick();
  }
}

// checks if a point is inside triangle 
function isInsideTriangle(px, py, x, y, size) {
  // calculates distance between the point and the base of the triangle
  const d = dist(px, py, x, y + size);
  // checks if the point is within the triangle's boundaries
  return px >= x - size && px <= x + size && py >= y && py <= y + size && d <= size;
}