import React from 'react'
import { Form, Input, Select, Segment, Button } from 'semantic-ui-react'
import IncomeEntry from './IncomeEntry'
import OutcomeEntry from './OutcomeEntry';
import TransferEntry from './TransferEntry'

const options = [
    { key: '1', text: 'Income', value: 'income' },
    { key: '2', text: 'Outcome', value: 'outcome' },
    { key: '3', text: 'Transfer', value: 'transfer' },
  ]
class EntryWizard extends React.Component {

    state = {
        selected: ''
    }

    render() {
        return (
            <Segment>

            <Form>
            <Form.Group widths='equal'>
                <Form.Field control={Input} label='Entry title' placeholder='Title' />
                <Form.Field 
                    control={Select} 
                    label='Type' 
                    options={options} 
                    placeholder='Entry Type' 
                    onChange={(e, data) => 
                        { this.setState({...this.state, selected: data.value})}
                    }
                />
            </Form.Group>
            </Form>

            {
                this.state.selected === 'income' &&
                <IncomeEntry />
            }
            {
                this.state.selected === 'outcome' &&
                <OutcomeEntry />
            }
            {
                this.state.selected === 'transfer' &&
                <TransferEntry />
            }
                
                <div>
                    {
                        this.state.selected !== '' &&
                        <Button 
                            circular
                            icon='check' 
                            color='blue'
                            //onClick={ () => this.onSubmit()}
                        />

                    }
                <Button 
                    circular
                    icon='close' 
                    color='red'
                    //onClick={ () => this.props.onCancel()}
                />
                </div>
            


            </Segment>
        )
    }
}

export default EntryWizard
