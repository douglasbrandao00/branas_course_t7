import Cpf from '../src/Cpf'

const CPF = {
  cpfWithSeparator: "935.411.347-80",
  cpfWithNoSeparator: "93541134780",
  cpfWithSomeSeparators: "935.411.34780",
  withRepeatedNumbersAndSeparator: ["111.111.111-11", "222.222.222-22", "333.333.333-33"]
}

describe("Cpf", () => {
  test("Should return true for a valid cpf with separator", () => {
    const isValid = new Cpf(CPF.cpfWithSeparator)

    expect(isValid).toBeTruthy()
  })
  test("Should return true for a valid cpf with some separator", () => {
    const isValid = new Cpf(CPF.cpfWithSomeSeparators)

    expect(isValid).toBeTruthy()
  })
  test("Should return true for a valid cpf with no separator", () => {
    const isValid = new Cpf(CPF.cpfWithNoSeparator)

    expect(isValid).toBeTruthy()
  })
  test.each(CPF.withRepeatedNumbersAndSeparator)("Should return false for a invalid cpf with repeated number", (cpf) => {

    expect(() => new Cpf(cpf)).toThrow()
  })
})
