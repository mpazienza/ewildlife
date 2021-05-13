import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attemptLoginWithEmail } from '../../actions/auth';

// Components

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleEmailLogin = this.handleEmailLogin.bind( this );
    this.handleForgotPassword = this.handleForgotPassword.bind( this );

    this.state = {
      email: null,
      password: null
    };
  }

  handleEmailLogin( e ) {
    e.preventDefault();

    var email = this.emailRef.current.inputRef.current.value;
    var password = this.passwordRef.current.inputRef.current.value;

    this.props.attemptLogin(email, password);
  }

  handleForgotPassword( e ) {
    e.preventDefault();
  }

  _renderError() {
    var { error } = this.props;
    var op = [];

    if ( error ) {
      console.error(error);
    }

    return op;
  }

  render() {
    var { error } = this.props;

    return([]
      // <Form onSubmit={ this.handleEmailLogin }>
      //   { error && <div className="error-text"><p>Hmm... We didn&apos;t recognize that Email/Password.</p></div>}
      //     <Form.Field>
      //       <label>Email</label>
      //       <Input type='email' ref={ this.emailRef } />
      //     </Form.Field>
      //     <Form.Field>
      //       <label>Password</label>
      //       <Input type='password' ref={ this.passwordRef } />
      //     </Form.Field>
      //   <Button type='submit' fluid primary >Submit</Button>
      // </Form>
    );
  }
}

SignInForm.defaultProps = {
  fn: () => {},
  handleRegister: () => {},
};

SignInForm.propTypes = {
  attemptLogin: PropTypes.func,
  status: PropTypes.string,
  error: PropTypes.string
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: ( email, password ) => dispatch( attemptLoginWithEmail( email, password ) ),
  };
};

const mapStateToProps = (state) => {
  return {
    status: state.auth.status,
    error: state.auth.error
  };
};

const SignInFormConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignInForm);

export default SignInFormConnect;