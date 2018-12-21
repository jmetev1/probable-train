import { validators, valiDate } from './util'
const {
  nameValidation,  
  cardValidation,  
} = validators

it('name ', () => {
  ['roger', 'waters'].forEach(n => {
    expect(nameValidation(n)).toBe('success')
  })
  expect(nameValidation('n')).toBe('error')
});
test('card pass', () => {
  ['1234-1234-1234-1234', '3434-123456-12345'].forEach(n => {
    expect(cardValidation(n)).toBe('success')
  })
})

test('card fail', () => {
  ['123-123', '3555-123456-12345'].forEach(n => {
    expect(cardValidation(n)).toBe('error')
  })
})

test('date pass', () => {
  ['2019-01'].forEach(n => {
    expect(valiDate(n)).toBeTruthy()
  })
  expect(valiDate('2018-12')).toBeFalsy()
})