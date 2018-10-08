import React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'
import EntryWizard from './EntryWizard'
//import PropTypes from 'prop-types'

const monthOptions = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(item =>(
    {key: item, value: item, text: item}
))

const yearOptions = ['2016', '2017', '2018'].map(item =>(
    {key: item, value: item, text: item}
))

class Toolbar extends React.Component {

    render() {
        return (
            <div>
            {
                true &&
            <div>
                <Button circular icon='calendar' color='orange' />
                <Button circular icon='plus' color='blue' />
                <Button circular icon='filter' color='blue' />
                <Button circular icon='settings' color='blue' />
            </div>
            }
            <EntryWizard />
            {
                false &&
                <div>
                <Dropdown placeholder='Month' search selection options={monthOptions} />
                <Dropdown placeholder='Year' search selection options={yearOptions} style={{marginLeft: '.2em'}}/>
                <Button circular icon='check' color='blue' style={{marginLeft: '0.5em'}}/>
                <Button circular icon='cancel' color='red' />
                </div>

            }
            </div>
        )
    }
}

export default Toolbar
