/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return Math.pow(x, 2);
  },
  sumAll: function (numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  },
  getAverage: function (numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    result /= numbers.length;
    return result;
  }
};
