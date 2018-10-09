import React from 'react'
import { Button, Dropdown, Label } from 'semantic-ui-react'
import EntryWizard from './EntryWizard'
import DateSelector from './DateSelector'
import Filter from './Filter'

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
                <Label color='orange' size='big'>
                    October 2018
                </Label>
                <Button circular icon='calendar' color='orange' />
                <Button circular icon='plus' color='blue' />
                <Button circular icon='filter' color='blue' />
            </div>
            }
            <EntryWizard />
            
            <DateSelector />

            <Filter
                onChange={value => value}
                onClose={() => alert('closing filter')}
            />
            
            </div>
        )
    }
}

export default Toolbar
