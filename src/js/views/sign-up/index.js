import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { Header } from 'semantic-ui-react';

// Create the view
class SignUpView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-sign-up">
        <Header as="h1">Sign up</Header>
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
