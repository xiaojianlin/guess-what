var RandomNumber = require('./model/random-number');
var Input = require('./model/input');
var JudgeNumber = require('./model/judge-number');
var PrintText = require('./model/print-text');


function guessNumber(){
  var randomNumber = new RandomNumber();
  var randomNumberArrays = randomNumber.getRandomNumberArray();

  var inputArrays = Input.getInputArrays();

  var judgeNumber = new JudgeNumber();
  var answer = judgeNumber.getScore(inputArrays,randomNumberArrays);

  var printText = new PrintText();
  var textAnswer = printText.getText(answer);

  console.log(textAnswer);
}
