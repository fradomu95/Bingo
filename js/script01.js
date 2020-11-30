window.onload = initAll;

function initAll() {
    if (document.getElementById) {
        for (let i = 0; i < 24; i++) {
            setSquare(i);    
        }
    } else {
        alert("Sorry, your browser doesn't support this script");
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
    let newNum = colBases + getNewNum() + 1;

    document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
    return Math.floor(Math.random()*15);
}