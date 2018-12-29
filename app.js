var container = document.querySelector('#container');
container.addEventListener('click', game, false);

function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*3 + 1);
    return randomNumber;
}

function game(e) {
    if(e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        alert("hello " + clickedItem);
    }
    // e.stopPropagation();
}

