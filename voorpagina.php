<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://kit.fontawesome.com/bd7d037b53.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <header>
        <img src="img/header.png" alt="header">
    </header>

    <nav>
        <ul>
            <li>asfjlwegreijf</li>
            <li>asfjlwegreijf</li>
            <li>asfjlwegreijf</li>
            <li>asfjlwegreijf</li>
        </ul>
    </nav>

    <div class="centerKnop">
        <button id="startGame">start game</button>
    </div>

    <div id="hetSpel" class="achtergrondSpel">
        <div class="SpelKaart">
            <div class="startscherm" id="startscherm">
                <input type="text"  maxlength="3" id="aantal">
                <p>hoeveel pokemon wil je dat deze quiz bevat <br> Minimaal: 20 <br> maximaal: 151</p>
                <br>
                <p>hoeveel tijd wil je hier voor hebben<br>minimaal: 2 minuten<br>maximaal: 10 minuten</p>
                <input type="text" maxlength="5" placeholder="-:--" id="tijd"><label for="tijd"> minuten</label>
                <br>
                <p>Klick op het kruisje als je wilt stoppen met de quiz</p>
                <p class="error" id="error">1 van de waardes kloppen niet</p>
                <button id="startSpel">Start</button>
            </div>
            <div id="spelInhoud" class="spel">
                <div class="goedfoutBox">
                    <div>Goed: <span id="goed">0</span></div>
                    <div>Fout: <span id="fout">0</span></div>
                    <div>tijd: <span id="tijden"></div>
                </div>
                <img id="foto" alt="pokemonAfbeelding">
                <p>Welke pokemon is dit?</p>
                <div class="centeren">
                    <button id="raadKnop0"></button>
                    <button id="raadKnop1"></button>
                    <button id="raadKnop2"></button>
                </div>
            </div>
            <div class="onder">
                <i id="stoppen" class="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>

    <footer>Airto van Vugt</footer>

    <script src="js/array.js"></script>
    <script src="js/code.js"></script>
</body>
</html>