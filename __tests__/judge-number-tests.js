jest.dontMock('../src/model/judge-number');

describe('JudgeNumber', function() {
  describe('#getScore', function() {
    var JudgeNumber,judgeNumber;
    beforeEach(function() {
      JudgeNumber = require('../src/model/judge-number');
      judgeNumber = new JudgeNumber();
    });

    it('should return the 4A0B', function() {
      var result = judgeNumber.getScore([1,2,3,4],[1,2,3,4]);

      expect(result).toEqual('4A0B');
    });

    it('should return the 0A0B', function() {
      var result = judgeNumber.getScore([1,2,3,4],[5,6,7,8]);

      expect(result).toEqual('0A0B');
    });

    it('should return the 1A1B', function() {
      var result = judgeNumber.getScore([1,3,5,6],[1,2,3,4]);

      expect(result).toEqual('1A1B');
    });

    it('should return the 0A4B', function() {
      var result = judgeNumber.getScore([1,2,3,4],[4,3,2,1]);

      expect(result).toEqual('0A4B');
    });
  });
});
