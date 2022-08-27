export function emailValidation(email) {
  const regularE = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  const emailIsValid = regularE.test(email)

  return emailIsValid
}

export function lengthValidation(minLength, string) {
  const stringIsValid = string.length >= minLength

  return stringIsValid
}
