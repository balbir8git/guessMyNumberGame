var container = document.querySelector('#container');

function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*100 + 1);
    return randomNumber;
}

function userFn(e) {
    if(e.target !== e.currentTarget) {
        game(Number(e.target.id.slice(3)));
        // alert(Number(e.target.id.slice(3)));
    }
    // e.stopPropagation(); 
    // https://www.kirupa.com/html5/handling_events_for_many_elements.htm
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    var min = 0;
    var max = 0;
    if (userChoice < computerChoice) {
        min = userChoice;
        max = computerChoice;
    }
    else if (userChoice > computerChoice) {
        min = computerChoice;
        max = userChoice;
    }
    else {
        console.log("You win");
    }
    // console.log("this is min " + min);
    // console.log("this is max " + max);
}

function main() {
    container.addEventListener('click', userFn, false);
}

main();