import React from 'react'
import { Form, Card, Button, Input, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { warnings } from 'utils'

class SavingBucketWizard extends React.Component {

    static propTypes = {
        onConfirm: PropTypes.func,
        onCancel: PropTypes.func
    }

    static defaultProps = {
        onConfirm: warnings.notToUse('SavingBucketWizard', 'onConfirm'),
        onCancel: warnings.notToUse('SavingBucketWizard', 'onCancel')
    }

    state = {
        name: '',
        meta: '',
        amount: '',
    }

    onFieldChange = (value, fieldName) => {
        this.setState({...this.state, [fieldName]: value})
    }

    render() {
        return (
            <Card>
                <Card.Content style={{height: '10em'}}>
                    <Form size='mini' >
                        <Form.Field inline>
                            <Input
                                placeholder='Storage name'
                                style={{width: '100%'}}
                                value={this.state.name}
                                onChange={ e => this.onFieldChange(e.target.value, 'name') }
                            />
                        </Form.Field>
                        <Form.Field inline>
                            <Input 
                                placeholder='Storage meta' 
                                style={{width: '100%'}}
                                value={this.state.meta}
                                onChange={ e => this.onFieldChange(e.target.value, 'meta') }
                            />
                        </Form.Field>
                        <Form.Field inline>
                            <Input 
                                placeholder='Storage amount' 
                                style={{width: '100%'}}
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
                        onClick={ () => this.props.onSubmit(this.state)}
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
