const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
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
}

module.exports = Round;
