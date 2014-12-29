jest.dontMock('../src/model/random-number');

describe('RandomNumber', function() {
  describe('#getRandomNumberArray', function() {
    var RandomNumber,randomNumber;
    beforeEach(function() {
      RandomNumber = require('../src/model/random-number.js');
      randomNumber = new RandomNumber();
    });


    it('should return the randomNumberIsLength', function() {
      var result = randomNumber.getRandomNumberArray();

      expect(result.length).toBe(4);
    });

    it('should return the randomNumberIsNotRepeat', function() {
      var count = 0;
      var result = randomNumber.getRandomNumberArray();

      for(var i = 0; i < result.length; i++) {
        for (var j = 0; j < result.length; j++) {
          if (result[i] === result[j] && i !== j) {
            count ++;
          }
        }
      }
      expect(count).toBe(0);
    });
  });
});
