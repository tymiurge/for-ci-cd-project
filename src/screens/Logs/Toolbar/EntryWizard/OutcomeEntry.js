import React from 'react'
import { Form, Input } from 'semantic-ui-react'
class OutcomeEntry extends React.Component {

    render() {
        return (
            <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Amount' placeholder='Amount' />
              <Form.Field control={Input} label='Tags' placeholder='Tags' />
              <Form.Field control={Input} label='From' placeholder='From' />
              
            </Form.Group>
            </Form>
        )
    }
}

export default OutcomeEntry
