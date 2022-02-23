var start = document.getElementById("startGame");
var spel = document.getElementById("hetSpel");
var startSpel = document.getElementById("startSpel");
var error = document.getElementById("error");
var startscherm = document.getElementById("startscherm");
var spelInhoud = document.getElementById("spelInhoud");
var fouten = document.getElementById("fout");
var goeden = document.getElementById("goed");
var stoppen = document.getElementById("stoppen");
var foto = document.getElementById("foto");

var goed = 0;
var fout = 0;
var randomNamenPokemon = [];
var minuten = 0;
var seconden = 0;

start.onclick = function(){
    spel.classList.add("show");
}

startSpel.onclick = function(){
    var aantal = document.getElementById("aantal").value;
    var tijd = document.getElementById("tijd").value;
    tijden = tijd.split(":");
    if(isNaN(tijden[0]) == true || isNaN(aantal) == true || aantal <= 19 || aantal >= 152 || tijden[0] <= 1 || tijden[0] >= 11 || tijden[1] >= 60 || tijden.length >= 3){
        error.style.display = "block";
    }
    else{
        startscherm.style.display = "none";
        spelInhoud.style.display = "block";
        minuten = tijden[0];
        if(tijden.length == 2){
            var sec = Number(tijden[1]);
            seconden = sec;
        }
        var namenPokemon = randomNamen(aantal);
        teRaden(namenPokemon[goed]);
        randomNamenPokemon = namenPokemon;
        if(seconden <= 9){
            document.getElementById("tijden").innerText = minuten + ":0" + seconden;
        }
        else{
            document.getElementById("tijden").innerText = minuten + ":" + seconden;
        }
        timer = setInterval(function(){
            if(seconden == 0){
                minuten--;
                seconden = 59;
                document.getElementById("tijden").innerText = minuten + ":" + seconden;
            }
            else if(seconden <= 10){
                seconden--;
                document.getElementById("tijden").innerText = minuten + ":0" + seconden;
            }
            else{
                seconden--;
                document.getElementById("tijden").innerText = minuten + ":" + seconden;
            }

            if(minuten == 0 && seconden == 0){
                alert("tijd is op: Goede antwoorden: " + goed + " Foute atwoorden: " + fout);
                spel.classList.remove("show");
                annuleer();
            }
        }, 1000);
    }
}
function randomNamen(hoeveelheid){
    var pokemons = [];
    for(let i=0; i<=theArray.length-1; i++){
        pokemons.push(theArray[i]);
    }
    var arrayPokemons = [];
    while(arrayPokemons.length <= hoeveelheid-1){
        var randomgetal = Math.floor(Math.random() * 152);
        if(pokemons[randomgetal] != null){
            arrayPokemons.push(pokemons[randomgetal]);
            pokemons[randomgetal] = null;
        }
    }
    return arrayPokemons;
}

for(let i=0; i<=2; i++){
    document.getElementById("raadKnop" + i).onclick = function(){
        if(document.getElementById("raadKnop" + i).innerText == randomNamenPokemon[goed]){
            goed++;
            goeden.innerText = goed;
            if(randomNamenPokemon.length != goed){
                teRaden(randomNamenPokemon[goed]);
            }
            else{
                alert("Goede antwoorden: " + goed + " Foute atwoorden: " + fout);
                annuleer();
            }
        }
        else{
            fout++;
            fouten.innerText = fout;
        }
    }
}

function teRaden(namenPokemon){
    foto.src = "pokemonImage/" + namenPokemon + ".png";
    namenKnoppen = [namenPokemon];
    plekkenNamenKnoppen = [];
    while(namenKnoppen.length <= 2){
        var naam = Math.floor(Math.random() * 152);
        if(namenKnoppen.indexOf(theArray[naam]) == -1){
            namenKnoppen.push(theArray[naam]);
        }
    }
    while(plekkenNamenKnoppen.length <= 2){
        var plek = Math.floor(Math.random() * 3);
        if(plekkenNamenKnoppen.indexOf(plek) == -1){
            plekkenNamenKnoppen.push(plek);
        }
    }
    for(let i=0; i<=plekkenNamenKnoppen.length-1; i++){
        document.getElementById("raadKnop" + plekkenNamenKnoppen[i]).innerText = namenKnoppen[i];
    }
}

stoppen.onclick = function(){
    onderbreken = confirm("Weet je zeker dat je wilt stoppen");
    if(onderbreken == true){
        spel.classList.remove("show");
        annuleer();
    }
}

function annuleer(){
    clearInterval(timer);
    minuten = 0;
    seconden = 0;
    goed = 0;
    goeden.innerText = goed;
    fout = 0;
    fouten.innerText = fout;
    randomNamenPokemon = [];
    startscherm.style.display = "block";
    spelInhoud.style.display = "none";
}