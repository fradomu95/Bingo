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
    let newNum = Math.floor(Math.random() * 75) + 1;

    document.getElementById(currSquare).innerHTML = newNum;
}