import React from 'react'
import { Segment, Message, Progress } from 'semantic-ui-react'
import { layouting } from 'components'

const MonthStats = ({incomes, outcomes, savings}) => {
    const max = Math.max.apply(null, [incomes, outcomes, savings])
    return (
        <div>
        <Message
            attached
            size='mini'
            header='Oct 2018 statistics'
      />
        <Segment attached style={{marginBottom: '1em'}}>
            <layouting.RowsStack>
            <Progress percent={incomes / max * 100} size='tiny' color='blue'>Incomes: {incomes}</Progress>
            <Progress percent={outcomes / max * 100} size='tiny' color='red'>Outcomes: {outcomes}</Progress>
            <Progress percent={savings / max * 100} size='tiny' color='green'>Savings: {savings}</Progress>
            </layouting.RowsStack>
        </Segment>
        </div>
    )
}

export default MonthStats
