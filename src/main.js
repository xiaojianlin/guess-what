var RandomNumber = require('./model/random-number');
var Input = require('./model/input');
var JudgeNumber = require('./model/judge-number');
var PrintText = require('./model/print-text');


function guessNumber(){
  var time = 6;
  PrintText.title();
  for(var i = 0; i < time; i++) {
    console.log('Please input 4 number!');
    var randomNumber = new RandomNumber();
    var randomNumberArrays = randomNumber.getRandomNumberArray();

    var inputArrays = Input.getInputArrays();

    var judgeNumber = new JudgeNumber();
    var answer = judgeNumber.getScore(inputArrays,randomNumberArrays);

    var printText = new PrintText();
    var textAnswer = printText.getText(answer);
    if (textAnswer === 'congratulation !!!') {
      console.log(textAnswer);
      break;
    } else {
      console.log(textAnswer);
    }
  }
}

module.exports = guessNumber;
