import React from 'react'
import { Card, Button, Container, Message } from 'semantic-ui-react'
import SavingBucket from './SavingBucket'
import SavingBucketWizard from './SavingBucketWizard'
import NoSavingsCard from './NoSavingsCard'
import { screen, controls } from 'components'
import PropTypes from 'prop-types'

class Summary extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    onPageLoad: PropTypes.func.isRequired,
    onBucketSave: PropTypes.func.isRequired
  }

  state = {
      wizardDisplayed: false,
      cannotRemoveWarning: false
  }

  componentDidMount() {
    this.props.onPageLoad()
  }

  toggleState = () => this.setState({...this.state, wizardDisplayed: !this.state.wizardDisplayed})

  onBucketRemove = amount => {
    //const bucket = this.props.list.find(item => item.id === id)
    if (amount !== 0) {
      this.setState({...this.state, cannotRemoveWarning: true})
    }
  }

  render() {
    return (
      <Container>
        <screen.Header active='buckets' />
        <controls.BarsStats incomes={100} savings={200} outcomes={300} />
        <Card.Group>
          {
            this.state.wizardDisplayed &&
            <SavingBucketWizard
              onSubmit={
                data => {
                  this.setState(
                    {...this.state, wizardDisplayed: false},
                    this.props.onBucketSave(data)
                  )
                }
              }
              onCancel={() => this.toggleState()}
            />
          }
          {
            this.props.list.map((item => (
              <SavingBucket
                key={item.name}
                {...item}
                onRemove={id => this.onBucketRemove(id)}
              />
            )))
          }
          {
            this.props.list.length === 0 && !this.state.wizardDisplayed &&
            <NoSavingsCard />  
          }
        </Card.Group>
        {
          !this.state.wizardDisplayed &&
          <Button
              circular
              icon='plus'
              color='blue'
              style={{marginLeft: '1em', marginTop: '1em'}}
              onClick={() => this.toggleState()}
          />
        }
        {
          this.state.cannotRemoveWarning &&
          <Message negative>
            <p> Can't remove bucket with positive balance. Make a transfer in the Logs to put this bucket balance into 0</p>
          </Message>
        }
      </Container>
    )
  }
}

export default Summary
