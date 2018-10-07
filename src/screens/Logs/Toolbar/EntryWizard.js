import React from 'react'
import { Form, Input, Select, Segment } from 'semantic-ui-react'
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
class EntryWizard extends React.Component {

    render() {
        return (
            <Segment>
            <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Entry title' placeholder='Last name' />
              <Form.Field control={Select} label='Type' options={options} placeholder='Gender' />
            </Form.Group>
            </Form>
            </Segment>
        )
    }
}

export default EntryWizard
