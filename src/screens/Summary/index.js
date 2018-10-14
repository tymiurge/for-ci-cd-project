import Summary from './Summary'
import { connect } from 'react-redux'
import { $fetchBuckets, $saveBucket } from './../../reducers/buckets'

const mapStateToProps = state => ({
  list: state.buckets.list
})

const mapDispatchToProps = dispatch => ({
  onPageLoad: () => dispatch($fetchBuckets()),
  onBucketSave: data => dispatch($saveBucket(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary)
