import React from 'react'
import { Segment, Message, Progress } from 'semantic-ui-react'

const MonthStats = ({incomes, outcomes, savings}) => {
    const max = Math.max.apply(null, [incomes, outcomes, savings])
    return (
        <div>
        <Message
            attached
            color='blue'
            header='Oct 2018 statistics'
            
      />
        <Segment attached>
            <Progress percent={incomes / max * 100} size='small' color='blue'>Incomes: {incomes}</Progress>
            <Progress percent={outcomes / max * 100} size='small' color='red'>Outcomes: {outcomes}</Progress>
            <Progress percent={savings / max * 100} size='small' color='green'>Savings: {savings}</Progress>
        </Segment>
        </div>
    )
}

export default MonthStats
