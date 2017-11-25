import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Splash from './splash'
const mapStateToProps = (state, ownProps) => {
  return {

  }
}
const mapDispatchToProps = dispatch => ({

});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(Splash));
