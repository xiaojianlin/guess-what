jest.autoMockOff();

describe('.guessNumber', function() {
  var JudgeNumber,judgeNumber,PrintText,printText;
  beforeEach(function () {
    JudgeNumber = require('../src/model/judge-number');
    judgeNumber = new JudgeNumber();

    PrintText = require('../src/model/print-text');
    printText = new PrintText();
  });

  it('should return congratulation', function() {
    randomNumberArrays = [1,2,3,4];
    inputArrays = [1,2,3,4];

    var answer = judgeNumber.getScore(inputArrays,randomNumberArrays);
    var result = printText.getText(answer);

    expect(result).toEqual('congratulation !!!');

  });
});
