import { validation } from 'utils'

it('isStrNumber positive case', () => {
    expect(validation.strIsNumber('123')).toEqual(true)
});

it('isStrNumber negative case', () => {
    expect(validation.strIsNumber('word')).toEqual(false)
})

it('isStrNumber returns false if input starts from 0', () => {
    expect(validation.strIsNumber('099')).toEqual(false)
})

it('strIsInDateFormat positive case', () => {
    expect(validation.strIsInDateFormat('11-10-2018')).toEqual(true)
})

it('strIsInDateFormat negative case', () => {
    expect(validation.strIsInDateFormat('112-10-2018')).toEqual(false)
})

it('strIsInDateFormat negative case - wrong delimiter with right format', () => {
    expect(validation.strIsInDateFormat('112/10/2018')).toEqual(false)
})