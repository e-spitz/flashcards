const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Game = require('../src/Game')

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
  
})
