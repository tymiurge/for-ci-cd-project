import React from 'react'
import { Form, Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class IncomeEntry extends React.Component {

    static propTypes = {
        onFieldChange: PropTypes.func.isRequired
    }

    state = {
        amount: '',
        tags: ''
    }

    onFieldChange = (value, field) => this.setState(
        {...this.state, [field]: value},
        () => this.props.onFieldChange(value, field)
    )

    render() {
        return (
            <Form>
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

export default IncomeEntry
