import React from 'react'
import { Progress } from 'semantic-ui-react'
import { layouting } from 'components'

const MonthStats = ({incomes, outcomes, savings}) => {
    const max = Math.max.apply(null, [incomes, outcomes, savings])
    return (
        
        <div style={{marginTop: '2em', marginBottom: '1.5em'}}>
        <layouting.RowsStack>
        <Progress percent={incomes / max * 100} size='tiny' color='blue'>Incomes: {incomes}</Progress>
        <Progress percent={outcomes / max * 100} size='tiny' color='red'>Outcomes: {outcomes}</Progress>
        <Progress percent={savings / max * 100} size='tiny' color='green'>Savings: {savings}</Progress>
        </layouting.RowsStack>
        </div>
        
    )
}

export default MonthStats
