import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const NoSavingsCard = () => (
    <Card style={{width: '15em'}}>
        <Card.Content style={{height: '10em'}}>
            <Card.Header>No savings added</Card.Header>
            <Card.Description>
                Press <Icon name='plus' color='blue' circular /> below to start tracking your savings.
            </Card.Description>
        </Card.Content>
    </Card>
)

export default NoSavingsCard