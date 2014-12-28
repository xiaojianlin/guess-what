var _ = require('lodash');

function JudgeNumber() {
}
JudgeNumber.prototype.getScore = function (inputArrays, randomNumberArrays) {
  if (inputArrays.toString() === randomNumberArrays.toString()) {
    return '4A0B';
  }

  var count = 0;
  _.forEach(randomNumberArrays, function(randomNumberArray) {
    var isExit = _.contains(_.map(inputArrays),randomNumberArray);
    if (isExit) {
      count++;
    }
  });
  if (count === 0) {
    return '0A0B';
  }
  return null;
};

module.exports = JudgeNumber;
