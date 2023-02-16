var rounds = 1;
var PlayerScore = 0;
var ComputerScore = 0;

var btnRock = document.getElementById("Rock");
var btnPaper = document.getElementById("Paper");
var btnScissors = document.getElementById("Scissors");
var btnReset = document.getElementById("Reset");

var display = document.querySelector("div");

btnReset.addEventListener('click', function(e){
    rounds = 1;
    PlayerScore = 0;
    ComputerScore = 0;

    display.innerText = "";
});

btnRock.addEventListener('click', function(e){
    if(rounds < 6)
    {
        display.innerText = "Round " + rounds;
        playRound("Rock", computerPlay());
        rounds++;
    }
    else
    {
        if(PlayerScore > ComputerScore)
        {
            display.innerText = "Player wins with a score of: " + PlayerScore; 
        }
        else if(PlayerScore < ComputerScore)
        {
            display.innerText = "Computer wins with a score of: " + ComputerScore; 
        }
        else
        {
            display.innerText = "It's a tie!\nScores:\n-Player   = " + PlayerScore + "\n-Computer = " + ComputerScore; 
        }
    }
});

btnPaper.addEventListener('click', function(e){
    if(rounds < 6)
    {
        display.innerText = "Round " + rounds;
        playRound("Paper", computerPlay());
        rounds++;
    }
    else
    {
        if(PlayerScore > ComputerScore)
        {
            display.innerText = "Player wins with a score of: " + PlayerScore; 
        }
        else if(PlayerScore < ComputerScore)
        {
            display.innerText = "Computer wins with a score of: " + ComputerScore; 
        }
        else
        {
            display.innerText = "It's a tie!\nScores:\n-Player   = " + PlayerScore + "\n-Computer = " + ComputerScore; 
        }
    }
});

btnScissors.addEventListener('click', function(e){
    if(rounds < 6)
    {
        display.innerText = "Round " + (rounds);
        playRound("Scissors", computerPlay());
        rounds++;
    }
    else
    {
        if(PlayerScore > ComputerScore)
        {
            display.innerText = "Player wins with a score of: " + PlayerScore; 
        }
        else if(PlayerScore < ComputerScore)
        {
            display.innerText = "Computer wins with a score of: " + ComputerScore; 
        }
        else
        {
            display.innerText = "It's a tie!\nScores:\n-Player   = " + PlayerScore + "\n-Computer = " + ComputerScore; 
        }
    }
});

function computerPlay(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase(); 
    
    display.innerText += '\nPlayer selection: ' + playerSelection;
    display.innerText += '\nComputer selection: ' + computerSelection;

    if(playerSelection == "rock" && computerSelection == "Rock"){
        display.innerText += "\nIt's a tie!";
    }

    else if(playerSelection == "paper" && computerSelection == "Rock"){
        display.innerText += "\nPlayer wins!";
        PlayerScore++;
    }

    else if(playerSelection == "scissors" && computerSelection == "Rock"){
        display.innerText += "\nComputer wins!";
        ComputerScore++;
    }

    else if(playerSelection == "rock" && computerSelection == "Paper"){
        display.innerText += "\nComputer wins!";
        ComputerScore++;
    }

    else if(playerSelection == "paper" && computerSelection == "Paper"){
        display.innerText += "\nIt's a tie!";
    }

    else if(playerSelection == "scissors" && computerSelection == "Paper"){
        display.innerText += "\nPlayer wins!";
        PlayerScore++;
    }

    else if(playerSelection == "rock" && computerSelection == "Scissors"){
        display.innerText += "\nPlayer wins!";
        PlayerScore++;
    }

    else if(playerSelection == "paper" && computerSelection == "Scissors"){
        display.innerText += "\nComputer wins!";
        ComputerScore++;
    }

    else if(playerSelection == "scissors" && computerSelection == "Scissors"){
        display.innerText += "\nIt's a tie!";
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------


