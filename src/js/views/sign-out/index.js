import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components

// Create the view
class SignOutView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-sign-out">
        <p>Sign Out Page</p>
      </div>
    );
  }
}

SignOutView.defaultProps = {
};

SignOutView.propTypes = {
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const SignOutViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignOutView);

export default SignOutViewConnect;
