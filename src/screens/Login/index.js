import Login from './Login'
import { connect } from 'react-redux'
import { $loginUser } from './../../reducers/login'

const mapStateToProps = state => ({
  confirmed: state.login.confirmed,
  //errors: state.login.errors
})

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch($loginUser(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
