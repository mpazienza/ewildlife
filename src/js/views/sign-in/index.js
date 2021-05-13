import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AUTHENTICATED } from '../../constants';

// Components
import SignInForm from '../../components/signin/form';

// Create the view
class SignInView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.validate();
  }

  componentDidUpdate( prevProps ) {
    if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
      this.validate();
    }
  }

  validate(){
    let { isAuthenticated, history } = this.props;

    // If the component is authenticated and not waiting for a response the go to front page
    if (isAuthenticated) {
      history.replace({ pathname: '/intakes', search: history.location.search });
    }
  }

  render() {
    return (
      <div className="view view-sign-in">
        <div className="section-form">
          <h2>Sign In</h2>
          <SignInForm/>
        </div>
      </div>
    );
  }
}

SignInView.defaultProps = {
};

SignInView.propTypes = {
  isAuthenticated: PropTypes.bool,
  history: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: ( AUTHENTICATED === state.auth.status )
  };
};

const SignInViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignInView);

export default SignInViewConnect;
