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
});
