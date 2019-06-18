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

// PURE WEB PART

function pressEnter(event, clicfunc)
{
    var code = event.which || event.keyCode; 
    print(code);
    if (code == 13) { //le code de la touche Enter
        document.getElementById(clicfunc).click();
    }
}

var interval;
//startLoop();

function startLoop(zoom_pow) {
    loopy(zoom_pow)
    interval = setInterval(loopy, 100, zoom_pow);
}

function stopLoop(){
  interval = clearInterval(interval);
}

function loopy(zoom_pow) {
    console.log( "dans la boucle ");
    //createCanvas(canvas_size, canvas_size);
    canvas_size += zoom_pow;
    $('#zoom_info').text(canvas_size + " * " + canvas_size + " px");
    //createCanvas(canvas_size, canvas_size); 
}

$(document).ready(function() {
    console.log( "document ready!" );
    $('#change_seed').click(function(){
        actRandomSeed = random(100000);
    });
    $('#save_ok').click(function(){
       // saveCanvas("bar_code", 'png');
        if ($('#save_str').val() == '')
        {
            $('#save_str').addClass('is-danger'); 
        }
        else
        {
            saveCanvas($('#save_str').val(), 'png');
        }
    
    });
    $('#save_img').click(function(){
        saveCanvas("bar_code", 'png');
    });
    $('#color_str').change(function(){
        if ($('#color_str').val() != '')
        {
            $('#color_str').removeClass('is-danger'); 
        }
    });


    
    $("#zoom_in").mouseup(stopLoop);
    $("#zoom_in").mousedown(function() {
        console.log( "ca clic la ");
      
        if (!interval) {
        startLoop(10);
      }
    });
    $("#zoom_out").mouseup(stopLoop);
    $("#zoom_out").mousedown(function() {
        console.log( "ca clic la ");
      
        if (!interval) {
        startLoop(-10);
      }
    });



    // $('#zoom_in').mousedown(function(){
    //     //canvas_size += 10;
    //     //createCanvas(canvas_size, canvas_size);
    //     mouse_pressed = true;

    // });

    // $('#zoom_in').mouseup(function(){
    //     //canvas_size += 10;
    //     //createCanvas(canvas_size, canvas_size);
    //     console.log( "mouse up !");
        
    //     mouse_pressed = false;
    // });

    // $('#zoom_out').click(function(){
    //     canvas_size -= 10;
    //     createCanvas(canvas_size, canvas_size);    
    // });

    $('#color_ok').click(function(){
    console.log( "document ready!" +  $('#color_str').val());

        // background('#' + $('#color_str').val());
        background("#000000");
        if ($('#color_str').val() == '')
        {
            $('#color_str').addClass('is-danger'); 
        }
        else
        {
            currentbackground = '#' + $('#color_str').val();
        }
    });
});

// PURE WEB PART


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

var mouse_pressed = false;


var tileCount = 20;
var actRandomSeed = 0;

var mousePosX = 100;
var mousePosY = 100;

var canvas_size = 1000;

var currentbackground = "#000000";

var backgroundRed = 250;
var backgroundGreen = 250;
var backgroundBlue = 250;

// var backgroundRed = 0;
// var backgroundGreen = 0;
// var backgroundBlue = 0;

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
    createCanvas(canvas_size, canvas_size);
    // canvas.height = 1000;
    // canvas.width = 1000;
    colorMode(RGB, 255, 255, 255, 255);
    noStroke();
    
    background(backgroundRed, backgroundGreen, backgroundBlue);
}

function draw() {
    clear();
    randomSeed(actRandomSeed);
    background(currentbackground);
    createCanvas(canvas_size, canvas_size);



    var largeur_bis = 70;
    
    var opacity1 = 0.60;
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < largeur_bis; gridX++) {

            var posX = width / largeur_bis * gridX;
            var posY = height / tileCount * gridY;

            var largeur_code = random((width / largeur_bis) / 10, width / largeur_bis);
            var shiftX = random(-mouseX, mouseX) / 20;
            var shiftY = random(-mouseX, mouseX) / 20;
            fill(random(startRed, endRed), random(startGreen, endGreen), random(startBlue, endBlue), opacity1 * 255);

            if (random(0, 5) > 1) {
                rect(posX, posY, largeur_code, height / tileCount);
            }

        }
    }


    var opacity2 = 0.80;
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            //var largeur_code = random((width / largeur_bis) / 10, width / largeur_bis);
            var shiftX = random(-mouseX, mouseX) / 20;
            var shiftY = random(-mouseX, mouseX) / 20;
            fill(random(startRed, endRed), random(startGreen, endGreen), random(startBlue, endBlue), opacity2 * 255);
            //ellipse(posX + shiftX, posY + shiftY, mouseY / 15, mouseY / 15);

            if (random(0, 21) < 1) {
                rect(posX, posY, width / tileCount, height / tileCount);
            }

        }
    }

    var opacity3 = 1;
    for (var gridY = 0; gridY < tileCount; gridY += 2) {
        for (var gridX = 0; gridX < tileCount; gridX += 2) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            //var largeur_code = random((width / largeur_bis) / 10, width / largeur_bis);
            var shiftX = random(-mouseX, mouseX) / 20;
            var shiftY = random(-mouseX, mouseX) / 20;
            fill(random(startRed, endRed), random(startGreen, endGreen), random(startBlue, endBlue), opacity3 * 255);
            //ellipse(posX + shiftX, posY + shiftY, mouseY / 15, mouseY / 15);

            if (random(0, 21) < 1) {
                rect(posX, posY, (width / tileCount) * 2, (height / tileCount) * 2);
            }

        }
    }



}

// function mousePressed() {
//     actRandomSeed = random(100000);
// }

function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas("bar_code", 'png');
}