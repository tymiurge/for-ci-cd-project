/**
 * returns true is the str contains only digits and doesn't start from 0,
 * and false otherwise
 * @param {*} str 
 */
const strIsNumber = str => {
    if (!(/^\d+$/.test(str))) {
        return false
    }
    if (/^0/.test(str)) {
        return false
    }
    return true
}

/**
 * returns true if str is in the defined date format and false otherwise.
 * supported formats:
 *      - dd-mm-yyyy
 * @param {*} str 
 * @param {*} format 
 */
const strIsInDateFormat = (str, format) => {
    const regex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/
    return regex.test(str)
}

export { strIsNumber, strIsInDateFormat }