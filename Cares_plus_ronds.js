// P_2_1_2_04
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * moving corners of rectangles in a grid
 *
 * MOUSE
 * position x          : corner position offset x
 * position y          : corner position offset y
 * left click          : random position
 *
 * KEYS
 * s                   : save png
 */
//'use strict';

var tileCount = 20;
var actRandomSeed = 0;

var mousePosX = 100;
var mousePosY = 100;



// var backgroundRed = 250;
// var backgroundGreen = 250;
// var backgroundBlue = 250;

var backgroundRed = 0;
var backgroundGreen = 0;
var backgroundBlue = 0;

var startRed = 0;
var startGreen = 100;
var startBlue = 100;

var endRed = 00;
var endGreen = 200;
var endBlue = 200;






var rectSize = 30;


var circleAlpha = 130;
var circleColor;

function setup() {
    createCanvas(600, 600);
    colorMode(RGB, 255, 255, 255, 255);
    noStroke();
    //background(0);
    fill(192, 100, 64, 60);
    circleColor = color(0, 0, 0, circleAlpha);
}

function draw() {
    clear();
    background(backgroundRed, backgroundGreen, backgroundBlue);
    randomSeed(actRandomSeed);

    // for (var gridY = 0; gridY < tileCount * 2; gridY++) {
    //     for (var gridX = 0; gridX < tileCount * 2; gridX++) {


    //         var posX = width / tileCount * gridX;
    //         var posY = height / tileCount * gridY;

    //         var shiftX1 = mousePosX / 20 * random(-1, 1);
    //         var shiftY1 = mousePosY / 20 * random(-1, 1);
    //         var shiftX2 = mousePosX / 20 * random(-1, 1);
    //         var shiftY2 = mousePosY / 20 * random(-1, 1);
    //         var shiftX3 = mousePosX / 20 * random(-1, 1);
    //         var shiftY3 = mousePosY / 20 * random(-1, 1);
    //         var shiftX4 = mousePosX / 20 * random(-1, 1);
    //         var shiftY4 = mousePosY / 20 * random(-1, 1);




    //         var myColor = random(50, 200);


    //         //fill(rouge, rouge, rouge);
    //         //fill(random(0, 100));
    //         //fill(192, 100, 64, 60);
    //         fill(random(startRed, endRed), random(startGreen, endGreen), random(startBlue, endBlue), 255);
    //         //     fill(random(100, 200), 100, 64, 60);
    //         push();
    //         translate(posX / 2, posY / 2);
    //         beginShape();
    //         vertex(shiftX1, shiftY1);
    //         vertex(rectSize + shiftX2, shiftY2);
    //         vertex(rectSize + shiftX3, rectSize + shiftY3);
    //         vertex(shiftX4, rectSize + shiftY4);
    //         endShape();


    //         //rect(posX / 2, posY, 55, 55);


    //         pop();


    //     }
    // }


    translate(width / tileCount / 2, height / tileCount / 2);

    // background(255);

    randomSeed(actRandomSeed);

    // stroke(circleColor);
    // strokeWeight(mouseY / 60);

    var largeur_bis = 70;
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < largeur_bis; gridX++) {

            var posX = width / largeur_bis * gridX;
            var posY = height / tileCount * gridY;

            var largeur_code = random((width / largeur_bis) / 10, width / largeur_bis);
            var shiftX = random(-mouseX, mouseX) / 20;
            var shiftY = random(-mouseX, mouseX) / 20;
            fill(random(startRed, endRed), random(startGreen, endGreen), random(startBlue, endBlue), 255);
            //ellipse(posX + shiftX, posY + shiftY, mouseY / 15, mouseY / 15);

            if (random(0, 5) > 1) {
                rect(posX, posY, largeur_code, height / tileCount);
            }

        }
    }



    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            //var largeur_code = random((width / largeur_bis) / 10, width / largeur_bis);
            var shiftX = random(-mouseX, mouseX) / 20;
            var shiftY = random(-mouseX, mouseX) / 20;
            fill(random(startRed, endRed), random(startGreen, endGreen), random(startBlue, endBlue), 255);
            //ellipse(posX + shiftX, posY + shiftY, mouseY / 15, mouseY / 15);

            if (random(0, 21) < 1) {
                rect(posX, posY, width / tileCount, height / tileCount);
            }

        }
    }

    for (var gridY = 0; gridY < tileCount; gridY += 2) {
        for (var gridX = 0; gridX < tileCount; gridX += 2) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            //var largeur_code = random((width / largeur_bis) / 10, width / largeur_bis);
            var shiftX = random(-mouseX, mouseX) / 20;
            var shiftY = random(-mouseX, mouseX) / 20;
            fill(random(startRed, endRed), random(startGreen, endGreen), random(startBlue, endBlue), 255);
            //ellipse(posX + shiftX, posY + shiftY, mouseY / 15, mouseY / 15);

            if (random(0, 21) < 1) {
                rect(posX, posY, (width / tileCount) * 2, (height / tileCount) * 2);
            }

        }
    }



}

function mousePressed() {
    actRandomSeed = random(100000);
}

function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas("Carres", 'png');
}