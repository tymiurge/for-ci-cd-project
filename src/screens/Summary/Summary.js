import React from 'react'
import { Card, Button, Container } from 'semantic-ui-react'
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
      wizardDisplayed: false
  }

  componentDidMount() {
    this.props.onPageLoad()
  }

  toggleState = () => this.setState({...this.state, wizardDisplayed: !this.state.wizardDisplayed})

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
              <SavingBucket key={item.name} {...item} />
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
      </Container>
    )
  }
}

export default Summary
