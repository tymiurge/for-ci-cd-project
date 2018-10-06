import React from 'react'
import { Card, Statistic, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { warnings } from 'utils'

class SavingBucket extends React.Component {

    static propTypes = {
        header: PropTypes.string.isRequired,
        meta: PropTypes.string,
        value: PropTypes.number.isRequired,
        onRemove: PropTypes.func
    }

    static defaultProps = {
        meta: '',
        onRemove: () => warnings.notToUse('SavingBucket', 'onRemove')
    }

    render() {
        const { header, meta, value } = this.props
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{header}</Card.Header>
                    <Card.Meta>{meta}</Card.Meta>
                    <Card.Description>
                        <Statistic>
                            <Statistic.Value>{value}</Statistic.Value>
                        </Statistic>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button 
                        circular
                        icon='trash' 
                        color='red'
                        onClick={ () => this.props.onRemove()}
                    />
                </Card.Content>
            </Card>
        )
    }
}

export default SavingBucket
