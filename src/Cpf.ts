
export default class Cpf {
  readonly value: string

  private FIRST_DIGIT_FACTOR = 10
  private SECOND_DIGIT_FACTOR = 11

  constructor(value: string) {
    const isValid = this.validate(value)
    if (!isValid) throw new Error("Invalid CPF")
    this.value = value
  }
  private validate(value: string) {
    const cpf = this.cleanCpf(value)
    if (!this.hasValidLength(cpf)) return false
    if (this.isIdenticalDigits(cpf)) return false
    const checkDigit = this.extractCheckDigit(cpf)
    const firstDigit = this.calculateVerificationDigit(cpf, this.FIRST_DIGIT_FACTOR)
    const secondDigit = this.calculateVerificationDigit(cpf, this.SECOND_DIGIT_FACTOR)
    const calculatedCheckDigit = `${firstDigit}${secondDigit}`
    return checkDigit === calculatedCheckDigit;
  }
  private cleanCpf(cpf: string) {
    return cpf.replace(/\D/g, "")
  }
  private hasValidLength(cpf: string) {
    return cpf.length === 11
  }
  private isIdenticalDigits(cpf: string) {
    return cpf.split("").every(c => c === cpf[0])
  }
  private calculateVerificationDigit(cpf: string, factor: number) {
    let total = 0
    for (const digit of cpf) {
      if (factor > 1) total += parseInt(digit) * factor--
    }
    const rest = total % 11
    return rest < 2 ? 0 : 11 - rest
  }
  private extractCheckDigit(cpf: string) {
    return cpf.slice(-2)
  }
}
