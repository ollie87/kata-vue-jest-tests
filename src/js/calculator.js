var Calculator = function () {}

Calculator.prototype = {
  _checkLengthArguments: (argumentsLength, spectedLength) => {
    if (argumentsLength < spectedLength) throw new Error('Incorrect number of arguments')
  },
  substract: function (a, ...args) {
    this._checkLengthArguments(arguments.length, 2)

    return a - args.reduce((prev, next) => {
      return prev + next
    })
  },
  sum: function (a, ...args) {
    this._checkLengthArguments(arguments.length, 2)

    var b = args.reduce((prev, next) => {
      return prev + next
    })
    return a + b
  }
}

module.exports = Calculator
