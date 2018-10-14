import React from 'react'
import { Grid, Header, Form, Segment, Button, Message } from 'semantic-ui-react'
import { controls } from 'components'
import { validation } from 'utils'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

const items = [
  [
    {placeholder: 'First Name', icon: 'user', type: 'text', fieldBinding: 'firstName', validators: [validation.strIsNotEmpty]},
    {placeholder: 'Last Name', icon: 'user', type: 'text', fieldBinding: 'lastName', validators: [validation.strIsNotEmpty]}
  ],
  [
    {placeholder: 'Mail', icon: 'mail', type: 'email', fieldBinding: 'mail', validators: [validation.strIsNotEmpty, validation.strIsEmail]}
  ],
  [
    {placeholder: 'Password', icon: 'lock', type: 'password', fieldBinding: 'pswd', validators: [validation.strIsNotEmpty]},
    {placeholder: 'Repeat Password', icon: 'lock', type: 'text', fieldBinding: 'pswdDupl', validators: [validation.strIsNotEmpty]}
  ]
]

class Register extends React.Component {

  static propTypes = {
    confirmed: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired
  }

  state = {
    firstName: '',
    lastName: '',
    mail: '',
    pswd: '',
    pswdDupl: '',
    pswdMatch: true,
    valid: true
  }

  onFieldChange = (value, fieldName, valid = true) => {
    this.setState({...this.state, [fieldName]: value, valid: this.state.valid && valid})
  }

  onSubmit = () => {
    const { pswd, pswdDupl } = this.state
    const pswdMatch = pswd === pswdDupl
    if (!pswdMatch) {
      this.setState({...this.state, pswdMatch: false})
    } else {
      if (this.state.valid) {
        this.setState(
          {...this.state, pswdMatch: true},
          () => this.props.onSubmit(this.state)
        )
      }
    }
  }

  render() {
    if (this.props.confirmed) {
      return (
        <Redirect to='/summary' />
      )
    }
    
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
                        <Form.Field key={`row_${rowIdx}_item_${itemIdx}`}>
                          <controls.ValidatedInput
                            {...item}
                            onChange={(value, field, valid = true) => this.onFieldChange(value, field)}  
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
                {
                  this.props.errors.length > 0 &&
                  this.props.errors.map((error, idx) => (
                    <Message negative key={idx}>
                      { error }
                    </Message>
                  ))
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
