const Calculator = require('../../src/js/calculator')

describe('Calculator', () => {
  var oCalculator
  beforeEach(function () {
    oCalculator = new Calculator()
  })
  afterEach(function () {
    oCalculator = null
  })

  describe('Substract', () => {
    it('Should substract at least two numbers', () => {
      expect(oCalculator.substract(4, 2)).toEqual(2)
    })

    it('Should substract should fail id it receives less than two numbers', () => {
      expect(() => {
        oCalculator.substract(4)
      }).toThrow()

      expect(() => {
        oCalculator.substract()
      }).toThrow()
    })

    it('Should substract 3 numbers (5 -1 - 2 = 2', () => {
      expect(oCalculator.substract(5, 1, 2)).toEqual(2)
    })
  })
  describe('Sum', () => {
    it('Should sum at least two numbers', () => {
      expect(oCalculator.sum(4, 2)).toEqual(6)
    })

    it('Should sum should fail id it receives less than two numbers', () => {
      expect(() => {
        oCalculator.substract(4)
      }).toThrow()

      expect(() => {
        oCalculator.substract()
      }).toThrow()
    })

    it('Should sum 3 numbers (5 + 1 + 2 = 8', () => {
      expect(oCalculator.sum(5, 1, 2)).toEqual(8)
    })
  })
})
