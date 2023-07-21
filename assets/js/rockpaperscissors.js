document.addEventListener('DOMContentLoaded', () => {

    let userScore = 0;
    let computerScore = 0;
    
    const computerChoiceDisplay = document.getElementById('computer-result')
    const userChoiceDisplay = document.getElementById('you-choose')
    const result2Display = document.getElementById('result2')
    const possibleChoices = document.querySelectorAll('button')
    let userChoice
    let result2

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult2()
    }))

    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random()*possibleChoices.length) + 1
    
        if (randomNumber === 1) {
            computerChoice = 'rock'
        }
        if (randomNumber === 2) {
            computerChoice = 'scissors'
        }
        if (randomNumber === 3) {
            computerChoice = 'paper'
        }
        
        computerChoiceDisplay.innerHTML = computerChoice
    }

    function getResult2() {
        if (computerChoice === userChoice) {
            result2 = 'Draw!'
        }
    
        if (computerChoice === 'rock' && userChoice === "paper") {
            result2 = 'You win!'
        }
    
        if (computerChoice === 'scissors' && userChoice === "paper") {
            result2 = 'You lose!'
        }
    
        if (computerChoice === 'paper' && userChoice === "rock"){
            result2 = 'You lose!'
        }
    
        if (computerChoice === 'rock' && userChoice === "scissors") {
            result2 = 'You lose!'
        }
    
        if (computerChoice === 'paper' && userChoice === "scissors"){
            result2 = 'You win!'
        }
    
        if (computerChoice === 'scissors' && userChoice === "rock"){
            result2 = 'You win!'
        }

        winner_div.innerHTML = result2
    }

    function main() {
        ppr_div.addEventListener('click', function() {
            game("p");
        })
        
        rck_div.addEventListener('click', function() {
            game("r");
        })
        
        scssr_div.addEventListener('click', function() {
            game("s");
        })
        
        }
    })
