import React from 'react'
import { Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class ValidatedInput extends React.Component {

  static propTypes = {
    value: PropTypes.string,
    validators: PropTypes.arrayOf(PropTypes.func),
    fieldBinding: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    value: '',
    validators: [],
    fieldBinding: null,
    onChange: () => {},
    placeholder: '',
    icon: '',
    type: 'text'
  }

  state = {
    value: this.props.value,
    valid: true
  }

  onChange = value => {
    this.setState(
      {...this.state, value},
      () => this.props.onChange(value, this.props.fieldBinding)
    )
  }

  onBlur = () => {
    const valid = this.props.validators.reduce(
      (accumulator, current) => {
        return accumulator && current(this.state.value)
      },
      true
    )
    this.setState(
      {...this.state, valid},
      () => this.props.onChange(this.state.value, this.props.fieldBinding, valid)
    )
  }

  render() {
    let _props = Object.assign({
      fluid: true, 
      placeholder: this.props.placeholder,
      value: this.state.value,
      className: this.state.valid ? '' : 'error-state',
      type: this.props.type,
      onBlur: () => this.onBlur(),
      onChange: e => this.onChange(e.target.value)
    })
    if (this.props.icon !== '') {
      _props = {..._props, icon: this.props.icon, iconPosition: 'left'}
    }
    return (<Input {..._props} />)
  }
}

export default ValidatedInput
