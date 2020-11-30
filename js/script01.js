window.onload = initAll;

function initAll() {
    for (let i = 0; i < 24; i++) {
        let newNum = Math.floor(Math.random()*75)+1;

        document.getElementById("square"+i).innerHTML = newNum;
    }
}