const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card, turn, card1, turn1;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    turn = new Turn('array', card);
    turn1 = new Turn('array', card1);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate a new turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a user guess', () => {
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('array');
  });

  it('should have a current card in play', () => {
    expect(turn.currentCard).to.be.an('object');
    expect(turn.currentCard).to.equal(card);
  });

  it('should be able to return the user guess', () => {
    const returnedGuess = turn.returnGuess();
    expect(returnedGuess).to.equal('array');
  });

  it('should be able to return the current card in play', () => {
    const returnCurrentCard = turn.returnCard();
    expect(returnCurrentCard).to.equal(card);
  });

  it('should be able to evaluate the user guess', () => {
    const checkGuess = turn.evaluateGuess();
    expect(checkGuess).to.equal(false);
  });

  it('should display feedback if guess is incorrect', () => {
    const feedback = turn.giveFeedback();
    expect(feedback).to.equal('Incorrect!');
  });

  it('should display different feedback if guess is correct', () => {
    const feedback1 = turn1.giveFeedback();
    expect(feedback1).to.equal('Correct!');
  });
});
