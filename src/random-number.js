function RandomNumber(){
  this.randomNumber = [];
}

RandomNumber.prototype.getRandomNumberArray = function () {
  for(var i = 0; i < 4; i++){
    this.randomNumber[i] = Math.floor(Math.random()*10);
  }
  return this.randomNumber;
};

module.exports = RandomNumber;
