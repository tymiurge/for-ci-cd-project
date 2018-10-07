import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import { arrays } from 'utils'

class RowsStack extends React.Component {

    static propTypes = {
        maxRows: PropTypes.number,
        celled: PropTypes.bool,
        divided: PropTypes.bool
    }

    static defaultProps = {
        maxRows: 10,
        celled: false,
        divided: false
    }

    render() {
        let columns = this.props.children.length
        if (columns >this.props.maxRows) {
            columns = this.props.maxRows
        }
        const chunks = arrays.chunkArray(this.props.children, columns)

        return (
            <Grid columns={columns} celled={this.props.celled} divided={this.props.divided}>
                {
                    chunks.map((chunk, idx) => (
                        <Grid.Row key={idx}>
                            {
                                chunk.map((child, childIdx) => (
                                    <Grid.Column key={`row_${idx}_child_${childIdx}`}>
                                        { child }
                                    </Grid.Column>
                                ))
                            }
                        </Grid.Row>
                    ))
                }
            </Grid>
        )
    }
}

export default RowsStack
