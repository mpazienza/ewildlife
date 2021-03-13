import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { Container, Header } from 'semantic-ui-react';
import SignInForm from '../../components/signin/form';

// Create the view
class SignInView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-sign-in">
        <Header as="h1">Sign In</Header>

        <Container>
          <SignInForm/>
        </Container>
      </div>
    );
  }
}

SignInView.defaultProps = {
};

SignInView.propTypes = {
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const SignInViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignInView);

export default SignInViewConnect;
