import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class EntriesTable extends React.Component {

    static propTypes = {
        entries: PropTypes.array.isRequired
    }

    entryTypeFormatter = type => {
        if (type === 'income') {
            return (
                <Icon name='sign-in' color='blue' />    
            )
        } 
        if (type === 'outcome') {
            return (
                <Icon name='sign-out' color='red' />    
            )
        }
        return (
            <Icon name='sync alternate' color='green' />    
        )
    }

    entryFromFormatter = entry => {
        if (entry.type !== 'outcome') { return (<div/>)}
        return (
            <Icon 
                name='money bill alternate outline' 
                color={entry.from === 'storages' ? 'red' : 'green'}
            />
        )
    }

    render() {
        return (
        <div>

            <Table compact celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell collapsing>#</Table.HeaderCell>
                        <Table.HeaderCell collapsing>Type</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        
                        <Table.HeaderCell collapsing>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Tags</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>From</Table.HeaderCell>
                        
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        this.props.entries.map((entry, idx) => (
                            <Table.Row key={idx}>
                                <Table.Cell>{idx + 1}</Table.Cell>
                                <Table.Cell>
                                    { this.entryTypeFormatter(entry.type)}
                                </Table.Cell>
                                <Table.Cell>{ entry.title }</Table.Cell>
                                <Table.Cell>{ entry.amount }</Table.Cell>
                                <Table.Cell>{ entry.tag }</Table.Cell>
                                <Table.Cell collapsing>{ entry.date }</Table.Cell>
                                <Table.Cell collapsing active={entry.type !== 'outcome'}>
                                    { this.entryFromFormatter(entry) }
                                </Table.Cell>

                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
  </div>
        )
    }
}

export default EntriesTable
