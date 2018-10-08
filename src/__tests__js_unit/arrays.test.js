import { arrays } from 'utils'

const arrOfObjs = [
    [{field: 'title', type: 'str', placeholder:'Title', label: 'title'}],
    [
        {field: 'amount', type: 'number', placeholder:'Amount', label: 'Amount'}, 
        {field: 'tags', type: 'array', placeholder:'Tags', label: 'Tags'}
    ],
    [{field: 'from', type: 'select', placeholder:'From', label: 'From'}]
]

it('fieldsAggregator positive case', () => {
    
    const results = ['title', 'amount', 'tags', 'from']
    expect(arrays.fieldAggregator(arrOfObjs,'field')).toEqual(results)
})

it('complexMapper positive case', () => {
    const results = [
        {
            fieldName: 'title',
            type: 'str'
        },
        {
            fieldName: 'amount',
            type: 'number'
        },
        {
            fieldName: 'tags',
            type: 'array'
        },
        {
            fieldName: 'from',
            type: 'select'
        }
    ]

    expect(
        arrays.complexMapper(arrOfObjs, token => ({fieldName: token.field, type: token.type}))
    ).toEqual(results)
})