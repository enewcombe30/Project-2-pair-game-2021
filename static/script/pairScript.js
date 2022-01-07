
// Initial const values 

const homeControl = document.getElementById("home-control-bar");
const optionControl = document.getElementById("option-control-bar");
const gameContainer = document.getElementById("game-container");
const diffContainer = document.getElementById("diff-container");
const gameControls = document.getElementById("game-control-bar");

const homeBtn = document.getElementById("home-btn");



/////////  How to button Script that creates modal ////////////

var modal = document.getElementById("how-modal");
var howBtn = document.getElementById("how-btn");
var span = document.getElementsByClassName("close")[0];

howBtn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//////// Hide control functions /////////

function homeFunction() {
    homeControl.classList.remove("hide");
    gameContainer.classList.add("hide");
    diffContainer.classList.add("hide");
    gameEnd.classList.add("hide");
}

function optionFunction() {
    optionControl.classList.toggle("hide");
}

function startButton() {
    homeControl.classList.add("hide");
    optionControl.classList.add("hide");
    gameContainer.classList.add("hide");
    diffContainer.classList.remove("hide");
    gameEnd.classList.add("hide");
    easyGame.addEventListener("click", startTimer, { once: true });
    medGame.addEventListener("click", startTimer, { once: true });
    hardGame.addEventListener("click", startTimer, { once: true });

    startAgain();
    stopTimer();
    resetTimer();
}

//////// Audio Functions /////////

const bMusic = document.getElementById("audio");
const musicBtn = document.getElementById("music-btn");
const allBtn = document.querySelectorAll("button");
const SFXBtn = document.getElementById("SFX-btn");


homeControl.addEventListener("click", toggleMusic, { once: true });
musicBtn.addEventListener("click", toggleMusic);
SFXBtn.addEventListener("click", toggleSFX);

function toggleMusic() {
    if (bMusic.paused) {
        bMusic.play();
        musicBtn.innerHTML = "Music OFF";
    }
    else {
        bMusic.pause();
        bMusic.currentTime = 0;
        musicBtn.innerHTML = "Music ON";
    }
}

function toggleSFX() {
    if (btnClick.muted == false) {
        SFXBtn.innerHTML = "SFX ON";
        btnClick.muted = true;
        matchSound.muted = true;
        gameLose.muted = true;
        successSound.muted = true;
        
    }
    else {
        SFXBtn.innerHTML = "SFX OFF";
        btnClick.muted = false;
        matchSound.muted = false;
        gameLose.muted = false;
        successSound.muted = false;
        
    }

}
        

const btnClick = document.getElementById("btn-click");
const matchSound = document.getElementById("flip-sound");
const gameLose = document.getElementById("game-lose");
const successSound = document.getElementById("success");


function playButtonClick() {
    btnClick.play();
}

allBtn.forEach(button => button.addEventListener("click", playButtonClick));

function playMatchSound() {
    matchSound.play();
}

function playGameLose() {
    gameLose.play();
}

function playSuccessSound() {
    successSound.play();
}


// Difficulty settings 

const easyGame = document.getElementById("memory-game-easy");
const medGame = document.getElementById("memory-game-medium");
const hardGame = document.getElementById("memory-game-hard");


function playEasy() {
    diffContainer.classList.add("hide");
    gameControls.classList.remove("hide");
    gameContainer.classList.remove("hide");
    easyGame.classList.remove("hide");
    medGame.classList.add("hide");
    hardGame.classList.add("hide");
    easyCards.forEach(card => card.addEventListener('click', flipCard));
    easyGame.addEventListener("click", startTimer, { once: true });
}

function playMed() {
    diffContainer.classList.add("hide");
    gameControls.classList.remove("hide");
    easyGame.classList.add("hide");
    gameContainer.classList.remove("hide");
    medGame.classList.remove("hide");
    hardGame.classList.add("hide");
    medCards.forEach(card => card.addEventListener('click', flipCard));
    medGame.addEventListener("click", startTimer, { once: true });
}

function playHard() {
    diffContainer.classList.add("hide");
    gameControls.classList.remove("hide");
    easyGame.classList.add("hide");
    medGame.classList.add("hide");
    gameContainer.classList.remove("hide");
    hardGame.classList.remove("hide");
    hardCards.forEach(card => card.addEventListener('click', flipCard));
    hardGame.addEventListener("click", startTimer, { once: true });
}

// Card flipping, matching and resetting functions //

const easyCards = document.querySelectorAll('.memory-card-easy');
const medCards = document.querySelectorAll('.memory-card-medium');
const hardCards = document.querySelectorAll('.memory-card-hard');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    playButtonClick();

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
        }
        secondCard = this;
        checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.classList.add("match");
        secondCard.classList.add("match");
        disableCards();
        playMatchSound();
    }
    else {
        unFlipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    resetBoard();
}

function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1200);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// reset button function to reshuffle cards in difficulty class 

const resetBtn = document.getElementById("reset-btn");

/*resetBtn.addEventListener('click', shuffleEasy);
resetBtn.addEventListener('click', shuffleMedium);
resetBtn.addEventListener('click', shuffleHard);

homeBtn.addEventListener('click', startAgain);
resetBtn.addEventListener('click', startAgain);

resetBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);*/

function startAgain() {

    $(".flip").removeClass('flip');
    $(".match").removeClass('match');
    stopTimer();
    resetTimer();
    origValues();
    gameControls.classList.remove("hide");
    easyGame.addEventListener("click", startTimer, { once: true });
    medGame.addEventListener("click", startTimer, { once: true });
    hardGame.addEventListener("click", startTimer, { once: true });
}

function tryAgain() {

    $(".flip").removeClass('flip');
    $(".match").removeClass('match');
    stopTimer();
    resetTimer();
    origValues();
    shuffleEasy();
    shuffleMedium();
    shuffleHard();
    gameEnd.classList.add("hide");
    gameControls.classList.remove("hide");
    easyGame.addEventListener("click", startTimer, { once: true });
    medGame.addEventListener("click", startTimer, { once: true });
    hardGame.addEventListener("click", startTimer, { once: true });
}

function origValues() {
    hasFlippedCard = false;
    lockBoard = false;

    easyCards.forEach(card => card.addEventListener('click', flipCard));
    easyCards.forEach(card => card.addEventListener('click', easyWin));
    medCards.forEach(card => card.addEventListener('click', flipCard));
    medCards.forEach(card => card.addEventListener('click', medWin));
    hardCards.forEach(card => card.addEventListener('click', flipCard));
    hardCards.forEach(card => card.addEventListener('click', hardWin));

}

// shuffle functions for each difficulty //

const easyDiff = document.getElementById("easy-btn");
const medDiff = document.getElementById("med-btn");
const hardDiff = document.getElementById("hard-btn");

easyDiff.addEventListener('click', shuffleEasy);
medDiff.addEventListener('click', shuffleMedium);
hardDiff.addEventListener('click', shuffleHard);

function shuffleEasy() {
    easyCards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
    });
}

function shuffleMedium() {
    medCards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

function shuffleHard() {
    hardCards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
}

easyCards.forEach(card => card.addEventListener('click', flipCard));
medCards.forEach(card => card.addEventListener('click', flipCard));
hardCards.forEach(card => card.addEventListener('click', flipCard));

//////// Timer Function with start function on first click //////

/*stopwatch timer sourced  https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak */



const timer = document.getElementById('timer');

var min = 0;
var sec = 60;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);

        sec = sec - 1;

        if (sec == 0) {

            stopTimer();
            gameFail();
        }
        if (min == 01) {
            sec = 60;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }


        timer.innerHTML = min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    stopTimer();
    sec = 60;
    timer.innerHTML = '01:00';
}

const gameEnd = document.getElementById("end-bar");
const title = document.getElementById("end-title");
const score = document.getElementById("score");

const gameParentEasy = document.getElementById("memory-game-easy");
const matchedEasy = gameParentEasy.getElementsByClassName("match");
easyCards.forEach(card => card.addEventListener('click', easyWin));

const gameParentMed = document.getElementById("memory-game-medium");
const matchedMed = gameParentMed.getElementsByClassName("match");
medCards.forEach(card => card.addEventListener('click', medWin));

var gameParentHard = document.getElementById("memory-game-hard");
var matchedHard = gameParentHard.getElementsByClassName("match");
hardCards.forEach(card => card.addEventListener('click', hardWin));

function easyWin() {
    console.log(matchedEasy.length);

    if (matchedEasy.length == 8) {
        origValues();
        stopTimer();
        playSuccessSound();
        easyCards.forEach(card => card.removeEventListener('click', easyWin));
        gameControls.classList.add("hide");
        gameEnd.classList.remove("hide");
        title.innerHTML = "Victory!";
        score.innerHTML = "You scored " + sec * 25;
    }
}

function medWin() {
    console.log(matchedMed.length);

    if (matchedMed.length == 12) {
        origValues();
        stopTimer();
        playSuccessSound();
        medCards.forEach(card => card.removeEventListener('click', medWin));
        gameControls.classList.add("hide");
        gameEnd.classList.remove("hide");
        title.innerHTML = "Victory!";
        score.innerHTML = "You scored " + sec * 50;
    }
}

function hardWin() {
    console.log(matchedHard.length);

    if (matchedHard.length == 20) {
        origValues();
        stopTimer();
        playSuccessSound();
        hardCards.forEach(card => card.removeEventListener('click', hardWin));
        gameControls.classList.add("hide");
        gameEnd.classList.remove("hide");
        title.innerHTML = "Victory!";
        score.innerHTML = "You scored" + sec * 100;
    }
}

function gameFail() {
    if (sec == 0) {
        origValues();
        stopTimer();
        resetTimer();
        playGameLose();
        gameControls.classList.add("hide");
        gameEnd.classList.remove("hide");
        title.innerHTML = "You Lose ";
        score.innerHTML = "Better luck next time!" ;
    }
}
