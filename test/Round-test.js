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

});
