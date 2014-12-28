jest.dontMock('../src/random-number');

describe('RandomNumber', function() {
  describe('#getRandomNumberArray', function() {
    it('should return the randomNumberIsTrue', function() {
      var RandomNumber = require('../src/random-number.js');
      var randomNumber = new RandomNumber();

      var result = randomNumber.getRandomNumberArray();

      expect(result.length).toBe(4);
    });
  });
});
