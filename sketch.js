//INITIALISE TITLE SCROLL VARIABLES
let img;
let scrollSpeed = 0.9;
let scrollPos;

let gameState = "start";
let startScreenImage; 

//INITIALISE TILEMAP VARIABLES
let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 60;

let textures = [];
let graphicsMap = [
    [16, 17, 39, 17, 33, 34, 17, 39, 17, 18, ],
    [19, 20, 40, 20, 35, 36, 20, 40, 20, 21, ],
    [31, 0, 1, 2, 47, 48, 2, 3, 37, 30, ],
    [31, 37, 0, 42, 0, 0, 0, 42, 7, 23, ],
    [32, 42, 0, 0, 0, 0, 0, 2, 41, 23, ],
    [22, 4, 0, 0, 0, 42, 42, 0, 7, 30, ],
    [22, 4, 0, 42, 0, 0, 41, 0, 11, 23, ],
    [31, 37, 0, 0, 41, 0, 0, 0, 7, 23, ],
    [31, 12, 42, 41, 0, 0, 0, 0, 41, 30, ],
    [24, 25, 25, 25, 28, 29, 26, 26, 26, 27, ]
]

let tileRules = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, ],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, ]
]

//INITIALISE PLAYER VARIABLES
let player;
let playerSprite;
let playerSpeed = 5;
let playerSize = tileSize;

//INITIALISE GOBLIN VARIABLES
let goblins = [];
let goblinSize = 30;
let numGoblins = 2;
let knights = [];
let knightSize = 30;
let numKnights = 2;
let lastSpriteChangeTime = 0;
const spriteChangeInterval = 190;

//INITIALISE ENEMY VARIABLES
let goblinSprite;
let goblinSprite1;
let goblinSprite2;
let knightSprite;
let knightSprite1;
let knightSprite2;

//INITIALISE CROWN VARIABLES
let crownSprite;
let showRectangle = false;
let crownTexture;

//INITIALISE TEXT VARIABLES
let textContent = "Dear Rebels,\n\nAs we stand on the edge of history, poised to reshape the destiny of \n\nour kingdom, I write to you with a heart filled with determination and hope. \n\nThe time has come for us to seize control and usher in a new era of \n\nprosperity under our rightful leadership. To achieve this noble goal, we \n\nmust embark on a journey filled with challenges and trials.\n\n \n\nOur quest is clear: we must acquire the three sacred objects that will \n\nlegitimize our claim to the throne– the Sceptre, the Robe, and the \n\nCrown. These artifacts hold immense power and significance, symbols of \n\nthe authority we seek to wield. Yet, they are not easily obtained. Each is \n\nguarded by formidable obstacles, designed to test our resolve and \n\nworthiness.\n\n \n\nThe Sceptre, a symbol of sovereignty and strength, lies hidden within the \n\ndepths of the deep, dark dungeons of the formidable fortress, protected \n\nby ancient traps and guardians.\n\n \n\nWhilst The Robe, imbued with the wisdom and guidance of our ancestors, \n\nis held a floor above the dungeons, within the main hall. To claim it, we \n\nmust navigate the treacherous maze of the winding corridors of the \n\nfortress, overcoming its barriers and outwitting its elusive protectors.\n\n \n\nFinally, the Crown, the ultimate symbol of royal authority, is safeguarded \n\nwithin the daunting throne room. Protected by the loyal forces of the \n\ncurrent regime, breaching its walls will demand courage, strategy, and \n\nsacrifice.\n\n \n\nKnow that the path ahead will be perilous, and the challenges we face \n\nwill test the very limits of our strength and determination. But as we set \n\nforth on this journey, let us stand united in purpose. Together, we shall \n\ndefy the odds, defy our oppressors, and carve our names into the annals \n\nof history as liberators and kings.\n\n \n\nIgor, Leader of the Rebellion"; // Your text content here

let customFont;
let backgroundImage;

//INITIALISE DAGGER VARIABLES
let daggerImage; 
let daggerVisible = false; 

///INITIALISE BUTTON VARIABLES
let menuBg;
let Title;

// GENERIC BUTTON VARIABLES
let buttonY = 420;
let buttonCentre = 55; 
let buttonSizeX = 575;
let buttonSizeY = 575;

// PLAY BUTTON VARIABLES
let playText;
let playButton;
let buttonHighlight;
let playButtonX = 45; 
let playButtonDistance; 
let inPlayButton = false; 

// HELP BUTTON VARIABLES
let returnToMenuButton;
returnToMenuButtonX = 235;
let inReturnToMenuButton = false;
let helpText;
let helpButton; 
let helpButtonX = 235;
let helpButtonDistance;
let inHelpButton = false;

// EXIT BUTTON VARIABLES
let exitText;
let exitButton; // ^ 
let exitButtonX = 420;
let exitButtonDistance;
let inExitButton = false;

// DIALOGUE VARIABLES
let inDialogue = false;
let dialogueBox;
let dialogueClick;
let font;
let character = 0;
let dialogueX = 60;
let dialogueY = 490;
let dialogueSize = 25;
let nameY = 455;
let nameSize = 30;
let spacer = 30;
let goblinDialogue = [". . . !", "A human?!", "You would make a delectable meal...", "Seize him!"]
let knightDialogue = ["Who goes there?", "An intruder!", "Knights, seize him!"];
let kingDialogue = ["So it is you...", "BEGONE!!!"];
var dialogueNum = 0;
let dialogueHasFinished = false;

// CUTSCENE VARIABLES
let isDoorOpen = false;
let isCutscene = true;


//INITIALISE WINPAGE VARIABLES
let endScrollSpeed = 0.9; 
let endScrollPos = 0;
let endTextContent = "Dear Rebels,\n\nI write to you today with a heart brimming with pride and gratitude, \n\nfor together, we have achieved the impossible. Our journey, fraught \n\nwith peril and uncertainty, has culminated in a victory that will echo \n\nthrough the annals of history – the overthrow of the tyrant king and \n\nthe dawn of a new era for our kingdom.\n\n\nWith unwavering courage and unwavering determination, we embarked on \n\na quest to reclaim our rightful place on the throne. Through the \n\ntreacherous depths of the Dungeons, the grandeur of the Main Hall, \n\nand the sanctity of the Throne Room, we faced challenges that tested our \n\nresolve and strength. Yet, with unity as our shield and justice as \n\nour sword, we emerged triumphant. \n\n\nAnd now, as I stand before you, I am filled with awe and reverence for \n\nthe courage and sacrifice each of you has displayed. Together, we have \n\nvanquished the darkness that gripped our land, casting aside the shackles \n\nof oppression and ushering in a new era of freedom and prosperity. \n\n\nTogether, we shall build a kingdom where justice reigns supreme, where \n\nevery voice is heard, and where freedom flourishes. And as we \n\nmarch forward into the future, let us never forget the journey \n\nthat brought us here – a journey of courage, sacrifice, and unwavering \n\ndetermination. \n\n\nWith deepest admiration and eternal gratitude, \n\nIgor, Leader of the Rebellion."; 

let endCustomFont;
let endBackgroundImage;
let popupImage;
let scrolledToEnd = false;
let textFullyScrolled = false;

function preload() {
    // DUNGEON TEXTURES
    // FIRST ROW OF PATH TEXTURES (relative to texture sample)
    textures[0] = loadImage("assets/dungeon/path/path_1a.png");
    textures[1] = loadImage("assets/dungeon/path/path_1b.png");
    textures[2] = loadImage("assets/dungeon/path/path_1c.png");
    textures[3] = loadImage("assets/dungeon/path/path_1d.png");
    // SECOND ROW OF PATH TEXTURES
    textures[4] = loadImage("assets/dungeon/path/path_2a.png");
    textures[5] = loadImage("assets/dungeon/path/path_2b.png");
    textures[6] = loadImage("assets/dungeon/path/path_2c.png");
    textures[7] = loadImage("assets/dungeon/path/path_2d.png");
    // THIRD ROW OF PATH TEXTURES
    textures[8] = loadImage("assets/dungeon/path/path_3a.png");
    textures[9] = loadImage("assets/dungeon/path/path_3b.png");
    textures[10] = loadImage("assets/dungeon/path/path_3c.png");
    textures[11] = loadImage("assets/dungeon/path/path_3d.png");
    // FOURTH ROW OF PATH TEXTURES
    textures[12] = loadImage("assets/dungeon/path/path_4a.png");
    textures[13] = loadImage("assets/dungeon/path/path_4b.png");
    textures[14] = loadImage("assets/dungeon/path/path_4c.png");
    textures[15] = loadImage("assets/dungeon/path/path_4d.png");
    
    // WALL TEXTURES
    // FIRST ROW OF WALL TEXTURES
    textures[16] = loadImage("assets/dungeon/wall/wall_1a.png");
    textures[17] = loadImage("assets/dungeon/wall/wall_1b.png");
    textures[18] = loadImage("assets/dungeon/wall/wall_1c.png");
    // SECOND ROW OF WALL TEXTURES
    textures[19] = loadImage("assets/dungeon/wall/wall_2a.png");
    textures[20] = loadImage("assets/dungeon/wall/wall_2b.png");
    textures[21] = loadImage("assets/dungeon/wall/wall_2c.png");
    // THIRD ROW OF WALL TEXTURES
    textures[22] = loadImage("assets/dungeon/wall/wall_3a.png");
    textures[23] = loadImage("assets/dungeon/wall/wall_3c.png");
    // FOURTH ROW OF WALL TEXTURES
    textures[24] = loadImage("assets/dungeon/wall/wall_4a.png");
    textures[25] = loadImage("assets/dungeon/wall/wall_4b.png");
    textures[26] = loadImage("assets/dungeon/wall/wall_4c.png");
    textures[27] = loadImage("assets/dungeon/wall/wall_4d.png");
    // FIFTH ROW OF WALL TEXTURES
    textures[28] = loadImage("assets/dungeon/wall/wall_5a.png");
    textures[29] = loadImage("assets/dungeon/wall/wall_5b.png");
    // SPECIAL WALL TEXTURES (barrel, skull, door)
    textures[30] = loadImage("assets/dungeon/wall/wall_3c_barrel.png");
    textures[31] = loadImage("assets/dungeon/wall/wall_3a_barrel.png");
    textures[32] = loadImage("assets/dungeon/wall/wall_3a_skull.png");
    textures[33] = loadImage("assets/dungeon/wall/wall_door_1a.png");
    textures[34] = loadImage("assets/dungeon/wall/wall_door_1b.png");
    textures[35] = loadImage("assets/dungeon/wall/wall_door_2a.png");
    textures[36] = loadImage("assets/dungeon/wall/wall_door_2b.png");

    // SPECIAL PATH TEXTURES (barrel, skull, bones)
    textures[37] = loadImage("assets/dungeon/path/path_barrel.png");
    textures[38] = loadImage("assets/dungeon/path/path_skull.png");
    textures[39] = loadImage("assets/dungeon/wall/wall_1b_banner.png");
    textures[40] = loadImage("assets/dungeon/wall/wall_2b_banner.png");
    textures[41] = loadImage("assets/dungeon/path/path_skull_bones.png");
    textures[42] = loadImage("assets/dungeon/path/path_bones.png");

    textures[43] = loadImage("assets/dungeon/wall/wall_door_1a_open.png");
    textures[44] = loadImage("assets/dungeon/wall/wall_door_1b_open.png");
    textures[45] = loadImage("assets/dungeon/wall/wall_door_2a_open.png");
    textures[46] = loadImage("assets/dungeon/wall/wall_door_2b_open.png");
    textures[47] = loadImage("assets/dungeon/path/path_door_2a_closed.png");
    textures[48] = loadImage("assets/dungeon/path/path_door_2b_closed.png");
    textures[49] = loadImage("assets/dungeon/path/path_door_2a_open.png");
    textures[50] = loadImage("assets/dungeon/path/path_door_2b_open.png");

    //player sprite
    playerSprite = loadImage("player images/player.png");

     // Image for the start screen
     startScreenImage = loadImage("assets/intro screen.png");

     // Custom font
     customFont = loadFont('assets/MinecraftRegular-Bmg3.otf');
 
     // Background image for the text content
     backgroundImage = loadImage('assets/Scroll Screen Background.png');
     
     // Title screen
     Title = loadImage("assets/Title.png");
    playButton = loadImage("assets/squareButton.png");
    buttonHighlight = loadImage("assets/buttonHighlightGreen.png");
    playText = loadImage("assets/playButtonText.png");
    helpButton = loadImage("assets/squareButton.png");
    helpText = loadImage("assets/helpButtonText.png");
    exitButton = loadImage("assets/squareButton.png");
    exitText = loadImage("assets/exitButtonText.png");
 
     // Load dagger image
     daggerImage = loadImage('player images/dagger.png');

     //goblin Sprites
    goblinSprite1 = loadImage("goblin images/goblin1.png");
    goblinSprite2 = loadImage("goblin images/goblin3.png");
    knightSprite1 = loadImage("knight images/knight 2.png");
    knightSprite2 = loadImage("knight images/knight 3.png");
    //crown sprite
    crownTexture = loadImage('ITEM - CROWN/crown.png');
    
    dialogueBox = loadImage("assets/dialogueBox.png");
    dialogueClick = loadImage("assets/dialogueClick.png");

  // Load the custom font
  endCustomFont = loadFont('assets/MinecraftRegular-Bmg3.otf');
  // Load the background image
  endBackgroundImage = loadImage('throne room.png');
  // Load the popup image
  popupImage = loadImage('You Won!.png');
// Load the main menu music
  mainMenuMusic = loadSound("mainMenuMusic.mp3");
// load help page images
    returnToMenuButton = loadImage("assets/returnToMenuButton.png");
    keybinds = loadImage("assets/keybinds.png");   
}

function setup() {
    createCanvas(600, 600);
    // Play the main menu music
    mainMenuMusic.setVolume(0.05);
    mainMenuMusic.loop();
    
    textSize(16);

    // Set the custom font
    textFont(customFont);

    // Set initial scroll position to the height of the canvas
    scrollPos = height;

    //Create the tilemap
    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
           
            let textureNum;
           textureNum = graphicsMap[down][across];
           tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID);

            tileID++;
        }
        player = new Player(playerSprite, 4, 2, tileSize, playerSpeed, tileSize, tileRules);

    }

  //creates goblin sprites to ramdomly spawn onto the tilemap
  for (let enemyCount = 0; enemyCount < numGoblins; enemyCount++) {
    let x = random(0, width); // Random X position
    let y = random((numDown - 3) * tileSize, numDown * tileSize); // Random Y position in the bottom 3 rows
    goblins[enemyCount] = new Enemy(goblinSprite1, x, y, goblinSize, tileRules);
}

for (let enemyCount = 0; enemyCount < numKnights; enemyCount++) {
    let x = random(0, width); // Random X position
    let y = random((numDown - 3) * tileSize, numDown * tileSize); // Random Y position in the bottom 3 rows
    knights[enemyCount] = new Knight(knightSprite1, x, y, knightSize, tileRules);
}

crownSprite = new Crown();

  // Set the custom font
  textFont(endCustomFont);

  // Calculate the total height of the text content
  let textHeight = textAscent() + textDescent() + textLeading();
  let fullTextHeight = textContent.split('\n').length * textHeight;

  // Set the initial scroll position to show the full text at the bottom
  endScrollPos = fullTextHeight - height;
}

function draw() {
    background(0);

    //starter page code
    if (gameState === "start") {
        drawStartPage();
    } else if (gameState === "text") {
        drawTextContent();
    } else if (gameState === "play") {
        drawGame();
    } else if (gameState === "cutscene") {
        drawCutscene();
    } else if (gameState === "win") {
        drawEndScrollPage();
    } else if (gameState === "help") {
        drawHelpPage();
    }
}

function keyPressed() {
    
    if (keyCode === 32) { // Space bar
        if (gameState === "start") {
            gameState = "text"; // Transition to text state
        } else if (gameState === "text") {
            gameState = "play"; // Transition to play state after text finishes scrolling
        } else if (gameState === "play") {
            player.setDirection(); 
        }
    }

    if (millis() - lastSpriteChangeTime > spriteChangeInterval) {
        for (let enemyCount = 0; enemyCount < numGoblins; enemyCount++) {
            goblins[enemyCount].switchSprite();
        }
        lastSpriteChangeTime = millis();
    }
   
    for (let enemyCount = 0; enemyCount < numGoblins; enemyCount++) {
        goblins[enemyCount].display();
    }
    player.setDirection(); //sets plaer to move with wasd keys
}   

function mouseClicked() {
    // Check if the mouse is clicked on the canvas
    if (gameState === "play" && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        // Toggle the visibility of the dagger
        daggerVisible = !daggerVisible;
    }

    if (gameState === "start") {
        if(inPlayButton){
            gameState = "text"; // Transition to text state
        } 
        if(inHelpButton){
            gameState = "help"; // Transition to help state
        }
        if(inExitButton){
            window.close(); // Close the window
        }
        

        } else if (gameState === "help") {
            if (inReturnToMenuButton){
                gameState = "start";
            }
        }else if (gameState === "text") {
            gameState = "cutscene"; // Transition to play state after text finishes scrolling
            
        } else if (gameState === "cutscene") {
            if (inDialogue) { 
                if (hasFinished){ //if the dialogue has finished, move onto the next dialogue
                    character = 0; //resets the character count to 0
                    dialogueNum++; 
                    dialogue(goblinDialogue[dialogueNum]) 
                }
             }
        } else if (gameState === "cutscene") { //transition to win when the crown is clicked on
            gameState = "win";
        } 
        if (isInsideTriangle(mouseX, mouseY, crownSprite.x, crownSprite.y, crownSprite.size)){ // get to and click on the crown to win
            gameState = "win";

          }
        }

        
function drawHelpPage() {
    // Draw the background image for the start screen
    image(startScreenImage, 0, 0, width, height);
    //Display the keybinds and the return to menu button
    image(keybinds, 75, 120, 450, 450);
    image(returnToMenuButton, returnToMenuButtonX, buttonY, 120, 120);
    // Check if the mouse is over the return to menu button
    buttonDistance = dist(returnToMenuButtonX + buttonCentre, buttonY + buttonCentre, mouseX, mouseY); // calculate the distance between centre of button and the mouse
    if (buttonDistance <= 50){   
        inReturnToMenuButton = true;
    }else{
        inReturnToMenuButton = false;
    
    }
    
}
function drawStartPage() {
    // Draw the background image for the start screen
    image(startScreenImage, 0, 0, width, height);

    // Draw the title
    image(Title, 70, 20, 500, 200);

        // PLAY BUTTON
        displayButton(playButton, playButtonX, buttonY, buttonSizeX, buttonSizeY, playText, playButtonX + 25, buttonY + 40, buttonHighlight, inPlayButton);
        displayButton(helpButton, helpButtonX, buttonY, buttonSizeX, buttonSizeY, helpText, helpButtonX + 25, buttonY + 40, buttonHighlight, inHelpButton);
        displayButton(exitButton, exitButtonX, buttonY, buttonSizeX, buttonSizeY, exitText, exitButtonX + 25, buttonY + 40, buttonHighlight, inExitButton);
}

function drawTextContent() {
    // Draw the background image for the text content
    image(backgroundImage, 0, 0, width, height);

    // Set text properties
    textSize(15); // Set text size to 16 for the text content
    fill(255);
    textFont(customFont);

    // Calculate the height of the text content
    let textHeight = textContent.split('\n').length * textSize();

    // Calculate the y-position for the text to be centered vertically
    let yPos = height / 2 - textHeight / 2 + scrollPos;

    // Draw the text at the calculated position
    text(textContent, 30, yPos); //XPos, YPos

    // Update scroll position
    scrollPos -= scrollSpeed;

    // Reset scroll position when it exceeds the total height of the text content
    if (scrollPos < -textHeight) {
        gameState = "cutscene"; // Transition to play state after text finishes scrolling
    }
}

function drawGame() {
    background(0);
    //draws the first level/stage of the game
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display();
            tilemap[across][down].debug();
        }
    }
    player.display();
    player.move();

    if (daggerVisible) {
        // Draw the dagger at the player's position
        image(daggerImage, player.xPos, player.yPos, player.size, player.size);
    }

    //draws goblins onto to the dungeon level
    for (let enemyCount = 0; enemyCount < numGoblins; enemyCount++) {
        goblins[enemyCount].display();
        goblins[enemyCount].update();
    }

    // Draw the knights
    for (let enemyCount = 0; enemyCount < numKnights; enemyCount++) {
        knights[enemyCount].display();
        knights[enemyCount].update();
    }
        crownSprite.update();
  crownSprite.display();
    }

function drawCutscene() {
    if(isCutscene){ //the door will open & close and the goblin will initiate dialogue
        inDialogue = false;


        for (let across = 0; across < numAcross; across++) {
            for (let down = 0; down < numDown; down++) {
                tilemap[across][down].display();
                tilemap[across][down].debug();
            }
        }
        // after a certain amount of time, draw the door opening
        setTimeout(drawOpenDoor, 1000);
    
        if(isDoorOpen == true){
            setTimeout(player.display(), 4000); // the play appearing alongside the opened door
            setTimeout(drawClosedDoor, 1000); // and then the door closing
            setTimeout(inDialogue = true, 10000); // then initiate dialogue
        }
    
        // run the dialogue
        if(inDialogue){
            if (dialogueNum < goblinDialogue.length) {
                dialogue(goblinDialogue[dialogueNum], "Goblin");
            }else if (dialogueNum == goblinDialogue.length) {
                inDialogue = false;
                isCutscene = false;
                gameState = "play";
            }
        }
    
    }
}

function drawGraphicsMap(graphicsMap){
    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
           
            let textureNum;
           textureNum = graphicsMap[down][across];
           tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID);

            tileID++;
        }
    }
}

function drawOpenDoor() { //replaces the graphics map to show the open door
    isDoorOpen = true;
    
    let graphicsMapOpen = [
        [16, 17, 39, 17, 43, 44, 17, 39, 17, 18, ],
        [19, 20, 40, 20, 45, 46, 20, 40, 20, 21, ],
        [31, 0, 1, 2, 49, 50, 2, 3, 37, 30, ],
        [31, 37, 0, 42, 0, 0, 0, 42, 7, 23, ],
        [32, 42, 0, 0, 0, 0, 0, 2, 41, 23, ],
        [22, 4, 0, 0, 0, 42, 42, 0, 7, 30, ],
        [22, 4, 0, 42, 0, 0, 41, 0, 11, 23, ],
        [31, 37, 0, 0, 41, 0, 0, 0, 7, 23, ],
        [31, 12, 42, 41, 0, 0, 0, 0, 41, 30, ],
        [24, 25, 25, 25, 28, 29, 26, 26, 26, 27, ]
        
    ]
    drawGraphicsMap(graphicsMapOpen);
}

function drawClosedDoor() { //replaces the graphics map to show the closed door
    let graphicsMapClosed = [
        [16, 17, 39, 17, 33, 34, 17, 39, 17, 18, ],
        [19, 20, 40, 20, 35, 36, 20, 40, 20, 21, ],
        [31, 0, 1, 2, 47, 48, 2, 3, 37, 30, ],
        [31, 37, 0, 42, 0, 0, 0, 42, 7, 23, ],
        [32, 42, 0, 0, 0, 0, 0, 2, 41, 23, ],
        [22, 4, 0, 0, 0, 42, 42, 0, 7, 30, ],
        [22, 4, 0, 42, 0, 0, 41, 0, 11, 23, ],
        [31, 37, 0, 0, 41, 0, 0, 0, 7, 23, ],
        [31, 12, 42, 41, 0, 0, 0, 0, 41, 30, ],
        [24, 25, 25, 25, 28, 29, 26, 26, 26, 27, ]
    ]
    drawGraphicsMap(graphicsMapClosed);
}

function dialogue(string, name) { // shows the inputted string letter by letter inside the dialogue box.
    inDialogue = true
    image(dialogueBox, 0, 0, 600, 600);
    // uses substring to show letter by letter
    let substring = string.substring(0, character);

    fill(255);
    textFont(customFont);
    textSize(nameSize);
    text(name, dialogueX, nameY);
    textSize(dialogueSize);
    text(substring, dialogueX, dialogueY, width - spacer*2.5, height); // Ensures the text max width is within the dialogue box
  
    character += 0.3; // increases the current character at a slower speed.

    if (substring == string){ 
        hasFinished = true;
        image(dialogueClick, 0, 0, 600, 600);
    }else{
        hasFinished = false;
    }
}

function displayButton(buttonType, x, y, buttonSizeX, buttonSizeY, buttonText, textX, textY, buttonHighlight, inButton) {
    image(buttonType, x, y, buttonSizeX, buttonSizeY);
 
    buttonDistance = dist(x + buttonCentre, y + buttonCentre, mouseX, mouseY); // calculate the distance between centre of button and the mouse
    if (buttonDistance <= 50){   // if the distance is less than 50, the mouse is over the button
        
        if(buttonType == playButton){
            inPlayButton = true;
            
        }else{
            inPlayButton = false;
        }
        
        if(buttonType == helpButton){
            inHelpButton = true;
        }else{
            inHelpButton = false;
        }
        
        if(buttonType == exitButton){
            inExitButton = true;
        }else{
            inExitButton = false;
        }

        if(buttonType == returnToMenuButton){
            inReturnToMenuButton = true;
        }else{
            inReturnToMenuButton = false;
        }

        image(buttonHighlight, x, y, buttonSizeX, buttonSizeY); // if the mouse is over the button, draw the highlighted button
    }
    image(buttonText, textX, textY, 90, 50); // draw the text on the button
}

function drawEndScrollPage() {
    // Draw the background image
    image(endBackgroundImage, 0, 0, width, height);
  
    // Draw the text at the current scroll position
    let yPos = -endScrollPos;
    fill(255);
    textSize(15);
    text(endTextContent, 30, yPos);
  
    // Update scroll position
    endScrollPos += endScrollSpeed;
  
    // Check if all text is scrolled off the screen
    if (endScrollPos >= 0 && !textFullyScrolled) {
      textFullyScrolled = true;
    }
  
    // If all text is scrolled off the screen, display the popup image
    if (textFullyScrolled) {
      image(popupImage, 0, 0, width, height);
    }
  
    // Reset scroll position when it exceeds the total height of the text content
    if (endScrollPos > endTextContent.split('\n').length * textSize()) {
      endScrollPos = -height;
      textFullyScrolled = false; // Reset the textFullyScrolled flag
    }
  }

class Tile {
    constructor(texture, across, down, tileSize, tileID) {
        this.texture = texture;
        this.across = across;
        this.down = down;
        this.xPos = across * tileSize;
        this.yPos = down * tileSize;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        noStroke();
        image(this.texture, this.xPos, this.yPos, this.tileSize);
    }

   debug() {}
}

class Player {
    constructor(sprite, startAcross, startDown, size, speed, tileSize, tileRules) {
        this.sprite = sprite;
        this.across = startAcross;
        this.down = startDown;
        this.size = size;
        this.speed = speed;
        this.tileSize = tileSize;
        this.tileRules = tileRules;
        this.xPos = this.across * tileSize;
        this.yPos = this.down * tileSize;

        this.dirX = 0;
        this.dirY = 0;

        this.isMoving = false;
        
        this.tx = this.xPos;
        this.ty = this.yPos;
    }

    setDirection() {
        //sets player controls
        if (!this.isMoving) {
            //UP
            if(key === "w") { //UP
                this.dirX = 0;
                this.dirY = -1;
            }
            //DOWN
            if(key === "s") { //DOWN
                this.dirX = 0;
                this.dirY = 1;
            }
            //LEFT
            if(key === "a") { //LEFT
                this.dirX = -1;
                this.dirY = 0;
            }
            //RIGHT
            if(key === "d") { //RIGHT
                this.dirX = 1;
                this.dirY = 0;
            }

            this.checkTargetTile();    
        }
    } 

    checkTargetTile() {
        this.across = Math.floor(this.xPos / this.tileSize);
        this.down = Math.floor(this.yPos / this.tileSize);
    
        let nextTileHorizontal = this.across + this.dirX;
        let nextTileVertical = this.down + this.dirY;
    
        if (
            nextTileHorizontal >= 0 &&
            nextTileHorizontal < numAcross &&
            nextTileVertical >= 0 &&
            nextTileVertical < numDown
        ) {
            // Check if the next tile is a trap tile (skull or bones)
            if (
                graphicsMap[nextTileVertical][nextTileHorizontal] === 41 ||
                graphicsMap[nextTileVertical][nextTileHorizontal] === 42
            ) {
                // Player steps on a trap tile, trigger death
                this.playerDied();
            } else if (tileRules[nextTileVertical][nextTileHorizontal] != 1) {
                this.tx = nextTileHorizontal * tileSize;
                this.ty = nextTileVertical * tileSize;
    
                this.isMoving = true;
            }
        }
    }
    
    playerDied() {
        // Reset player position or perform any other actions when the player dies
        console.log("Player died!");
        // Example: Reset player position to starting position
        this.xPos = this.startAcross * this.tileSize;
        this.yPos = this.startDown * this.tileSize;
    }
    
    move() {
        if(this.isMoving) {
            this.xPos += this.speed * this.dirX;
            this.yPos += this.speed * this.dirY;

            // Check for collisions with goblins
            for (let i = 0; i < goblins.length; i++) {
                let distance = dist(this.xPos, this.yPos, goblins[i].x, goblins[i].y);
                if (distance < this.size / 2 + goblins[i].size / 2) {
                    // Player collides with a goblin, trigger player death
                    this.playerDied();
                }
            }

            if(this.xPos === this.tx && this.yPos === this.ty) {
                this.isMoving = false;
                this.dirX = 0;
                this.dirY = 0;
            }
        }
    }

display() {
    imageMode(CORNER);
    image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    }
}

class Enemy{
    constructor(sprite, x, y, size, speed) {
        this.sprite = sprite;
        this.sprites = [goblinSprite1, goblinSprite2];
        this.currentSpriteIndex = 0;
        this.x = x;
        this.y = y;
        this.targetX = 8;
		this.targetY = 8;
        this.size = 100, 100;
        this.speed = 0.5
        this.direction = 'right';
        this.player = player;
        this.tileRules = tileRules;
    }

    display() {
        if (this.direction === 'left') {
            // Flip horizontally
            scale(-1, 1);
            image(this.sprite, -this.x - this.size, this.y, this.size, this.size);
            scale(-1, 1); // Reset scale
        } else {
            image(this.sprite, this.x, this.y, this.size, this.size);
        }
        this.update();
    
}

       update() {
        let dx = this.player.xPos - this.x;
        let dy = this.player.yPos - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let nextTileHorizontal = Math.floor((this.x + dx * this.speed) / tileSize);
        let nextTileVertical = Math.floor((this.y + dy * this.speed) / tileSize);
        
        dx /= distance;
        dy /= distance;
        
        if (
            nextTileHorizontal >= 0 && // Top of map
            nextTileHorizontal < numAcross &&
            nextTileVertical >= 0 &&
            nextTileVertical < numDown &&
            tileRules[nextTileVertical][nextTileHorizontal] != 1
        ) {
            this.x += dx * this.speed;
            this.y += dy * this.speed;
        } else {
        }

        if (dx > 0) {
            this.direction = 'right';
        } else {
            this.direction = 'left';
        }

        if(distance < this.size / 2 + this.player.size/2) {
            this.player.playerDied();
        }
    }

    switchSprite() {
        this.currentSpriteIndex = (this.currentSpriteIndex + 1) % this.sprites.length;
        this.sprite = this.sprites[this.currentSpriteIndex];
    }
}

class Knight extends Enemy {
    constructor(sprite, x, y, size, speed) {
        super(sprite, x, y, size, speed);
        this.size = 150, 150;
        this.speed = 0.5
        this.sprites = [knightSprite1, knightSprite2]; 
        this.currentSpriteIndex = 0;
        this.direction = 'right';
        this.player = player; 
        this.lastSpriteChangeTime = 0;
        this.spriteChangeInterval = 190;
        this.tileRules = tileRules;
    }

    display() {
        
        if (this.direction === 'left') {
            // Flip horizontally
            scale(-1, 1);
            image(this.sprite, -this.x - this.size, this.y, this.size, this.size);
            scale(-1, 1); 
        } else {
            image(this.sprite, this.x, this.y, this.size, this.size);
        }
        this.update();
    }

    update() {
        let dx = this.player.xPos - this.x;
        let dy = this.player.yPos - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let nextTileHorizontal = Math.floor((this.x + dx * this.speed) / tileSize);
        let nextTileVertical = Math.floor((this.y + dy * this.speed) / tileSize);

        dx /= distance;
        dy /= distance;

        if (
            nextTileHorizontal >= 0 && // Top of map
            nextTileHorizontal < numAcross &&
            nextTileVertical >= 0 &&
            nextTileVertical < numDown &&
            tileRules[nextTileVertical][nextTileHorizontal] != 1
        ) {
            this.x += dx * this.speed;
            this.y += dy * this.speed;
        } else {
           
        }
        
        if (dx > 0) {
            this.direction = 'right';
        } else {
            this.direction = 'left';
        }
         
        if(distance < this.size / 2 + this.player.size/2) {
            this.player.playerDied();
        }

        if (millis() - this.lastSpriteChangeTime > this.spriteChangeInterval) {
            this.switchSprite();
            this.lastSpriteChangeTime = millis();
        }
    }

    switchSprite() {
        this.currentSpriteIndex = (this.currentSpriteIndex + 1) % this.sprites.length;
        this.sprite = this.sprites[this.currentSpriteIndex];
    }
}

class Crown {
    constructor() {
      this.x = 250;
      this.y = 100;
      this.size = 100;
      this.angle = 0;
      this.amplitude = 10;
      this.frequency = 0.05;
    }
  
    update() {
      this.y = 500 + sin(this.angle) * this.amplitude;
      this.angle += this.frequency;
    }

    handleClick() {
        gameState = "win";
        drawEndScrollPage();
        
      }
  
    display() {
      image(crownTexture, this.x, this.y, this.size, this.size);
    }
  }

  function isInsideTriangle(px, py, x, y, size) {
    const d = dist(px, py, x, y + size);
    return px >= x - size && px <= x + size && py >= y && py <= y + size && d <= size;
  }