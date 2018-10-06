import React from 'react'
import { Menu, Icon, Card, Button, Statistic } from 'semantic-ui-react'
import SavingBucket from './SavingBucket'

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

            <Button circular icon='plus' color='blue' />

        
            
            <Card.Group>
                <SavingBucket
                    header={'Bank Account'}
                    meta={'PrivateBank'}
                    value={5000}
                />
                <Card>
      <Card.Content>
        <Card.Header>Bank account</Card.Header>
        <Card.Meta>PrivateBank</Card.Meta>
        <Card.Description>
        <Statistic>
    <Statistic.Value>5,550</Statistic.Value>
  </Statistic>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button circular icon='settings' />
        <Button circular icon='settings' />
      </Card.Content>
    </Card>
    </Card.Group>

            
            </div>
        )
    }
}

export default Summary
