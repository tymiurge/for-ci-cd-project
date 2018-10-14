import React from 'react'
import { Card, Statistic, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { warnings } from 'utils'

class SavingBucket extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    meta: PropTypes.string,
    amount: PropTypes.number.isRequired,
    onRemove: PropTypes.func
  }

  static defaultProps = {
    meta: '',
    onRemove: () => warnings.notToUse('SavingBucket', 'onRemove')
  }

  render() {
    const { name, meta, amount } = this.props
    return (
      <Card style={{width: '15em'}}>
        <Card.Content style={{height: '10em'}}>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{meta}</Card.Meta>
          <Card.Description>
            <Statistic>
              <Statistic.Value>{amount}</Statistic.Value>
            </Statistic>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button 
            circular
            icon='trash' 
            color='red'
            onClick={ () => this.props.onRemove(amount)}
          />
        </Card.Content>
      </Card>
    )
  }
}

export default SavingBucket
