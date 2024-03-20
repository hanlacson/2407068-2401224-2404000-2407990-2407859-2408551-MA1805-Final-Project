let tilemap = [];
let tileSize = 50;
let textures = [];
let currentLevel = dungeonObject;

const dungeonObject = {
    numAcross: 10,
    numDown: 10,

    graphicMap: [ 
    
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1]  
    ],

    tileRules: [ 
       
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1] 
    ]
}

const mainHallObject = {
    numAcross: 10,
    numDown: 10,

    graphicMap: [ 
    
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]    
    ],

    tileRules: [ 
       
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  
    ]
}

const thrownRoomObject = {
    numAcross: 10,
    numDown: 10,

    graphicMap: [ 
    
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
    ],

    tileRules: [ 
       
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
    ]
}

let levels = {
    dungeon: dungeonObject,
    mainHall: mainHallObject,
    thrownRoom: thrownRoomObject,
}

let transitionDungeonToMainHall = {
    linkedLevel: levels.corridor,
    startingXPos: 9* tileSize,
    startingYPos: 4* tileSize
}

let transitionMainHallToDungeon = {
    linkedLevel: levels.entrance,
    startingXPos: 0 * tileSize,
    startingYPos: 4 * tileSize
}

let transitionMainHalltoThrownRoom = {
    linkedLevel: levels.mainHall,
    startingXPos: 4 * tileSize,
    startingYPos: 9 * tileSize
}

let transitionThrownRoomtoMainHall = {
    linkedLevel: levels.corridor,
    startingXPos: 4 * tileSize,
    startingYPos: 0 * tileSize
}

function preload() {
    textures[0] = loadImage("assets/path.png");
    textures[1] = loadImage("assets/wall.png");
}

function setup() {
    createCanvas(500, 500);
    loadLevel(currentLevel);

    createTileMap();

}


function draw() {
    background(0);

    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display();
            tilemap[across][down].debug();
        }
    }
    
}


function loadLevel(levelToLoad) {
    currentLevel = levelToLoad;
    tilemap = []; // we need to wip our tilemap in case
    numAcross = levelToLoad.numAcross;
    numDown = levelToLoad.numDown;
    graphicMap = levelToLoad.graphicMap;
    tileRules = levelToLoad.tileRules;
    textures = levelToLoad.textures;
}

function createTileMap() {
    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize;
            let y = down * tileSize;
            let textureNum;
            textureNum = graphicsMap[down][across];
            console.log("My tileID is", tileID, "and my texture number is", textureNum);
            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID);

            tileID++;
        }
        console.log(graphicsMap[1][8]);
    }

    addTransitionsToTiles();
}

function addTransitionsToTiles() {
    if (currentLevel === entranceObject) {
        currentLevel.tileRules[9][4] = transitionDungeonToMainHall;
    }

    if (currentLevel === corridorObject) {
        currentLevel.tileRules[0][4] = transitionMainHallToDungeon;
        currentLevel.tileRules[4][9] = transitionMainHallToThrownRoom;
    }

    if (currentLevel === mainHallObject) {
        currentLevel.tileRules[4][0] = transitionThrownRoomToMainHall;
    }
}

function keyPressed() {
    if (key === 'l') {
        loadLevel(MainHallObject);
        createTileMap();
    }
    
}

class Tile {
    constructor(texture, x, y, tileSize, tileID) {
        this.texture = texture;
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        noStroke();
        image(this.texture, this.x, this.y, this.tileSize);
    }

    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.x, this.y, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        fill(255);
        textAlign(LEFT, TOP);
        
        text(this.tileID, this.x, this.y);
    }
 
}
