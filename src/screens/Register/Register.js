import React from 'react'
import { Grid, Header, Form, Segment, Button, Message } from 'semantic-ui-react'

class Register extends React.Component {

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
                    <Form.Input 
                        fluid 
                        icon='user' 
                        iconPosition='left' 
                        placeholder='First Name'
                        //value={this.state.login}
                        //onChange={ e => this.setState({...this.state, login: e.target.value})}
                        />
                    <Form.Input 
                        fluid 
                        icon='user' 
                        iconPosition='left' 
                        placeholder='Last Name'
                        //value={this.state.login}
                        //onChange={ e => this.setState({...this.state, login: e.target.value})}
                        />
                </Form.Group>
                <Form.Input 
                  fluid 
                  icon='mail' 
                  iconPosition='left' 
                  placeholder='E-mail address'
                  //value={this.state.login}
                  //onChange={ e => this.setState({...this.state, login: e.target.value})}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  //value={this.state.password}
                  //onChange={ e => this.setState({...this.state, password: e.target.value})}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password one more time'
                  type='password'
                  //value={this.state.password}
                  //onChange={ e => this.setState({...this.state, password: e.target.value})}
                />

                <Button
                  color='blue'
                  fluid 
                  size='large'
                  content='Register'
                  onClick={() => this.props.onSubmit(this.state.login, this.state.password)}
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
