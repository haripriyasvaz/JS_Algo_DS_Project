function telephoneCheck(str) {
  const expression = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
  return expression.test(str)
}


telephoneCheck("555-555-5555");