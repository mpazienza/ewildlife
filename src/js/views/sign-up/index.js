import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components

// Create the view
class SignUpView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-sign-up">
        <h1>Sign up</h1>
      </div>
    );
  }
}

SignUpView.defaultProps = {
};

SignUpView.propTypes = {
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const SignUpViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignUpView);

export default SignUpViewConnect;
