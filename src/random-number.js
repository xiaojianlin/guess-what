function RandomNumber(){
  this.randomNumber = [];
}

RandomNumber.prototype.getRandomNumberArray = function () {
  // var randomNumber = [];
  for(var i = 0; i < 4; i++){
    this.randomNumber[i].push(Math.floor(Math.random()*10));
  }
  return randomNumber;
};

RandomNumber.prototype.getRandomNumberLength = function() {

};
