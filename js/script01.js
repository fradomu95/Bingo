window.onload = initAll;

function initAll() {
    for (let i = 0; i < 24; i++) {
        setSquare(i);    
    }
}

function setSquare(thisSquare) {
    let currSquare = "square" + thisSquare;
    let newNum = Math.floor(Math.random() * 75) + 1;

    document.getElementById(currSquare).innerHTML = newNum;
}