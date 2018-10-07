import React from 'react'
import { screen } from 'components'
import { Container } from 'semantic-ui-react'
import EntriesTable from './EntriesTable'

class Logs extends React.Component {

    render() {
        return (
            <Container>
                <screen.Header />
                <EntriesTable />

            </Container>
        )
    }
}

export default Logs
