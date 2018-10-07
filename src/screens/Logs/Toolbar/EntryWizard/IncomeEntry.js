import React from 'react'
import { Form, Input } from 'semantic-ui-react'

class IncomeEntry extends React.Component {
    render() {
        return (
            <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Amount' placeholder='Last name' />
              <Form.Field control={Input} label='Tags' placeholder='Last name' />
              
            </Form.Group>
            </Form>
        )
    }
}

export default IncomeEntry