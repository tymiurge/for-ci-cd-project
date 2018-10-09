import React from 'react'
import { Button, Dropdown, Label } from 'semantic-ui-react'
import EntryWizard from './EntryWizard'
import DateSelector from './DateSelector'
import Filter from './Filter'

//import PropTypes from 'prop-types'

class Toolbar extends React.Component {

    state = {
        mode: 'buttons'
    }

    setMode = mode => {
        this.setState({...this.state, mode})
    }

    render() {
        return (
            <div>
            {
                this.state.mode === 'buttons' &&
                <div>
                    <Label color='orange' size='big'>
                        October 2018
                    </Label>
                    <Button circular icon='calendar' color='orange' 
                        onClick={() => this.setMode('selector')}
                    />
                    <Button circular icon='plus' color='blue'
                        onClick={() => this.setMode('wizard')}
                    />
                    <Button circular icon='filter' color='blue' 
                        onClick={() => this.setMode('filter')}
                    />
                </div>
            }
            {
                this.state.mode === 'wizard' &&
                <EntryWizard
                    onCancel={() => this.setMode('buttons')}
                />
            }
            {
                this.state.mode === 'selector' &&
                <DateSelector 
                    onCancel={() => this.setMode('buttons')}
                />
            }
            {
                this.state.mode === 'filter' &&
                <Filter
                    onChange={value => value}
                    onClose={() => this.setMode('buttons')}
                />
            }
            </div>
        )
    }
}

export default Toolbar
