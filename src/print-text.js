function PrintText() {

}

PrintText.prototype.getText = function(resultScore) {

  if(resultScore === '4A0B') {
    return 'congratulation !!!';
  } else if (resultScore === '0A0B'){
    return 'game over';
  } else {
    return resultScore;
  }
};

module.exports = PrintText;
