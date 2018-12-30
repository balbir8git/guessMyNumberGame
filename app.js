const container = document.querySelector('#container');
const guessMsg_div = document.getElementById("guessMsg"); 

function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*100 + 1);
    return randomNumber;
}

const computerChoice = getComputerChoice();

function userFn(e) {
    if(e.target !== e.currentTarget) {
        game(Number(e.target.id.slice(3)));
        // alert(Number(e.target.id.slice(3)));
    }
    // e.stopPropagation(); 
    // https://www.kirupa.com/html5/handling_events_for_many_elements.htm
}

function game(userChoice) {
    if (userChoice < computerChoice) {
        for (var i=1; i<=userChoice; i++) {
            let temp = "btn" + i;
            console.log(temp);
            console.log("computer Choice is ####### " + computerChoice);
            let offBtn = document.getElementById(temp);
            offBtn.classList.add('disabledBtnsStyle');
            offBtn.disabled = true;
            guessMsg_div.innerHTML = `Guess higher number...`;
            guessMsg_div.classList.add('hint');
        }
    }
    else if (userChoice > computerChoice) {
        for (var i=userChoice; i<=100; i++) {
            let temp = "btn" + i;
            console.log(temp);
            let offBtn = document.getElementById(temp);
            offBtn.classList.add('disabledBtnsStyle');
            offBtn.disabled = true;
            guessMsg_div.innerHTML = `Guess lower number...`;
            guessMsg_div.classList.add('hint');
        }
    }
    else {
        let temp = "btn" + userChoice;
        let offBtn = document.getElementById(temp);
        offBtn.classList.add('winner');
        guessMsg_div.innerHTML = `That's right guess. You win!`;
        guessMsg_div.classList.add('win');
    }
    // console.log("this is min " + min);
    // console.log("this is max " + max);
}

function main() {
    container.addEventListener('click', userFn, false);
}

main();