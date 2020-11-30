window.onload = initAll;
let usedNums = new Array(76);

function initAll() {
    if (document.getElementById) {
        document.getElementById("reload").onclick = anotherCard;
        newCard();
    } else {
        alert("Sorry, your browser doesn't support this script");
    }
}

function newCard() {
    for (let i = 0; i < 24; i++) {
        setSquare(i);    
    }
}

function setSquare(thisSquare) {
    let currSquare = "square" + thisSquare;
    let colPlace = new Array(0,0,0,0,0,
                             1,1,1,1,1,
                             2,2,2,2,
                             3,3,3,3,3,
                             4,4,4,4,4);
    let colBases = colPlace[thisSquare] * 15;
    let newNum;
    
    do {
        newNum = colBases + getNewNum() + 1;
    } while (usedNums[newNum]);

    usedNums[newNum] = true;
    document.getElementById(currSquare).innerHTML = newNum;
    document.getElementById(currSquare).className = "";
    document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum() {
    return Math.floor(Math.random()*15);
}

function anotherCard() {
    for (let i = 1; i < usedNums.length; i++){
        usedNums[i] = false;
    }

    newCard();
    return false;
}

function toggleColor(evt) {
    if (evt) {
        var thisSquare = evt.target
    } else {
        var thisSquare = window.event.srcElement;
    }
    if (thisSquare.className == "") {
        thisSquare.className = "pickedBG";
    } else {
        thisSquare.className = "";
    }
    //NO LO INDICA EN APUNTES PERO HAY QUE PONERLO PARA CADA VEZ QUE SE CAMBIE EL COLOR HAY Q COMPROBAR
    checkWin();
}

function checkWin() {
    let winningOption = -1;
    let setSquares = 0;
    let winners = new Array(31, 992, 15360, 507904, 541729, 557328, 507904,541729,557328,1083458,2162820, 4329736,8519745,8659472,16252928); // PREGUNTAR DE DONDE SALE
/**
 *  CUADRADO SIN NADA ES ARRAY DE 23 POSICIONES ->  00000 00000 0000 00000 00000
 *                                                  1COL  2COL  3COL 4COL  5COL
 *  POSIBLE SOLUCION DE LA ULTIMA COLUMNA ES ->     00000 00000 0000 00000 11111 = 31
 *  POSIBLE SOLUCION DE LA PENULTIMA COLUMNA ES ->  00000 00000 0000 11111 00000 = 992
 *  ...
 *  SOLUCION MAS ALTA POSIBLE ES ->                 11111 00000 0000 00000 00000 = 16252928
 */
    for(let i = 0; i < 24; i++) {
        var currSquare = "square" + i;

        if(document.getElementById(currSquare).className != "") {
            document.getElementById(currSquare).className = "pickedBG";
            setSquares = setSquares | Math.pow(2,i);    // PREGUNTAR, CONVIERTE SETSQUARES EN BINARIO Y MATH.POW(2,i) Y LOS UNE CON UN OR -> 00001 | 00010 = 00011
                                                        // PORQ SETSQUARES = 0 | 2^0 = 1 PARA EL PRIMER CUADRADO, 1 | 2 = 0011
        }
    }

    for (let i = 0; i < winners.length; i++) {
        if ((winners[i] & setSquares) == winners[i]) {
            winningOption = i;
        }
    }

    if (winningOption > -1) {
        for (let i=0; i<24; i++){
            if (winners[winningOption] & Math.pow(2,i)){
                currSquare = "square" + i;
                document.getElementById(currSquare).className = "winningBG";
            }
        }
    }
}