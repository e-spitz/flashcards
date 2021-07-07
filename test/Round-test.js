const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should instantiate a new Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck of a cards in a round', () => {
    expect(round.deck.cards).to.be.an('array')
    expect(round.deck).to.equal(deck);
  });

  it('should return the current card being played', () => {
    const returnCard = round.returnCurrentCard();
    expect(returnCard).to.equal(card1)
  });

  it('should be able to count turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.be.an('array');
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should update turn count when a guess is made', () => {
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('should check for an incorrect guess', () => {
    const newTurn = round.takeTurn('array');
    expect(newTurn).to.equal('Incorrect!');
  });

  it('should check for a correct guess', () => {
    const newTurn = round.takeTurn('object');
    expect(newTurn).to.equal('Correct!');
  });

  it('should push card id into incorrect guesses', () => {
    const incorrectGuesses = round.incorrectGuesses;
    round.takeTurn('array');
    expect(incorrectGuesses).to.deep.equal([1]);
    expect(incorrectGuesses.length).to.equal(1);
    round.takeTurn('function');
    expect(incorrectGuesses).to.deep.equal([1, 2]);
    expect(incorrectGuesses.length).to.equal(2);
    round.takeTurn('mutator method');
    expect(incorrectGuesses).to.deep.equal([1, 2]);
    expect(incorrectGuesses.length).to.equal(2);
  });

  it('should store the start time of the round', () => {
    expect(round.startTime).to.equal(Date.now());
  });

  it('should be able to calculate total game time', () => {
    expect(round.calculateGameTime).to.be.a('function')
    expect(round.calculateGameTime()).to.be.a('number')
  })

  it('should display whether answer was correct or incorrect', () => {
    const turn1 = round.takeTurn('array');
    expect(turn1).to.equal('Incorrect!');
    const turn2 = round.takeTurn('function');
    expect(turn2).to.equal('Incorrect!');
    const turn3 = round.takeTurn('mutator method');
    expect(turn3).to.equal('Correct!');
  });

  it('should be able to calculate the percent of correct guesses', () => {
    round.takeTurn('object')
    round.takeTurn('array')
    round.takeTurn('iteration method')
    const correctAvg = round.calculatePercentCorrect();
    expect(correctAvg).to.equal(67);
  });

  it('should display a message at the end of the round showing percent of correct guesses', () => {
    round.takeTurn('object')
    round.takeTurn('array')
    round.takeTurn('iteration method')
    const correctAvg = round.calculatePercentCorrect();
    expect(correctAvg).to.equal(67);

    const displayMsg = round.endRound();
    expect(displayMsg).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  });
});
