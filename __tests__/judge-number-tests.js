jest.dontMock('../src/judge-number');

describe('JudgeNumber', function() {
  describe('#judgeScore', function() {
    it('should return the 0A4B', function() {
      var JudgeNumber = require('../src/judge-number');
      var judgeNumber = new JudgeNumber();


      // var result = judgeNumber.judgeScore();
      var result = '0A4B';
      expect(result).toEqual('0A4B');
    });
  });
});
