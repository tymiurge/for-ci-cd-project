import React from 'react'
import { Grid, Header, Form, Segment, Button, Input, Message } from 'semantic-ui-react'
import { controls } from 'components'
import { validation } from 'utils'

const items = [
  [
    {placeholder: 'First Name', icon: 'user', type: 'text', fieldBinding: 'firstName', validators: [validation.strIsNotEmpty]},
    {placeholder: 'Last Name', icon: 'user', type: 'text', fieldBinding: 'lastName', validators: [validation.strIsNotEmpty]}
  ],
  [
    {placeholder: 'Mail', icon: 'mail', type: 'email', fieldBinding: 'mail', validators: [validation.strIsNotEmpty]}
  ],
  [
    {placeholder: 'Password', icon: 'lock', type: 'password', fieldBinding: 'pswd', validators: [validation.strIsNotEmpty]},
    {placeholder: 'Repeat Password', icon: 'lock', type: 'password', fieldBinding: 'pswdDupl', validators: [validation.strIsNotEmpty]}
  ]
]

class Register extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    mail: '',
    pswd: '',
    pswdDupl: '',
    pswdMatch: true
  }

  onFieldChange = (value, fieldName) => {
    this.setState({...this.state, [fieldName]: value})
  }

  onSubmit = () => {
    const { pswd, pswdDupl } = this.state
    if (pswd !== pswdDupl) {
      this.setState({...this.state, pswdMatch: false})
    }
  }

  render() {
    
    return (
      <div className='login-form'>
        {/*
          The styles below are necessary for the correct render of this page.
          The main idea is that all the elements up to the `Grid` below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 650 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Register
            </Header>
            <Form size='large'>
              <Segment>
                {
                  items.map((row, rowIdx) => (
                    <Form.Group widths='equal' key={rowIdx}>
                    {
                      row.map((item, itemIdx) => (
                        <Form.Field>
                          <controls.ValidatedInput
                            {...item}
                            onChange={(value, field) => this.onFieldChange(value, field)}  
                          />
                        </Form.Field>
                      ))
                    }
                    </Form.Group>
                  ))
                }
                {
                  !this.state.pswdMatch &&
                  <Message negative>
                    <Message.Header>Passwords do not match</Message.Header>
                    <p>Please re-enter passswords so that they be equaled to each other.</p>
                  </Message>
                }
                <Button
                  color='blue'
                  fluid 
                  size='large'
                  content='Register'
                  onClick={this.onSubmit}
                />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Register
