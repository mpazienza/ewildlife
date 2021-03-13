import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';
import { AWAITING_RESPONSE, AUTHENTICATED, ANONYMOUS } from '../../constants';

// Components
import { Header } from 'semantic-ui-react';

// Create the view
class SignOutView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.checkStatus();
  }

  componentDidUpdate( prevProps ) {
    if ( prevProps.status !== this.props.status ) {
      this.checkStatus();
    }
  }

  checkStatus() {
    var { status, logout, history } = this.props;
    if (AWAITING_RESPONSE !== status) {
      
      if ( AUTHENTICATED === status ) {
        logout();
      }
      if ( ANONYMOUS === status ) {
        history.replace('/');
      }
    }
  }

  render() {
    return (
      <div className="view view-sign-out">
        <Header as="h1">Signing out...</Header>
      </div>
    );
  }
}

SignOutView.defaultProps = {
};

SignOutView.propTypes = {
  logout: PropTypes.func,
  status: PropTypes.string,
  history: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch( logoutUser() )
  };
};

const mapStateToProps = (state) => {
  return {
    status: state.auth.status
  };
};

const SignOutViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignOutView);

export default SignOutViewConnect;
