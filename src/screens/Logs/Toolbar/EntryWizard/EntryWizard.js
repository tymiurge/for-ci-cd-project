import React from 'react'
import { Form, Input, Select, Segment, Button } from 'semantic-ui-react'
import IncomeEntry from './IncomeEntry'
import OutcomeEntry from './OutcomeEntry';
import TransferEntry from './TransferEntry'
import { forms } from 'components'

const options = [
    { key: '1', text: 'Income', value: 'income' },
    { key: '2', text: 'Outcome', value: 'outcome' },
    { key: '3', text: 'Transfer', value: 'transfer' },
  ]
class EntryWizard extends React.Component {

    state = {
        selected: '',
        subForm: {}
    }

    onSubFormFieldChange = (value, field) => {
        const obj = {...this.state.subForm, [field]: value}
        this.setState({...this.state, subForm: obj})
    }

    render() {
        return (
            <Segment>
            {
                false &&
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
            }
            
            <forms.FormBuilder 
                items={[
                    [{field: 'title', type: 'str', placeholder:'Title', label: 'Title'}],
                    [
                        {field: 'amount', type: 'number', placeholder:'Amount', label: 'Amount'}, 
                        {field: 'tags', type: 'str', placeholder:'Tag', label: 'Tag'}
                    ],
                    [{field: 'from', type: 'select', placeholder:'From', label: 'From'}]
                ]}
                onSubmit={fields => {
                    alert(fields)
                }}
                onCancel={() => {}}
            />

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
