import Logs from './Logs'
import { connect } from 'react-redux'
import {  $fetchEntries } from './../../reducers/entries'

const mapStateToProps = state => ({
  list: state.entries.list
})

const mapDispatchToProps = dispatch => ({
  onPageLoad: () => dispatch($fetchEntries())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs)
