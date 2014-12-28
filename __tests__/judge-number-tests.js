jest.dontMock('../src/judge-number');

describe('JudgeNumber', function() {
  describe('#getScore', function() {
    it('should return the 0A4B', function() {

      var JudgeNumber = require('../src/judge-number');
      var judgeNumber = new JudgeNumber();

      var result = judgeNumber.getScore([1,2,3,4],[1,2,3,4]);

      expect(result).toEqual('4A0B');
    });
  });
});
