const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    let newTurn = new Turn(guess, currentCard);
    this.turns++
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);
    }
    return newTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correctGuesses = this.turns - this.incorrectGuesses.length;
    let percentCorrect = Math.round((correctGuesses / this.turns) * 100);
    return percentCorrect;
  }

  calculateGameTime() {
    let milliseconds = (Date.now() - this.startTime);
    let seconds = Math.round((milliseconds / 1000) % 60);
    (seconds < 10) ? seconds = `0${seconds}` : seconds;
    let minutes = Math.round(milliseconds / 60000);
    let totalTime;
    (minutes === 1) ? totalTime = `1:${seconds}` : totalTime = `${minutes}:${seconds}`;
    return totalTime;
  }


  endRound() {
    let percent = this.calculatePercentCorrect();
    let time = this.calculateGameTime();
    console.log(`** Round over! ** You answered ${percent}% of the questions correctly! Round time: ${time}`);
    return `** Round over! ** You answered ${percent}% of the questions correctly! Round time: ${time}`;
  }

}

module.exports = Round;
