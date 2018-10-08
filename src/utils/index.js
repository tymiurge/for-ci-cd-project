import { notToUse } from './warnings'
import { strIsNumber } from './validation'
import { chunkArray, fieldsAggregator } from './arrays'

const warnings = {
    notToUse
}

const validation = {
    strIsNumber
}

const arrays = {
    chunkArray,
    fieldsAggregator
}

export {
    warnings,
    validation,
    arrays
}
