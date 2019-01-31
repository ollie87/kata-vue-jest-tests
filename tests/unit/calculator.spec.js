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

    it('Should substract should fail if it receives less than two numbers', () => {
      expect(() => {
        oCalculator.substract(4)
      }).toThrow()

      expect(() => {
        oCalculator.substract()
      }).toThrow()
    })

    it('Should substract 3 numbers', () => {
      expect(oCalculator.substract(5, 1, 2)).toEqual(2)
    })

    it('Should substract should fail if it receives an a negative number', () => {
      expect(() => {
        oCalculator.substract(-2, 3, -5, 1)
      }).toThrow()
    })
  })
  describe('Sum', () => {
    it('Should sum at least two numbers', () => {
      expect(oCalculator.sum(4, 2)).toEqual(6)
    })

    it('Should sum should fail if it receives less than two numbers', () => {
      expect(() => {
        oCalculator.substract(4)
      }).toThrow()

      expect(() => {
        oCalculator.substract()
      }).toThrow()
    })

    it('Should sum 3 numbers', () => {
      expect(oCalculator.sum(5, 1, 2)).toEqual(8)
    })

    it('Should sum should fail if it receives an a negative number', () => {
      expect(() => {
        oCalculator.sum(-2, 3, -5, 1)
      }).toThrow()
    })
  })
  describe('Multiply', () => {
    it('Should multiply at least two numbers', () => {
      expect(oCalculator.multiply(4, 2)).toEqual(8)
    })

    it('Should multiply at least 4 numbers', () => {
      expect(oCalculator.multiply(4, 2, 3, 5)).toEqual(120)
    })

    it('Should multiply should fail if it receives less than two numbers', () => {
      expect(() => {
        oCalculator.multiply(4)
      }).toThrow()

      expect(() => {
        oCalculator.multiply()
      }).toThrow()
    })

    it('Should multiply should fail if it receives an a negative number', () => {
      expect(() => {
        oCalculator.multiply(-2, 3, -5, 1)
      }).toThrow()
    })
  })
})
