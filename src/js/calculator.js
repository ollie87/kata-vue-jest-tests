var Calculator = function () {}

Calculator.prototype = {
  _checkLengthArguments: (argumentsLength, spectedLength) => {
    if (argumentsLength < spectedLength) throw new Error('Incorrect number of arguments')
  },
  _checkNegativeNumber: (numbers) => {
    numbers.forEach(number => {
      if (number < 0) throw new Error('Negative numbers are not allowed')
    })
  },
  _getTotalNumbers: (a, args) => {
    let totalNumbers = args.slice(0)
    totalNumbers.push(a)
    return totalNumbers
  },
  substract: function (a, ...args) {
    this._checkLengthArguments(arguments.length, 2)
    this._checkNegativeNumber(this._getTotalNumbers(a, args))

    return a - args.reduce((prev, next) => {
      return prev + next
    })
  },
  sum: function (a, ...args) {
    this._checkLengthArguments(arguments.length, 2)
    this._checkNegativeNumber(this._getTotalNumbers(a, args))

    var b = args.reduce((prev, next) => {
      return prev + next
    })
    return a + b
  },
  multiply: function (a, ...args) {
    this._checkLengthArguments(arguments.length, 2)
    this._checkNegativeNumber(this._getTotalNumbers(a, args))
    let result = a
    args.forEach(element => {
      result = result * element
    })

    return result
  }
}

module.exports = Calculator
