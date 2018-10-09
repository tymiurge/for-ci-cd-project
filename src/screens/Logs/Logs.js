import React from 'react'
import { screen } from 'components'
import { Container } from 'semantic-ui-react'
import EntriesTable from './EntriesTable'

const entries = [
    {
        type: 'income',
        title: 'salary',
        amount: 3000,
        tag: 'salary',
        date: '2 oct 2018'
    },
    {
        type: 'income',
        title: 'deposit return',
        amount: 500,
        tag: 'deposit',
        date: '3 oct 2018'
    },
    {
        type: 'transfer',
        title: 'Transfer from Home storage to Bank account',
        amount: 1500,
        tag: 'transfer',
        date: '4 oct 2018'
    },
    {
        type: 'outcome',
        title: 'buy food for one week',
        amount: 1500,
        tag: 'food',
        date: '5 oct 2018',
        from: 'incomes'
    }, 
    {
        type: 'outcome',
        title: 'charge car - 10 lt',
        amount: 370,
        tag: 'car',
        from: 'storages',
        date: '6 oct 2018'
    },
    {
        type: 'outcome',
        title: 'car TO',
        amount: 1000,
        tag: 'car',
        from: 'storages',
        date: '7 oct 2018'
    }
]

class Logs extends React.Component {

    render() {
        return (
            <Container>
                <screen.Header />
                <EntriesTable 
                    entries={entries}
                />

            </Container>
        )
    }
}

export default Logs
