import { notToUse } from './warnings'
import { strIsNumber, strIsInDateFormat } from './validation'
import { chunkArray, fieldAggregator, complexMapper } from './arrays'

const warnings = {
    notToUse
}

const validation = {
    strIsNumber,
    strIsInDateFormat
}

const arrays = {
    chunkArray,
    fieldAggregator,
    complexMapper
}

export {
    warnings,
    validation,
    arrays
}
