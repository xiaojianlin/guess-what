jest.dontMock('../src/print-text');

describe('PrintText', function () {
  describe('#getText', function () {
    it('should return getText congratulation !!!', function () {
      var text = '4A0B';
      var PrintText = require('../src/print-text');
      var printText = new PrintText();

      var result = printText.getText(text);

      expect(result).toEqual('congratulation !!!');
    });
  });
});
