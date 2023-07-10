/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm run test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.
*/


function generateWinningNumber () {
    return Math.floor(Math.random() * 100) + 1;
}

function shuffle(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      let x = Math.floor(Math.random() * (j + 1));
      [arr[j], arr[x]] = [arr[x], arr[j]];
    }
    return arr;
  }

class Game {
    constructor() {
        this.playersGuess = null;
        this.pastGuesses = [];
        this.winningNumber = generateWinningNumber();
    }

    difference() {
        return Math.abs(this.playersGuess - this.winningNumber);
    }

    isLower() {
        if (this.playersGuess < this.winningNumber){
            return true;
        }else {
            return false;
        }
    }

    playersGuessSubmission(num) {
        if (typeof num !== 'number' || isNaN(num)){
            throw new Error("number expected");
        }else if (num < 1 || num > 100){
            // return "That is an invalid guess"
            throw new Error("That is an invalid guess")
        }else{
            this.playersGuess = num;
            console.log(this.checkGuess());
        }

    }


    checkGuess() {
        this.pastGuesses.push(this.playersGuess);
        return `guess: ${this.playersGuess} winning number ${this.winningNumber}`;
    }

    newGame() {
        this.playersGuess = null;
        this.pastGuesses = [];
        this.winningNumber = generateWinningNumber;
    }

    provideHint() {
        let randomArr = [];
        randomArr.push(Math.floor(Math.random() * 100) + 1)
        randomArr.push(Math.floor(Math.random() * 100) + 1)
        randomArr.push(this.winningNumber);
        return randomArr;
    }
}

let firstGame = new Game();

firstGame.playersGuessSubmission(5);
let guess = firstGame.checkGuess();

// console.log(firstGame.winningNumber);
// console.log(difference);

// console.log(shuffle([1,2,3,4]))
// console.log(typeof 5);
// console.log