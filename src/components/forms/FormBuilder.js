import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select, Button } from 'semantic-ui-react'
import { arrays, validation } from 'utils'

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
        select: Select,
        date: Input
    }

    typeTransformers = {
        str: value => value,
        select: value => value,
        number: value => parseInt(value),
        date: value => value,
    }

    validators = {
        str: value => value !== '',
        number: value => validation.strIsNumber(value),
        select: value => value !== '',
        date: value => validation.strIsInDateFormat(value, 'mm-dd-yyy')
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
            fields,
            valid: true
        }
    }

    onFieldChange = (value, fieldName) => {
        const stamp = {...this.state.fields, [fieldName]:value}
        this.setState({...this.state, fields: stamp})
    }

    onSubmit = () => {
        const fieldAndType = arrays.complexMapper(
            this.props.items,
            token => ({field: token.field, type: token.type})
        )
        const valid = fieldAndType.reduce(
            (aggregator, current) => aggregator && this.isFieldValid(current.field, current.type),
            true
        )
        if (!valid) {
            this.setState({...this.state, valid: false})
        } else {
            this.props.onSubmit(
                fieldAndType.reduce(
                    (aggregator, current) => {
                        const value = this.state.fields[current.field]
                        const transformer = this.typeTransformers[current.type]
                        return {...aggregator, [current.field]: transformer(value)}
                    },
                    {}
                )
            )
        }
    }

    isFieldValid = (field, type) => {
        const value = this.state.fields[field]
        const validator = this.validators[type]
        console.log(`value = ${value}, validator = ${validator}`)
        const result = validator(value)
        return result
    }

    render() {
        return (
            <div>
            <Form size='tiny'>
                {
                    this.props.items.map((row, rowIdx) => (
                        <Form.Group widths='equal' key={rowIdx}>
                            {
                                row.map((item, itemIdx) => {
                                    return (
                                        <Form.Field
                                            key={`row_${rowIdx}_item_${itemIdx}`}
                                            className={
                                                !this.state.valid && !this.isFieldValid(item.field, item.type) 
                                                    ? 'error-state'
                                                    : ''
                                            }
                                            control={this.itemTypes[item.type]}
                                            label={item.label}
                                            placeholder={item.placeholder}
                                            value={this.state.fields[item.field]}
                                            options={item.options}
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
                    onClick={ () => this.onSubmit()}
                />

                <Button 
                    circular
                    icon='close' 
                    color='red'
                    onClick={ () => this.props.onCancel()}
                />
                </div>
            </div>

        )
    }
}

export default FormBuilder
