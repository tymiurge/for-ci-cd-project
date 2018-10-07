import React from 'react'
import { Form, Card, Button, Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { warnings, validation } from 'utils'

class SavingBucketWizard extends React.Component {

    static propTypes = {
        onSubmit: PropTypes.func,
        onCancel: PropTypes.func
    }

    static defaultProps = {
        onSubmit: () => warnings.notToUse('SavingBucketWizard', 'onConfirm'),
        onCancel: () => warnings.notToUse('SavingBucketWizard', 'onCancel')
    }

    state = {
        name: '',
        meta: '',
        amount: '',
        valid: true
    }

    onFieldChange = (value, fieldName) => {
        this.setState({...this.state, [fieldName]: value})
    }

    onSubmit = () => {
        let valid = this.state.name !== ''
            && this.state.meta !== ''
            && validation.strIsNumber(this.state.amount)
        if (valid) {
            this.props.onSubmit(this.state)
        } else {
            this.setState({...this.state, valid: false})
        }
    }

    render() {
        return (
            <Card>
                <Card.Content style={{height: '10em'}}>
                    <Form size='mini' >
                        <Form.Field inline>
                            <Input
                                className={!this.state.valid && this.state.name === '' ? 'error-state' : ''}
                                placeholder='Storage name'
                                fluid
                                value={this.state.name}
                                onChange={ e => this.onFieldChange(e.target.value, 'name') }
                            />
                        </Form.Field>
                        <Form.Field inline>
                            <Input 
                                className={!this.state.valid && this.state.meta === '' ? 'error-state' : ''}
                                placeholder='Storage meta' 
                                fluid
                                value={this.state.meta}
                                onChange={ e => this.onFieldChange(e.target.value, 'meta') }
                            />
                        </Form.Field>
                        <Form.Field inline>
                            <Input 
                                className={!this.state.valid && !validation.strIsNumber(this.state.amount) ? 'error-state' : ''}
                                placeholder='Storage amount' 
                                fluid
                                value={this.state.amount}
                                onChange={ e => this.onFieldChange(e.target.value, 'amount') }
                            />
                        </Form.Field>
                    </Form>    
                </Card.Content>
                <Card.Content extra>
                    <Button 
                        circular
                        icon='check' 
                        color='blue'
                        onClick={ () => this.onSubmit()}
                    />
                    <Button 
                        circular
                        icon='close' 
                        color='red'
                        onClick={ () => this.props.onCancel()}
                    />
                </Card.Content>
            </Card>
        )
    }
}

export default SavingBucketWizard
