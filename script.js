/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */


//console.log(""); om dingen te checken in je log

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

// -----------------------------

// Sonic's data / speler data
var spelerX = 200; // x-positie van speler / sonic
var spelerY = 660; // y-positie van speler / sonic
var spelerYsnelheid = 20; // snelheid van de speler die beweegt
var spelerYgravity = 50; // hoeveel seconde bij de snelheid komt door de gravity
var spelerYvloer = 600; // hoogte van de vloer, player can't force through the ground
var ArrowLeft = 37;
var ArrowRight = 38;
var ArrowUp = 39;
var ArrowDown = 40;

// -------------------------------

// AI Shadow's / kogel data
var kogelX = 150;    // x-positie van kogel / tails
var kogelY = 660;    // y-positie van kogel / tails
var kogelYsnelheid = 20; // snelheid van de speler die beweegt
var kogelYgravity = 50; // hoeveel seconde bij de snelheid komt door de gravity
var kogelYvloer = 600; // hoogte van de vloer, player can't force through the ground
var A = 65;
var D = 68;
var W = 87;
var S = 83;


// -----------------------------

// Enemy data
var vijandX = 1150;   // x-positie van vijand
var vijandY = 660;   // y-positie van vijand

// -----------------------------

// Game points
var score = 0; // aantal behaalde punten

// -----------------------------


/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("black");
  rect(20, 20, width - 2 * 20, height - 2 * 20);

  

    
    noStroke(); // the lines
    fill(255, 255, 255); // colour white

  
    rect(100, 240, 800, 60);
    rect(100, 240, 300, 60);
    rect(100, 300, 65, 350);
    rect(100, 620, 150, 75);
    rect(100, 300, 750, 150);
    rect(100, 90, 800, 150);
    rect(100, 110, 800, 150);
    rect(100, 400, 750, 150);
    rect(100, 500, 750, 150);
    rect(550, 590, 700, 100);

    
    
noStroke(); // overlasped white lines
    fill(0, 0, 0); // colour black
    rect(40, 300, 740, 150);
    rect(80, 90, 750, 150);
    rect(50, 400, 500, 200);
    rect(250, 500, 300, 150);
    
    

     noStroke(); // overlasped black lines
    fill(255, 255, 255); // colour white
rect(100, 250, 65, 200);
rect(100, 250, 65, 400);
rect(550, 300, 30, 100);
rect(600, 450, 250, 200);

noStroke(); // overlasped white lines that overlasped the other black lines
fill(0, 0, 0); // colour black
rect(600, 500, 250, 150);
rect(800, 500, 250, 150);
rect(550, 300, 30, 100);

noStroke(); // overlasped black lines that overlasped the other white lines
fill(255, 255, 255); // colour white
rect(600, 630, 600, 20);
rect(600, 500, 20, 150);
rect(600, 500, 250, 20);



// Text
fill(101,28,50);

textSize(90);
textFont("Party Let");
text("Touch the Black if you dare ! ;)", 40, 150);

};




/**
 * Tekent de vijand // The Exit
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(vijandX, vijandY) {
  fill("red");
  ellipse(vijandX, vijandY, 120, 50);
};  

/**
 * Tekent de kogel of de bal / ai named Tails die ook naar de goal moet gaan
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
  fill("orange");
  ellipse(kogelX, kogelY, 50, 50);
};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

var tekenSpeler = function(spelerX, spelerY) {
  fill("blue");
  ellipse(spelerX, spelerY, 50, 50);



};




/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
};
    


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {
   if (keyIsDown(65)) {
    kogelX = kogelX - 5;
  }
  if (keyIsDown(87)) {
    kogelY = kogelY - 5;
  }
  if (keyIsDown(68)) {
    kogelX = kogelX + 5;
  }
  if (keyIsDown(83)) {
    kogelY = kogelY + 5;
  }

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function draw() {
   if (keyIsDown(37)) {
    spelerX = spelerX - 5;
  }
  if (keyIsDown(38)) {
    spelerY = spelerY - 5;
  }
  if (keyIsDown(39)) {
    spelerX = spelerX + 5;
  }
  if (keyIsDown(40)) {
    spelerY = spelerY + 5;
  }
};



/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('pink');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}