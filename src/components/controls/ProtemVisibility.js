import React from 'react'
import PropTypes from 'prop-types'

class ProtemVisibility extends React.Component {

  static propTypes = {
    period: PropTypes.number,
    onDisappear: PropTypes.func
  }

  static defaultProps = {
    period: 2,
    onDisappear: () => {}
  }

  state = {
    visible: true
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({...this.state, visible: false}),
      this.props.period * 1000
    )
  }

  render() {
    if (this.state.visible) {
      return (
        <div>
          { this.props.children }
        </div>
      )
    }
    return (<div />)
  }
}

export default ProtemVisibility
