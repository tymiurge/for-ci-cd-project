import React from 'react'
import { Button } from 'semantic-ui-react'
import EntryWizard from './EntryWizard'
import Filter from './Filter'

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
