import React from 'react'
import { Select, Segment, Button } from 'semantic-ui-react'
import { forms } from 'components'
import PropTypes from 'prop-types'


const options = [
    { key: '1', text: 'Income', value: 'income' },
    { key: '2', text: 'Outcome', value: 'outcome' },
    { key: '3', text: 'Transfer', value: 'transfer' },
]

const wizards = {
    income: [
        [ {field: 'title', type: 'str', placeholder:'Title', label: 'Title'} ],
        [
            {field: 'amount', type: 'number', placeholder:'Amount', label: 'Amount'}, 
            {field: 'tags', type: 'str', placeholder:'Tag', label: 'Tag'}
        ]
    ], 
    outcome: [
        [ {field: 'title', type: 'str', placeholder:'Title', label: 'Title'} ],
        [
            {field: 'amount', type: 'number', placeholder:'Amount', label: 'Amount'}, 
            {field: 'tags', type: 'str', placeholder:'Tag', label: 'Tag'},
            {
                field: 'from', type: 'select', placeholder:'From', label: 'From',
                options: [
                    { key: '1', text: 'Income', value: 'income' },
                    { key: '2', text: 'Bank Account', value: 'bank_account' },
                    { key: '3', text: 'Home Storage', value: 'home_storage' },
                ]
            }
        ]
    ], 
    transfer: [
        [ {field: 'title', type: 'str', placeholder:'Title', label: 'Title'} ],
        [
            {
                field: 'from', type: 'select', placeholder:'From', label: 'From',
                options: [
                    { key: '1', text: 'Income', value: 'income' },
                    { key: '2', text: 'Bank Account', value: 'bank_account' },
                    { key: '3', text: 'Home Storage', value: 'home_storage' },
                ]
            },
            {field: 'amount', type: 'number', placeholder:'Amount', label: 'Amount'}, 
            {
                field: 'to', type: 'select', placeholder:'to', label: 'to',
                options: [
                    { key: '1', text: 'Income', value: 'income' },
                    { key: '2', text: 'Bank Account', value: 'bank_account' },
                    { key: '3', text: 'Home Storage', value: 'home_storage' },
                ]
            }
        ]
    ],
}

class EntryWizard extends React.Component {

    static propTypes = {
        onCancel: PropTypes.func.isRequired
    }

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
                <Select 
                    placeholder='Select Entry Type' 
                    options={options} 
                    onChange={(e, data) => 
                        { this.setState({...this.state, selected: data.value})}
                    }
                />
                {
                    this.state.selected === '' &&
                    <Button 
                        circular
                        icon='close' 
                        color='red'
                        style={{marginLeft: '0.5em'}}
                        onClick={ () => this.props.onCancel()}
                    />
                }
                {
                    this.state.selected !== '' &&
                    <Segment>
                        <forms.FormBuilder 
                            items={wizards[this.state.selected]}
                            onSubmit={fields => {
                                alert(fields)
                            }}
                            onCancel={() => this.props.onCancel()}
                        />
                    </Segment>
                }    
            </Segment>
        )
    }
}

export default EntryWizard
