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

  it('should return sorry!_But_we_given_you_presentation_2A2B,_please_again!', function() {
    randomNumberArrays = [1,2,3,4];
    inputArrays = [1,2,4,3];

    var answer = judgeNumber.getScore(inputArrays,randomNumberArrays);
    var result = printText.getText(answer);

    expect(result).toEqual('sorry! But we given you presentation 2A2B, please again!');

  });
});
