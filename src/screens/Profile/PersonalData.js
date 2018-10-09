import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { layouting } from 'components'
import PropTypes from 'prop-types'

const Static = props => (
    <div>
    <layouting.RowsStack celled={true}>
        <div><b>First Name: </b>{props.firstName}</div>
        <div><b>Last Name: </b>{props.lastName}</div>
    </layouting.RowsStack>
    <layouting.RowsStack celled={true}>
        <div><b>Mail: </b>{props.mail}</div>
        <div><b>Phone: </b>{props.phone}</div>
    </layouting.RowsStack>
    </div>
)

class Edit extends React.Component {

    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        mail: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        onCancel: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='First name' placeholder='First name' value={this.props.firstName}/>
                        <Form.Input fluid label='Last name' placeholder='Last name' value={this.props.lastName}/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Mail' placeholder='Mail' value={this.props.mail} />
                        <Form.Input fluid label='Phone' placeholder='Phone' value={this.props.phone} />
                    </Form.Group>
                </Form>
                <Button 
                    circular
                    icon='check' 
                    color='blue'
                    //onClick={ () => this.onSubmit()}
                />
                <Button 
                    circular
                    icon='cancel' 
                    color='red'
                    
                    onClick={ () => this.props.onCancel() }
                />
            </div>
        ) 
            
    }
}

class PersonalData extends React.Component {

    state = {
        mode: 'static'
    }

    setMode = mode => {
        this.setState({...this.state, mode})
    }

    render() {
        return (
            <div>
                {
                    this.state.mode === 'static' &&
                    <div>
                        <Button 
                            circular
                            icon='edit' 
                            color='blue'
                            onClick={ () => this.setMode('edit')}
                        />
                        <Static 
                            firstName='Shrek'
                            lastName='Ogre'
                            mail='tymur.labas@gmail.com'
                            phone='0665650596'
                        />
                    </div>
                }
                {
                    this.state.mode === 'edit' &&
                    <Edit 
                        firstName='Shrek'
                        lastName='Ogre'
                        mail='tymur.labas@gmail.com'
                        phone='0665650596'
                        onCancel={ () => this.setMode('static')}
                    />
                }
            </div>
        )
    }
}

export default PersonalData
