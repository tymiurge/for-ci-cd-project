import React from 'react'
import { Grid, Header, Form, Segment, Button, Input, Message } from 'semantic-ui-react'
import { controls } from 'components'
import { validation } from 'utils'

class Register extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    mail: '',
    pswd: '',
    pswdDuplication: '',
    pswdMatch: true
  }

  onFieldChange = (value, fieldName) => {
    this.setState({...this.state, [fieldName]: value})
  }

  onSubmit = () => {
    const { pswd, pswdDuplication } = this.state
    if (pswd !== pswdDuplication) {
      this.setState({...this.state, pswdMatch: false})
    }
  }

  render() {
    
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
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
              <Form.Group widths='equal'>
                <Form.Field>
                  <controls.ValidatedInput
                    placeholder='First Name'
                    icon='user'
                    fieldBinding='firstName'
                    onChange={(value, field) => this.onFieldChange(value, field)}
                    validators={[validation.strIsNotEmpty]}
                  />
                </Form.Field>
                <Form.Field>
                  <controls.ValidatedInput
                    placeholder='Last Name'
                    icon='user'
                    fieldBinding='lastName'
                    onChange={(value, field) => this.onFieldChange(value, field)}
                    validators={[validation.strIsNotEmpty]}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <controls.ValidatedInput
                  placeholder='Mail'
                  icon='mail'
                  type='email'
                  fieldBinding='mail'
                  onChange={(value, field) => this.onFieldChange(value, field)}
                  validators={[validation.strIsNotEmpty]}
                />
              </Form.Field>
              <Form.Group widths='equal'>
                <Form.Field>
                  <controls.ValidatedInput
                    placeholder='Password'
                    icon='lock'
                    type='password'
                    fieldBinding='pswd'
                    onChange={(value, field) => this.onFieldChange(value, field)}
                    validators={[validation.strIsNotEmpty]}
                  />
                </Form.Field>
                <Form.Field>
                  <controls.ValidatedInput
                    placeholder='Repeat password'
                    icon='lock'
                    type='password'
                    fieldBinding='pswdDuplication'
                    onChange={(value, field) => this.onFieldChange(value, field)}
                    validators={[validation.strIsNotEmpty]}
                  />
                </Form.Field>
              </Form.Group>  
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
  )}

}

export default Register
