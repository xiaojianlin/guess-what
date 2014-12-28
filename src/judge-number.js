function JudgeNumber() {
  // this.inputArrays = inputArrays;
  // this.randomNumberArrays = randomNumberArrays;
}

JudgeNumber.prototype.getScore = function (inputArrays, randomNumberArrays) {
  if (inputArrays.toString() === randomNumberArrays.toString()) {
    return '4A0B';
  }
  return null;
};

module.exports = JudgeNumber;
