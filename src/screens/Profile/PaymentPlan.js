import React from 'react'
import { Button, Header, Label } from 'semantic-ui-react'
import { layouting } from 'components'

const messageHeight = '200px'

const Free = () => (
    <div>
        <div style={{height: messageHeight}}>
            <Header as='h3'>Free Plan</Header>
            <p>
                Using free plan you have access to all features during 1 mounth. 
            </p>
            <p>
                You have <span style={{color: 'red'}}>30</span> days untill your your free subscription expires. 
            </p>
        </div>
    </div>
)

const Monthly = () => (
    <div>
        <div style={{height: messageHeight}}>
            <Header as='h3'>Monthly Plan</Header>
            <p>
                Super price! 10 hrn per month! 
            </p>
            <p>
                We'll be chargin that amount at 7-th day of every month.
            </p>
        </div>
    <p>
        <Button content='Use this plan' color='orange' />
    </p>
    </div>
)

const Yearly = () => (
    <div>
        <div style={{height: messageHeight}}>
            <Header as='h3'>Yearly Plan</Header>
            <p>
                Super price! 100 hrn per year! You save 20 hrn every year! 
            </p>
            <p>
                We'll be chargin that amount at 7-th octover of every year.
            </p>
        </div>
    <p>
        <Button content='Use this plan' color='orange' />
    </p>
    </div>
)

class PaymentPlan extends React.Component {

    render() {
        return (
            <div>
                <Label color='orange' size='big' style={{width: '100%'}}>
                    Your current plan: free
                </Label>
                <layouting.RowsStack celled={true}>
                    <Free />
                    <Monthly />
                    <Yearly />
                </layouting.RowsStack>
                <Button size='small' content='Cancel Subscription' />
            </div>
            
        )
    }
}

export default PaymentPlan
