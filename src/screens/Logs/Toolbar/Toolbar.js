import React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'
import EntryWizard from './EntryWizard'
import DateSelector from './DateSelector'
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
            
            <DateSelector />

            
            </div>
        )
    }
}

export default Toolbar
