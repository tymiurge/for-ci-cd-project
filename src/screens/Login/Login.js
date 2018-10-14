import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { controls } from 'components'
import { validation } from 'utils'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

  state = {
    login: '',
    password: '',
    valid: true
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    confirmed: PropTypes.bool.isRequired,
    errors: PropTypes.array
  }

  static defaultProps = {
    errors: []
  }

  onFieldChange = (value, field, valid = true) => {
    this.setState(
      {...this.state, [field]: value, valid}
    )
  }

  onSubmit = () => {
    if (this.state.valid) {
      this.props.onSubmit(this.state)
    }
  }

  render() {
    if (this.props.confirmed) {
      return (<Redirect to='/summary' />)
    }
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Segment>
                <Form.Field>
                  <controls.ValidatedInput
                    placeholder={'Email address'}
                    icon='mail'
                    fieldBinding='login'
                    validators={[validation.strIsNotEmpty, validation.strIsEmail]}
                    onChange={(value, field, valid = true) => this.onFieldChange(value, field)} 
                  />
                </Form.Field>
                <Form.Field>
                  <controls.ValidatedInput
                    placeholder={'Password'}
                    type='password'
                    icon='lock'
                    fiedBinding='password'
                    validators={[validation.strIsNotEmpty]}
                    onChange={(value, field, valid = true) => this.onFieldChange(value, field)} 
                  />
                </Form.Field>
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
                  content='Login'
                  onClick={() => this.onSubmit()}
                />
              </Segment>
            </Form>
            <Message>
              New to us? <a href='/register'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Login
