function PrintText() {

}

PrintText.prototype.getText = function(resultScore) {

  if(resultScore === '4A0B') {
    return 'congratulation !!!';
  } else {
    return 'game over';
  }
};

module.exports = PrintText;