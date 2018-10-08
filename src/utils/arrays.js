const chunkArray = (arr, size) => {
    var results = [];
    for (var i = 0; i <arr.length; i += size)
        results.push(arr.slice(i, i + size))
    return results
}

/**
 * collects values of the given fieldName across array of objects
 * @param {*} arrOfObjs - array of the following shape: 
 * [
 *  [{field: 'title', type: 'str', placeholder:'Title', label: 'title'}],
 *  [
 *      {field: 'amount', type: 'number', placeholder:'Amount', label: 'Amount'}, 
 *      {field: 'tags', type: 'array', placeholder:'Tags', label: 'Tags'}
 *  ],
 *  [{field: 'from', value: 'select', options: [...]}, placeholder:'From', label: 'From']
 * ]
 * @param {*} fieldName 
 */
const fieldAggregator = (arrOfObjs, fieldName) => {
    const traverser = (token, fieldName, aggregator) => {
        if (!Array.isArray(token)) {
            return [...aggregator, token[fieldName]]
        }
        for(let i = 0; i < token.length; i++) {
            const next = token[i]
            aggregator = traverser(next, fieldName, aggregator)
        }
        return aggregator
    }
    return traverser(arrOfObjs, fieldName, [])
}


const complexMapper = (arrOfObjs, callback) => {
    const traverser = (token, callback, aggregator) => {
        if (!Array.isArray(token)) {
            return [...aggregator, callback(token)]
        }
        for(let i = 0; i < token.length; i ++) {
            aggregator = traverser(token[i], callback, aggregator)
        }
        return aggregator
    }
    return traverser(arrOfObjs, callback, [])
}

export { chunkArray, fieldAggregator, complexMapper }