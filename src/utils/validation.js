/**
 * returns true is the str contains only digits and doesn't start from 0,
 * and false otherwise
 * @param {string} str 
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
 * @param {string} str 
 * @param {string} format 
 */
const strIsInDateFormat = (str, format) => {
    const regex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/
    return regex.test(str)
}

const strIsNotEmpty = str => str !== ''

/**
 * checks whether the given str is in email format; if so - true returned, false - otherwise
 * @param {string} str 
 */
const strIsEmail = str => {
  const re = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i
  return re.test(String(str).toLowerCase())
}

const validation = {
  strIsNumber,
  strIsInDateFormat,
  strIsNotEmpty,
  strIsEmail
}

export default validation
