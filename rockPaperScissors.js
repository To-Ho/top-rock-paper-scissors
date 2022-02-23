        //Computer play function
        //Return 'Rock' 'Paper' 'Scissors' randomly
        function computerPlay() {
            var items = ['Rock', 'Paper', 'Scissors'];
            //generate a result randomly from the array
            var result = items[Math.floor(Math.random() * items.length)];
            return result;
        }

        //Function to play single round of RPS
        function playRound(playerSelection, computerSelection) {
            let roundResult;
            //Draw condition
            if(playerSelection === computerSelection) {
                roundResult = `Draw! ${playerSelection} ' and ' ${computerSelection} ' is the same!'`;
            }//Win condition
            else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') 
                    || (playerSelection === 'Paper' && computerSelection === 'Rock')
                    || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
                roundResult = `You win! ${playerSelection} 'beats' ${computerSelection}`;
            }//Lose condition
            else {
                roundResult = `You lose! ${computerSelection} 'beats' ${playerSelection}`;
            }
            return roundResult;
        }

        //Function to play the game for 5 rounds
        function playGame() {
            for (let i = 0; i < 5; i++) {
                let computerSelection = computerPlay();
                let playerSelection = userInput();
                //Check if the string is Rock, Paper, or Scissors
                if ((playerSelection === 'Rock') || (playerSelection === 'Paper') || (playerSelection === 'Scissors')) {
                    console.log(playRound(playerSelection, computerSelection));
                } else {
                    console.log('Invalid input!');
                }                
            }
        }

        //Function to capitalize the first letter of the give string and return that capital letter.
        function capitalizeFirstLetter(string) {
            let capLetter = string.charAt(0);
            capLetter = capLetter.toUpperCase();
            return capLetter;
        }

        //Function to capitalize the first letter of the given string and return a new string with it.
        function capitalize(string) {
            let leftOverString = string.slice(1).toLowerCase(); //get the rest of the string and lowercase it.
            let newString = capitalizeFirstLetter(string).concat(leftOverString);
            return newString;
        }
        
        //User input
        function userInput() {
            //prompt user to input and then capitalize the first letter of the string.
            let userInput = capitalize(prompt('Rock, Paper, or Scissors?', ''));
            return userInput;
        }
        playGame();