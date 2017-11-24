import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UsersShow from './users_show';

const mapStateToProps = (state, ownProps) => {
  return {
    //will be state.entities.user
  }
}

const mapDispatchToProps = dispatch => ({
  //will be bookmark and register 
  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
(UsersShow));
