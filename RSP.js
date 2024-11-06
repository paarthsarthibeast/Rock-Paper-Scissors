let userScore = 0;
let compScore = 0;

const choices = document .querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {  // Logic OP
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {  // Draw Logic
    console.log("Game Was Draw !");
    msg.innerText = "Game Was Draw ! Paly Again.";
    msg.style.backgroundColor = "#081b31" ;
}

const showWinner = (userWin , userChoice , compChoice) => {  // Win or Lose Logic
    if(userWin){
        console.log("You Win !");
        userScore ++ ;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green" ;
    }
    else{
        console.log("You Lose !");
        compScore ++ ;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red" ;
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice = ", userChoice);
    //Generate computer choice
    const compChoice = getCompChoice();
    console.log("Computer Choice = ",compChoice);

    if (userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            //scissors , paper
            userWin = compChoice === "paper" ? false : true ;
        }
        else if (userChoice === "paper"){
            //scissors , rock
            userWin = compChoice === "scissors" ? false : true ;
        }
        else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }
        // Win or Lose Game
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked",userChoice);
        playGame(userChoice);  //Generate user choice
    });
});


// -------Rules Section------- //

let rules = document.querySelector(".rps_rules");
let rulesdiv = document.querySelector(".rules_div");
let body = document.querySelector("#body");
rules.onclick = () => {
    rulesdiv.classList.add("open-rules_div");
    // body.classList.add("blur");
};
let rulesclose = document.querySelector(".p_close");
rulesclose.onclick = () => {
    rulesdiv.classList.remove("open-rules_div");
};

// -------Animated Background------- //

document.addEventListener("DOMContentLoaded", () => {
    console.log("The page is loaded and the background animation is running!");
});