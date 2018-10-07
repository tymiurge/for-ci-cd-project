import React from 'react'
import { Menu, Icon, Card, Button, Statistic, Container } from 'semantic-ui-react'
import SavingBucket from './SavingBucket'
import SavingBucketWizard from './SavingBucketWizard'

class Summary extends React.Component {

    render() {
        return (
            <div>

            <Menu stackable inverted color='blue'>
                <Menu.Item active='true' >
                    <Icon name='money bill alternate outline' />
                </Menu.Item>

                <Menu.Item
                    active={false}
                    onClick={() => alert('go to logs')}
                >
                    Logs
                </Menu.Item>

                <Menu.Item
                    active={false}
                    onClick={() => alert('go to stats')}
                >
                    Statistics
                </Menu.Item>
            </Menu>

            

            <Container>
            

            <Card.Group>
                <SavingBucketWizard
                    onSubmit={({name, meta, amount}) => alert(`name=${name}, meta=${meta}, amount=${amount}`)}
                />    

                <SavingBucket
                    header={'Bank Account'}
                    meta={'PrivateBank'}
                    value={5000}
                />
      
      
            </Card.Group>

            

            
            <Button circular icon='plus' color='blue' />
            </Container>
            </div>
        )
    }
}

export default Summary
