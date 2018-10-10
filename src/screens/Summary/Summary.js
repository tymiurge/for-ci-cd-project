import React from 'react'
import { Card, Button, Container } from 'semantic-ui-react'
import SavingBucket from './SavingBucket'
import SavingBucketWizard from './SavingBucketWizard'
import NoSavingsCard from './NoSavingsCard'
import { screen, controls } from 'components'

const savings = [
    {
        name: 'Bank account',
        meta: 'Privat bank',
        amount: 5000
    },
    {
        name: 'Home savings',
        meta: 'home not touchable',
        amount: 1000
    },
    {
        name: 'Deposit',
        meta: 'monobank 1 year deposit',
        amount: 2000
    }
]

class Summary extends React.Component {

    state = {
        wizardDisplayed: false
    }

    renderSavings = () => {
        
        if (this.state.wizardDisplayed) {
            return [
                <SavingBucketWizard
                    onSubmit={({name, meta, amount}) => alert(`name=${name}, meta=${meta}, amount=${amount}`)}
                    onCancel={() => this.toggleState()}
                />,
                savings.map((item => (
                    <SavingBucket key={item.name} {...item} />
                )))
            ]
        } else if (savings.length > 0) {
            return savings.map((item => (
                <SavingBucket key={item.name} {...item} />
            )))
        }
        return (
            <NoSavingsCard />
        )
        
    }

    toggleState = () => this.setState({...this.state, wizardDisplayed: !this.state.wizardDisplayed})

    render() {
        return (
            <Container>
                
                <screen.Header active='buckets' />

                    <controls.BarsStats incomes={100} savings={200} outcomes={300} />
                    <Card.Group>
                        {
                            this.renderSavings()
                        }
                    </Card.Group>
                    {
                        !this.state.wizardDisplayed &&
                        <Button
                            circular
                            icon='plus'
                            color='blue'
                            style={{marginLeft: '1em', marginTop: '1em'}}
                            onClick={() => this.toggleState()}
                        />

                    }

                

            </Container>
        )
    }
}

export default Summary
