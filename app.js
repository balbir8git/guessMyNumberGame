const container = document.querySelector('#container');
const guessMsg_div = document.getElementById("guessMsg");
var attempts = 0; 

function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*100 + 1);
    return randomNumber;
}

const computerChoice = getComputerChoice();

function userFn(e) {
    if(e.target !== e.currentTarget) {
        attempts += 1;
        // console.log("no of attempts: " + attempts);
        game(Number(e.target.id.slice(3)), attempts);
        // alert(Number(e.target.id.slice(3)));
    }
    // e.stopPropagation(); 
    // https://www.kirupa.com/html5/handling_events_for_many_elements.htm
}

function game(userChoice, attempts) {
    if (userChoice < computerChoice) {
        for (var i=1; i<=userChoice; i++) {
            let temp = "btn" + i;
            // console.log(temp);
            // console.log("computer Choice is ####### " + computerChoice);
            let offBtn = document.getElementById(temp);
            offBtn.classList.add('disabledBtnsStyle');
            offBtn.disabled = true;
            guessMsg_div.innerHTML = ` Guess higher number... No. of attempts: ${attempts} `;
            guessMsg_div.classList.add('hint');
        }
    }
    else if (userChoice > computerChoice) {
        for (var i=userChoice; i<=100; i++) {
            let temp = "btn" + i;
            // console.log(temp);
            let offBtn = document.getElementById(temp);
            offBtn.classList.add('disabledBtnsStyle');
            offBtn.disabled = true;
            guessMsg_div.innerHTML = ` Guess lower number... No. of attempts: ${attempts} `;
            guessMsg_div.classList.add('hint');
        }
    }
    else {
        let temp = "btn" + userChoice;
        let offBtn = document.getElementById(temp);
        offBtn.classList.add('winner');
        if (attempts <= 7) {
            guessMsg_div.innerHTML = ` That's right guess, You win. No. of attempts: ${attempts} `;
            guessMsg_div.classList.add('win'); 
        }
        else {
            guessMsg_div.innerHTML = ` That's right guess, but you took ${attempts} no. of attempts. It can be solved in 7. Try again. `;
        guessMsg_div.classList.add('loose');
        }
    }
    // console.log("this is min " + min);
    // console.log("this is max " + max);
}

function main() {
    container.addEventListener('click', userFn, false);
}

main();