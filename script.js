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
var spelerY = 600; // y-positie van speler / sonic
var spelerYsnelheid = 20; // snelheid van de speler die beweegt
var spelerYgravity = 50; // hoeveel seconde bij de snelheid komt door de gravity
var spelerYvloer = 600; // hoogte van de vloer, player can't force through the ground
var ArrowLeft = 37;
var ArrowRight = 38;
var ArrowUp = 39;
var ArrowDown = 40;

// -------------------------------

// AI Shadow's / kogel data
var kogelX = 150;    // x-positie van kogel / shadow
var kogelY = 600;    // y-positie van kogel / shadow
var kogelYsnelheid = 20; // snelheid van de speler die beweegt
var kogelYgravity = 50; // hoeveel seconde bij de snelheid komt door de gravity
var kogelYvloer = 600; // hoogte van de vloer, player can't force through the ground
var A = 65;
var D = 68;
var W = 87;
var S = 83;


// -----------------------------

// Enemy data
var vijandX = 900;   // x-positie van vijand
var vijandY = 600;   // y-positie van vijand

// -----------------------------

// Game points
var score = 0; // aantal behaalde punten

// -----------------------------


// Maze
var drawbackground = function () {
noStroke();
rect(0, 300, 400, 100);

}; 
var x = 0;
var y = 0;

draw = function() {
    background(255, 255, 255);
    
    noStroke();
    fill(79, 255, 94);
    
    // Moves across the canvas, getting taller
    ellipse(x, 200, 30, 30+x/3);
    
    // Moves down the canvas, getting wider
    ellipse(200, y, 30+y/3, 30);
    
    // Add one to each of the variables
    x++;
    y++;
};




/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("grey");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(vijandX, vijandY) {
  fill("red");
  ellipse(vijandX, vijandY, 120, 50);
};  

/**
 * Tekent de kogel of de bal / ai named Shadow die volgt je
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
  fill("black");
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
  background('black');
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