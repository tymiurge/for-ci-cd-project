import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select, Button } from 'semantic-ui-react'
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
        select: Select
    }

    constructor(props) {
        super(props)
        const fs = arrays.fieldAggregator(this.props.items, 'field')
        const fields = 
            fs.reduce(
                (aggregator, current) => {
                    return{...aggregator, [current]: ''}
                },
                {}
            )
        this.state = {
            fields
        }
    }

    onFieldChange = (value, fieldName) => {
        const stamp = {...this.state.fields, [fieldName]:value}
        this.setState({...this.state, fields: stamp})
    }

    onSubmit = () => {
        
    }

    render() {
        return (
            <div>
            <Form size='tiny'>
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
                                            value={this.state.fields[item.field]}
                                            onChange={(e, data) => {
                                                const value = item.type === 'select' ? data.value : e.target.value
                                                this.onFieldChange(value, item.field)
                                            }}
                                        />
                                    )
                                })
                            }
                        </Form.Group>
                    ))
                }
            </Form>
                <div>
                <Button 
                    circular
                    icon='check' 
                    color='blue'
                    onClick={ () => this.props.onSubmit(this.state.fields)}
                />

                <Button 
                    circular
                    icon='close' 
                    color='red'
                    //onClick={ () => this.props.onCancel()}
                />
                </div>
            </div>

        )
    }
}

export default FormBuilder
