
const regexes = {
  visa: '[0-9]{4}[ -][0-9]{4}[ -][0-9]{4}[ -][0-9]{4}',
  amex: '[3][4|7][0-9]{2}-[0-9]{6}-[0-9]{5}'
}

export const valiDate = entry => {
  let current = new Date()
  let currentYear = current.getFullYear()
  let currentMonth = current.getMonth() + 1 // 0 indexed
  let entryYear = Number(entry.slice(0, 4))
  let entryMonth = Number(entry.slice(-2)) 
  if (currentYear < entryYear) return true
  if (currentYear === entryYear) {
    if (currentMonth < entryMonth) return true
  }
  return false
}

export const validators = {
  nameValidation: function (value) {
    let res = value.length > 3 ? 'success' : 'error'
    if (this) this.things.Name = true
    return res
  },
  cardValidation: function(value) {
    let res = false
    if (value.match(regexes.amex)) {
      if (this) this.things.ccType = 'amex'
      res = true
    } else if (value.match(regexes.visa)) {
      if (this) this.things.ccType = 'visa'
      res = true
    }
    if (this) this.things.CardNumber = res
    return res === true ? 'success' : 'error'
  },
  cvvValidation: function(value) {
    console.log(this.things.ccType, 'ccv')
    let { ccType } = this.things
    let res = false
    if (ccType === 'amex' && value.match('[0-9]{4}')) res = true
    else if (ccType === 'visa' && value.match('[0-9]{3}')) res = true
    if (this) this.things.CVV2 = res
    return res === true ? 'success' : 'error'
  }, 
  dateValidation: function(e) {
    let res = false
    if (valiDate(e)) res = true
    else res = false
    if (this) this.things.Date = res
    return res === true ? 'success' : 'error'
  }
}
export default regexes