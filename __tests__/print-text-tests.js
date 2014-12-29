jest.dontMock('../src/model/print-text');

describe('PrintText', function () {
  describe('#getText', function () {
    var PrintText,printText;
    beforeEach(function() {
      PrintText = require('../src/model/print-text');
      printText = new PrintText();
    });
    
    it('should return getText congratulation !!!', function () {
      var result = PrintText.title();
      expect(result).toEqual('Welcome!!\n The guess-what(guess number).\n');
    });

    it('should return getText congratulation !!!', function () {
      var text = '4A0B';

      var result = printText.getText(text);

      expect(result).toEqual('congratulation !!!');
    });

    it('should return getText 1A3B !!!', function () {
      var text = '1A3B';

      var result = printText.getText(text);

      expect(result).toEqual('sorry! But we given you presentation 1A3B, please again!');
    });
  });
});
