jest.dontMock('../src/model/input');

describe('Input', function () {
  describe(',getInputArrays', function () {
    it('should return inputArrays', function () {
      var Input = require('../src/model/input');

      var result = Input.getInputArrays();

      expect(result).toEqual([1,2,3,4]);
    });
  });
});
