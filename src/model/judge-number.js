var _ = require('lodash');

function JudgeNumber() {
}

JudgeNumber.prototype.getScore = function (inputArrays, randomNumberArrays) {
  var count = 0;
  var aCount = 0;
  for(var i = 0; i < randomNumberArrays.length; i++) {
    if (randomNumberArrays[i] === inputArrays[i]) {
      aCount++;
    }

    for(var x = 0; x < inputArrays.length; x++) {
      if(inputArrays[x] === randomNumberArrays[i]){
        count ++;
      }
    }
  }

  return aCount + 'A' + (count - aCount) + 'B';
};

module.exports = JudgeNumber;
