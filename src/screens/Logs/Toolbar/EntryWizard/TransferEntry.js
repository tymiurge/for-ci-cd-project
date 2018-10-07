import React from 'react'
import { Form, Input } from 'semantic-ui-react'

class TransferEntry extends React.Component {

    render() {
        return (
            <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='From' placeholder='Amount' />
              <Form.Field control={Input} label='Amount' placeholder='Tags' />
              <Form.Field control={Input} label='To' placeholder='From' />
            </Form.Group>
            </Form>
        )
    }
}

export default TransferEntry
