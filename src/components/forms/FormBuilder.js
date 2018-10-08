import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select } from 'semantic-ui-react'
import { arrays } from 'utils'

class FormBuilder extends React.Component {

    static propTypes = {
        /**
         * example of items: [
         *  [{field: 'title', type: 'str', placeholder:'Title', label: 'title'}],
         *  [
         *      {field: 'amount', type: 'number', placeholder:'Amount', label: 'Amount'}, 
         *      {field: 'tags', type: 'array', placeholder:'Tags', label: 'Tags'}
         *  ],
         *  [{field: 'from', value: 'select', options: [...]}, placeholder:'From', label: 'From']
         * ]
         */
        items: PropTypes.array.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    }

    

    itemTypes = {
        str: Input,
        number: Input,
        array: Input,
        select: Select
    }

    constructor(props) {
        super(props)
        const fields = arrays.fieldsAggregator(this.props.items, 'field').map(field )
        
    }



    render() {
        return (
            <Form>
                {
                    this.props.items.map((row, rowIdx) => (
                        <Form.Group widths='equal' key='rowIdx'>
                            {
                                row.map((item, itemIdx) => {
                                    return (
                                        <Form.Field
                                            control={this.itemTypes[item.type]}
                                            label={item.label}
                                            placeholder={item.placeholder}
                                        />
                                    )
                                })
                            }
                        </Form.Group>
                    ))
                }
            <Form.Group widths='equal'>
                <Form.Field 
                    control={Input} label='Amount' placeholder='Last name'
                    value={this.state.amount}
                    onChange={e => this.onFieldChange(e.target.value, 'amount')}
                />
              <Form.Field control={Input} label='Tags' placeholder='Last name' />
              
            </Form.Group>
            </Form>
        )
    }
}

export default FormBuilder
