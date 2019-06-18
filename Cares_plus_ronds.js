////////////////// PURE WEB PART

/* Fonction pour transformer l'appui sur la touche entree en clic sur un bouton */

function pressEnter(event, clicfunc)
{
    // pour s'adapter a tous les navigateurs
    var code = event.which || event.keyCode; 
    //le code de la touche Enter
    if (code == 13) { 
        document.getElementById(clicfunc).click();
    }
}

/* Boucle pour le zoom */

var interval;

function startLoop(zoom_pow) {
    loopy(zoom_pow)
    interval = setInterval(loopy, 100, zoom_pow);
}

function stopLoop(){
  interval = clearInterval(interval);
}

function loopy(zoom_pow) {
    console.log( "dans la boucle ");
    if (canvas_size > 0 || zoom_pow > 0)
    {
        canvas_size += zoom_pow;
    }
    $('#zoom_info').text(canvas_size + " * " + canvas_size + " px");
    customdraw();

}

/* Fonctions qui ont besoin que la page soit chargee pour fonctionner */

$(document).ready(function() {
    console.log( "document ready!" );
   
/* Bouton changer de seed */
    
    // Lorsque l'on appuie sur le bouton 'Change seed'
    // actualise la seed et redraw

    $('#change_seed').click(function(){
        actRandomSeed = random(100000);
        customdraw();
    });

/* Bouton sauvegarde */

    // Lorsque l'on appuie sur le bouton 'Save to Png'
    // sauvegarde le canvas en 'bar_code.png'

    $('#save_img').click(function(){
        saveCanvas("bar_code", 'png');
    });
    
/* Input sauvegarde */
    
    // Lorsque l'on appuie sur le bouton 'Save' de la l'export du png ou que l'on appuie sur la 
    // touche entrer, si la string entree est vide met la couleur rouge au cadre de l'input
    // sinon sauvegarde le canvas avec le nom donné (+.png)

    $('#save_ok').click(function(){
        if ($('#save_str').val() == '')
        {
        console.log( "ca met");

            $('#save_str').addClass('is-danger'); 
        }
        else
        {
            saveCanvas($('#save_str').val(), 'png');
        }
    });

    // Lorsque l'on focus l'input du nom de l'export
    // enleve la couleur rouge du cadre de l'input

    $('#save_str').click(function(){
             $('#save_str').removeClass('is-danger'); 
     });
    
    // A chaque touche appuyee verifie si la string de l'input n'est pas vide,
    // si elle n'est pas vide enleve la couleur rouge du cadre de l'input
    // sinon met la couleur rouge au cadre de l'input

     $('#save_str').keyup(function(){
        if ($('#save_str').val() != '')
        {
             $('#save_str').removeClass('is-danger'); 
        }
        else
        {
            $('#save_str').addClass('is-danger'); 
        }
     });


/* Boutons Zoom */

    // Quand la souris appuie sur le bouton 'Zoom' lance une boucle dont le cycle
    // est de 100 ms, chaque cycle augmente la taille du canvas de 10
    
    $("#zoom_in").mousedown(function() {
        if (!interval) {
            startLoop(10);
        }
    });
    
    // Quand la souris arrete d'appuyer sur le bouton 'zoom'
    // la boucle s'arrete
    
    $("#zoom_in").mouseup(stopLoop);

    // Quand la souris appuie sur le bouton 'Dezoom' lance une boucle dont le cycle
    // est de 100 ms, chaque cycle diminue la taille du canvas de 10

    $("#zoom_out").mousedown(function() {
        if (!interval) {
            startLoop(-10);
        }
    });

    // Quand la souris arrete d'appuyer sur le bouton 'zoom'
    // la boucle s'arrete

    $("#zoom_out").mouseup(stopLoop);




/* Input couleur et notification d'erreur */

    // A chaque touche appuyee verifie si la string entree correspond
    // a la syntaxe d'une couleur
    // si oui enleve la notification et la couleur rouge du cadre de l'input
    // sinon met la couleur rouge au cadre de l'input

    $('#color_str').keyup(function(){
        if (reg.test($('#color_str').val()))
        {
            $('#color_str').removeClass('is-danger'); 
            $("#color_background_notification").hide(100);

            // Pour actualiser des que la string est correcte

            currentbackground = '#' + $('#color_str').val();
            customdraw();
        }
        else
        {
            $('#color_str').addClass('is-danger');
        }
    });

    // Lorsque l'on appuie sur la croix de la notification,
    // ferme celle-ci et enleve la couleur rouge du cadre de l'input
    
    $('#color_background_notification_cross').click(function(){
        $('#color_str').removeClass('is-danger'); 
        $("#color_background_notification").hide(100);
    });

    // Lorsque l'on appuie sur le bouton 'Ok' de la couleur ou que l'on appuie sur la 
    // touche entrer verifie si la string entree correspond
    // a la syntaxe d'une couleur, si elle ne correpond pas
    // affiche une notification d'erreur et met la couleur rouge du cadre de l'input

    $('#color_ok').click(function(){
        if (!reg.test($('#color_str').val()))
        {
            $('#color_str').addClass('is-danger');

            $("#color_background_notification").show(100);
        }
        else
        {
            currentbackground = '#' + $('#color_str').val();
            customdraw();
        }
    });
});

//////////////////// PURE WEB PART


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

var reg = new  RegExp('^[a-fA-F0-9]{6}$');





function setup() {
    createCanvas(canvas_size, canvas_size);
    // canvas.height = 1000;
    // canvas.width = 1000;
    colorMode(RGB, 255, 255, 255, 255);
    noStroke();
    
    background(backgroundRed, backgroundGreen, backgroundBlue);
    customdraw();
}

function customdraw() {
    console.log( "Updating canvas");
    //console.log( "regex : " + reg.test('232222'));

    clear();
    randomSeed(actRandomSeed);
    createCanvas(canvas_size, canvas_size);
    background(currentbackground);



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

// function keyReleased() {
//     if (key == 's' || key == 'S') saveCanvas("bar_code", 'png');
// }