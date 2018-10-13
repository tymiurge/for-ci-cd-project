import Register from './Register'
import { connect } from 'react-redux'
import { $registerUser } from './../../reducers/registration'

const mapStateToProps = state => ({
  confirmed: state.registration.confirmed
})

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch($registerUser(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
