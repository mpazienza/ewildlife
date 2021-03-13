import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AUTHENTICATED, AWAITING_RESPONSE } from '../../constants';

export default (ChildComponent) => {
  class AuthenticatedComponent extends Component {
    constructor(props) {
      super(props);
    }

    componentDidUpdate( ) {
      let { isAuthenticated, status } = this.props;

      // If the component is not authenticated and not waiting for a response the go to login page
      if (!isAuthenticated && AWAITING_RESPONSE !== status) {
        this.redirectLogin();
      }
    }

    redirectLogin() {
      const { history } = this.props;
      history.replace({ pathname: "/sign-in", search: this.props.history.location.search });
    }
  
    render() {
      if ( this.props.isAuthenticated ) {
        return <ChildComponent { ...this.props }/>;
      } else {
        return null;
      }
    }
  }
  
  AuthenticatedComponent.defaultProps = {
  };
  
  AuthenticatedComponent.propTypes = {
    status: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    history: PropTypes.object
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      status: state.auth.status,
      isAuthenticated: ( AUTHENTICATED === state.auth.status )
    };
  };
  
  const AuthenticatedComponentConnect = connect(
    mapStateToProps, 
    mapDispatchToProps
  )(AuthenticatedComponent);

  return withRouter( AuthenticatedComponentConnect );
};
