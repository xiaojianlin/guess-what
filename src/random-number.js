var _ = require('lodash');
function RandomNumber(){
  this.randomNumber = [];
}

RandomNumber.prototype.getRandomNumberArray = function () {
  for(var i = 0; i < 4; i++){
    var value =  Math.floor(Math.random() * 9);
    var isEqual = false;

    for(var idx in this.randomNumber){
      if(this.randomNumber[idx] === value){
        isEqual = true;
        break;
      }
    }

    if(isEqual){
      i--;
    } else {
      this.randomNumber[this.randomNumber.length] = value;
    }
  }
  return this.randomNumber;
};

module.exports = RandomNumber;
