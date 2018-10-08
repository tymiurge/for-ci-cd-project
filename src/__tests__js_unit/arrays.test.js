import { arrays } from 'utils'

it('fieldsAggregator positive case', () => {
    const arrOfObjs = [
        [{field: 'title', type: 'str', placeholder:'Title', label: 'title'}],
        [
            {field: 'amount', type: 'number', placeholder:'Amount', label: 'Amount'}, 
            {field: 'tags', type: 'array', placeholder:'Tags', label: 'Tags'}
        ],
        [{field: 'from', value: 'select', placeholder:'From', label: 'From'}]
    ]
    const results = ['title', 'amount', 'tags', 'from']
    expect(arrays.fieldsAggregator(arrOfObjs,'field')).toEqual(results)
})