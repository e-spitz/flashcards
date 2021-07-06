const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('array', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate a new turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a user guess', () => {
    expect(turn.guess).to.equal('array');
    expect(turn.guess).to.be.a('string');
  });

  it('should have a current card in play', () => {
    expect(turn.currentCard).to.equal(card);
    expect(turn.currentCard).to.be.an('object');
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
});
