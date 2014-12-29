jest.dontMock('../src/model/print-text');

describe('PrintText', function () {
  describe('#getText', function () {
    it('should return getText congratulation !!!', function () {
      var text = '4A0B';
      var PrintText = require('../src/model/print-text');
      var printText = new PrintText();

      var result = printText.getText(text);

      expect(result).toEqual('congratulation !!!');
    });

    it('should return getText 1A3B !!!', function () {
      var text = '1A3B';
      var PrintText = require('../src/model/print-text');
      var printText = new PrintText();

      var result = printText.getText(text);

      expect(result).toEqual('game over');
    });
  });
});
