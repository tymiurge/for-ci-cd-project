import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Button, Segment } from 'semantic-ui-react'

const monthOptions = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(item =>(
    {key: item, value: item, text: item}
))

const yearOptions = ['2016', '2017', '2018'].map(item =>(
    {key: item, value: item, text: item}
))

class DateSelector extends React.Component {

    static propTypes = {
        onCancel: PropTypes.func.isRequired
    }

    render() {
        return (
            <Segment>
                <Dropdown placeholder='Month' search selection options={monthOptions} />
                <Dropdown placeholder='Year' search selection options={yearOptions} style={{marginLeft: '.2em'}}/>
                <Button circular icon='check' color='blue' style={{marginLeft: '0.5em'}}/>
                <Button circular icon='cancel' color='red' onClick={() => this.props.onCancel()}/>
            </Segment>
        )
    }
}

export default DateSelector
