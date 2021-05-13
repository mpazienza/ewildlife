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
      history.replace({ pathname: '/intake', search: history.location.search });
    }
  }

  render() {
    return (
      <div className="view view-sign-in">
        <h1>Sign In</h1>

        {/* <Segment className="segment-form">
          <SignInForm/>
        </Segment> */}
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
