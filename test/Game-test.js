const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be a new instance of a game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', () => {
    expect(game.currentRound).to.equal(0);
  });

  it('should create a new Round using the Deck', () => {
    game.start();
    const currentDeck = game.currentRound.deck;
    expect(currentDeck.cards[0]).to.be.an.instanceof(Card);
    expect(currentDeck).to.be.an.instanceof(Deck);
    expect(currentDeck.cards.length).to.equal(prototypeQuestions.length);
  });
});
