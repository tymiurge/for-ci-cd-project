import { notToUse } from './warnings'
import { strIsNumber } from './validation'
import { chunkArray, fieldAggregator, complexMapper } from './arrays'

const warnings = {
    notToUse
}

const validation = {
    strIsNumber
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
