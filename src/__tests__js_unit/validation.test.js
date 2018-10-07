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