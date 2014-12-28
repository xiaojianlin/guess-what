jest.dontMock('../src/input');

describe('Input', function () {
  describe(',getInputArrays', function () {
    it('should return inputArrays', function () {
      var Input = require('../src/input');

      var result = Input.getInputArrays();

      expect(result).toEqual([1,2,3,4]);
    });
  });
});
