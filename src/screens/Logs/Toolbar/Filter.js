import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Input, Button, Message } from 'semantic-ui-react'

class Filter extends React.Component {

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired
    }

    state = {
        messageVisible: false,
        value: ''
    }

    toggleMessageVisibility = () => {
        this.setState({...this.state, messageVisible: !this.state.messageVisible})
    }

    render() {
        return (
            <Segment>
                <Input
                    fluid 
                    action={(
                        <Button.Group>
                            <Button
                                icon='close'
                                color='red'
                                onClick={() => this.props.onClose()}
                            />
                            <Button
                                icon='question' 
                                color='blue' 
                                onClick={() => this.toggleMessageVisibility()}
                            />
                        </Button.Group>
                    )} 
                    placeholder='Search...'
                    value={this.state.value}
                    onChange={e => {
                        const newValue = e.target.value
                        this.setState(
                            {...this.state, value: newValue},
                            () => this.props.onChange(newValue)
                        )
                    }}
                />
                {
                    this.state.messageVisible &&
                    <Message>
                        <p>
                        basicaly the sintacsis of filtering/searching is: <br/>
                        {'<field> <operator> <criteria>'}
                        </p>

                        <p>
                            For fields Type, Name, Tag and From two operations are supported: ':' and '='<br/>
                            In first case entries will be filtered by 'has the criteria' rule, in case of using '=' the 
                            entries will be filtered by 'equals to the criteria'.
                        </p>

                        <p>
                            For fields Amount and Date the following operations are supported: {"'=', '>', '<', '>=', '<='"}
                        </p>

                        <Button 
                            content='Got it'
                            onClick={() => this.toggleMessageVisibility()}
                        />
                    </Message>
                }

            </Segment>
        )
    }
}   

export default Filter
