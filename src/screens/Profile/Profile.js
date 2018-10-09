import React from 'react'
import { screen } from 'components'
import { Container, Grid, Menu } from 'semantic-ui-react'
import PersonalData from './PersonalData'
import PaymentPlan from './PaymentPlan'

class Profile extends React.Component {
    state = {
        view: 'personal data' 
    }

    setView = (e, { name }) => this.setState({...this.state, view: name})
    render() {
        const { view } = this.state
        return (
            <Container>
                <screen.TitledHeader title='Profile Management' />

                <Grid>
                    <Grid.Column width={3}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='personal data' active={view === 'personal data'} onClick={this.setView} />
                        <Menu.Item name='payment plan' active={view === 'payment plan'} onClick={this.setView}/>
                    </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        {   
                            view === 'personal data' &&
                            <PersonalData />
                        }
                        {
                            view === 'payment plan' &&
                            <PaymentPlan />

                        }
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default Profile
