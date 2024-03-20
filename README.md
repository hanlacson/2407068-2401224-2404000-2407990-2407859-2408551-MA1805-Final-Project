# REIGN OF REBELS

## BY DUNGEON DEFENDERS
## MEMBERS: 
Allyssa Rose Dacanay- 2407068, 

Saleha (Suha) Uddin- 2401224, 

Han Lacson- 2404000, 

Imogen Kingston- 2407990, 

Amelia Harrison- 2407859 ,

Anna Kuangnarin- 2408551

## OVERVIEW OF OUR GAME: 
 In our game “Reign of Rebels” the player takes on the role of a rebel aiming to overthrow the ruler and place their leader on the throne. To achieve this, they must embark on a quest to steal three sacred objects – a Sceptre, a Robe, and a Crown – each held in a different location, which would be the Dungeons, Main Hall and the Throne Room, each guarded by a series of obstacles and trials. 

Each object is essentially a level in the game, once the player manages to obtain an object required to overthrow the ruler, they move onto another stage where they repeat the whole process, except they manage to acquire another piece of the three objects; until they get to the final stage, where they face the King (who is the ultimate boss of the game), and secure the King crown.

## ROLES & INDIVIDUAL CONTRIBUTIONS
**Han: Main Coder/ Maps Coder-**
My role in this project is coding the tilemap, fixing any bugs/issues within the code and, in response to our prototype's feedback, I had organised our folders. I also had the responsibility of managing the GitHub repository and ensuring all group members had access to it. 

The code I have contributed is initialising the tilemap variables alongside the tileRules of the code. I also coded the Tile class. Furthermore, I had helped with merging the player code, crown code and some of the goblins code into the sketch.js. I had also merged the Win/EndScrollPage code into the sketch.js.

The issues I was able to fix were the positioning of the scrollpage text to be aligned to the centre so it was completely visible; the player was not moving when we first merged the player code and I was able to fix this issue within the keyPressed function. I also fixed an issue with linking the end scroll page and the crown. I had also adjusted the tileSize and Canvas size to fix the proportions of the graphic/ images shown. 

An issue I was not able to resolve was coding the two next level maps of the game. I attempted to do the transitions between rooms within my branch (Han-branch), however it would not work when opening up onto the live server. I had tried looking at the console and the example on gitHub but it came up with the same issue - the lexical declaration 'currentLevel' cannot be accessed before initialisation. I was unsure what to do to fix this in my code. 

Overall, I enjoyed fixing issues with the main code and organising our folders as it was very satisfying to tidy up and reslove our code to work together for the game. 

**Imogen: Designer for enemy sprites/ Coder for enemy sprites-** 
For this project I have taken the role of both coding for and making sprites for the enemies. I drew sprites for multiple enemies and coded them so they move and follow the player and cause a game over if they collide. I had created three classes for the three enemies (goblins, knights and the king), and coded an animation loop for the goblins and knights to appear walking.

An issue i struggled with was making the enemies not collide with the wall tiles, which i failed to prevent. Additionally I had to alter the enemies spawn positions so they would not immediately kill the player, which i did sucessfully, restricting their area of spawn to the bottom rows of the map.

Due to the game not having multiple maps,space was limited so there is only two enemies included in the game (we intended to have different enemies per stage) however the code for the king enemy can be found within my branch (Imogen-File).

Overall i enjoyed getting to draw sprites and animating them for the game, and i found it satisfying when the code was successful. The project has helped me broaden my understanding of javascript.

**Allyssa: Story writer/Coder for player, scroll message screen, tile traps, winning screen-**
I have taken on the role of creating the narrative of the game where I sort of proposed the basis of the backstory of the entire game, which is essentially the whole idea of a rebellion attempting the overthrow the king. But in order to do this, they must obtain these three objects which are each contained in three different locations within the king's fortress. In order to introduce this narrative to the players of the game, I have created a scroll which will be presented right before the player enters the first level of the game, and it contains a message from the leader of this rebellion group, explaining to the player the main objective of the game and what they'll be facing in order to achieve the goal of overthrowing the king.

I have also contributed to the code so that the player is able to move around the tilemap by pressing the WASD keys, by importing the character design Amelia had made and implementing some of the code learnt from week 17 to achieve this. I have also managed to code it so that whenever the player left clicks, the dagger then pops up on the character. Additionally to this, I have further developed Anna's bones and skulls assets on the map, but adding a few more, as well as coding it so that whenever the player steps on it, it is instant death and game over. I had also coded to basis of the intro screen when Anna and Amelia had not fully developed the game design of the intro screen, and had combined all the intro screen, scroll screen and the game code earlier on in the process. Lastly, I had also coded the winning screen by again, combining Amelia's and Suha's game desgin/Art Work; and had also assisted Suha in coding the buttons of the game over screen. 

Overall, I have enjoyed the process of creating the narrative a lot, as well as coding the scoll message page, the moving character, the dagger and the tile traps; as I was able to both develop my coding skills as well as use my passion for fictional storytelling. 

**Suha: Designer for items/ Coder for Items, some dialogue-**


**Anna: Designer for assets/ Coder for Story, Map Assets, some dialogue-**
I took on the initial role of designing the decorative world assets, such as the barrels, skeletons, and banners to add depth to the environment. I then resized and loaded in all of Amelia's tilemap textures, as well as rewrote the graphicsMap to display them, some with my assets on top. I also assisted Amelia in the making of the main menu screen, including the making of the button function.

I had also coded a simple dialogue system, which displays the dialogue box, dialogue click animation, and the text to be shown within it. The function then incrementally shows the letters in each string as to mimic proper speech. In the end, I created a new Cutscene function to show the dialogue sequence in as well as allowing me to create a mini animation of showing the front door opening and closing along with the player appearing, which included creating a new gameState as I had encountered a bug where the goblins would not move correctly if I used to functions in the "play" gameState. The door animation was created simply by scheduling a change in the graphicsMap using the SetTimeout() function.

Most problems I had encountered and managed to resolve included the combination of my own code along with other peoples'. This meant understanding how each person's chunk of code worked in order to interact seamlessly with my own, such as using the tileMaps and play.display(); for my beginning cutscene, or connecting the main menu buttons to Allyssa's scroll. Ultimately, this helped further my understanding of computational thinking deeply.

Overall, I enjoyed the process of creating immersion through both the decorative assets and animation, given more time I would've liked to add depth through futher dialogue and animation to the other levels in a similar way. The project has helped me develop my passion for bringing worlds to life as well as my understanding of javascript.

**Amelia: Designer for character, tile maps/ Coder for Intro screen, story-**
I took on several roles in bringing our game to life, each serving as a refuge during a challenging time in my life. As the creator of the main pixel art, I found solace in meticulously crafting each visual element. Over the time period, I struggled with mental health, but immersing myself in the intricate details of pixel art allowed me to momentarily escape from those challenges. Through the process of bringing characters and environments to life, I discovered a therapeutic outlet that enabled me to find moments of peace and focus amidst the chaos.
Beyond the artwork, I also delved into crafting the game's narrative, a task that provided both distraction and fulfillment. Conceptualizing the storyline and character arc allowed me to channel my creative energy into something constructive, offering a sense of purpose during difficult times.
In addition, coding the menu buttons provided a tangible way to channel my energy and distract myself from the struggles I faced. By focusing on the technical intricacies of navigation systems and user interfaces, I could temporarily set aside my own worries and immerse myself in the world of game development.
I struggled quite alot when it came to allowing my VS Code to work on my pc so I'm incredibly grateful for Anna helping me out when I really panicked. I also had some music made by one of my friends just to add to the story; helping him out with his own project too.I really have learnt so much about coding and structuring a game design alone; but I've really been inspired and pushed by the rest of the group being influences and inspired by their efforts. I really enjoyed this project.
Overall, my involvement in the game's creation served as a therapeutic journey, allowing me to take my mind off my struggles with mental health and find moments of respite through creativity and focus. Despite the challenges I faced, the process of bringing our game to life provided a sense of accomplishment and purpose that helped me navigate through those difficult times.
If I had mroe time, I would've created a king character and third room with its only final boss appearance and theme; pixel art is something I really underrestimated as the time it took to created some of my art work was mentally and physically exhausting and I respect people who do it consistently. Id also of liked to code in a bit more and experiment with my abilities in coding; especially with helping out more on character movement and game over screen; however that is where my anxiety set in and Im so grateful for my team stepping in to boost me with confidence.Also when it came closer to the deadline and I worked from home I was unable to add code comments or even see the updated code so I really struggled with implimenting my code.

## THEMES
Theme of Dungeons, Rebellion, Monarchy, etc. We're essentially aiming for a dark, scary atmosphere/mood within the game. 

## GAME DESIGN: 
**Level Structures:** The game consists of multiple levels, each representing a different area within the ruler's fortress. One of the levels include the Dungeons, which is where the player will face the task of defeating several enemies and obstacles in order to obtain the sceptre. After successfully getting through this level, the player then moves onto the next level, which would be the main hall, where they would again have to face multiple enemies and obstacles protecting the cape. Once they get to the final level, which is the throne room, they are then not only faced with the enemies and obstacles, they are also faced with the King, who is the ultimate boss of the entire game. 

**Control Keys/Movement/Combat:** The user will be able to use the cursor to left click on the buttons on the intro screen, then they are also able to use left click or spacebar to skip the scroll screen. 

The player will be able to use the WASD keys to move the character around; and since they will be engaging in combat with various enemies, they would be able to use a knife by left clicking to get the dagger up on the screen. If the player also steps on any of the tiles that has the skull and bones on it, it is an instant death.

Once the player manages to get on the same tile as the crown, the player can click on the crown and they would immediatley be taken to the winnner screen. 

## A NOTE FROM US- 
Although we initially aimed to code 3 levels where each item would be held, we unfortunately did not manage to code all three and only coded the first level due to several challenges we had encountered, such as some peoples codes not functioning; and coding the first level was too time consuming. We also unfortunetley did not manage to get the combat aspect of the game to function, Allyssa and Imogen both attempted to code this but was both unsuccessful. 

Therefore, since we didn't manage to get this aspect of the game done, the main objective of the game to do is to avoid stepping on the tile traps as well as running away from all of the enemies, in order to obtain the crown. 

## AESTHETIC
Main aestheitc/atmosphere we are aiming for: 

![alt text](6f6aba4c807b10ab27570b107770467f.jpg)![alt text](7645480e38e89d7ac0f628dd58a90df2.jpg)![alt text](c4b7c016e4fd3f1addbb42f500652b15.jpg)![alt text](663095e4edd081ec75a959e4155a0d35.jpg) 
