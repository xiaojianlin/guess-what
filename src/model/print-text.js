function PrintText() {

}

PrintText.prototype.getText = function(resultScore) {

  if(resultScore === '4A0B') {
    return 'congratulation !!!';
  } else {
    return 'sorry! But we given you presentation ' + resultScore + ', please again!';
  }
};

module.exports = PrintText;
