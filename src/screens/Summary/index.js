import Summary from './Summary'
import { connect } from 'react-redux'
import { $fetchBuckets } from './../../reducers/buckets'

const mapStateToProps = state => ({
  list: state.buckets.list
})

const mapDispatchToProps = dispatch => ({
  onPageLoad: () => dispatch($fetchBuckets())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary)
