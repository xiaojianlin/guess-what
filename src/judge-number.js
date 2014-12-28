var _ = require('lodash');

function JudgeNumber() {
}
JudgeNumber.prototype.getScore = function (inputArrays, randomNumberArrays) {
  var aCount = 0;
  for(var i = 0; i < inputArrays.length; i++) {
    if (randomNumberArrays[i] === inputArrays[i]) {
      aCount++;
    }
  }

  var count = 0;
  for(var j = 0; j < randomNumberArrays.length; j++){
    for(var x = 0; x < inputArrays.length; x++) {
      if(inputArrays[x] === randomNumberArrays[j]){
        count ++;
      }
    }
  }

  return aCount + 'A' + (count - aCount) + 'B';
};

module.exports = JudgeNumber;
