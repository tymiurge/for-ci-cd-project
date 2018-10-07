const strIsNumber = str => {
    if (!(/^\d+$/.test(str))) {
        return false
    }
    if (/^0/.test(str)) {
        return false
    }
    return true
}

export { strIsNumber }