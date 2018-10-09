import React from 'react'
import { screen } from 'components'
import { Container } from 'semantic-ui-react'

class Profile extends React.Component {

    render() {
        return (
            <Container>
                <screen.TitledHeader title='Profile Management' />
            </Container>
        )
    }
}

export default Profile
