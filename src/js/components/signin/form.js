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

    var email = this.emailRef.current.value;
    var password = this.passwordRef.current.value;

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

    return(
      <form onSubmit={ this.handleEmailLogin }>
        { error && <div className='error-text'><p>Hmm... We didn&apos;t recognize that Email/Password.</p></div>}
           <div className='field-group'>
             <input type='email' className='field-text' ref={ this.emailRef } />
             <label>Email</label>
           </div>
           <div className='field-group'>
             <input type='password' className='field-text' ref={ this.passwordRef } />
             <label>Password</label>
           </div>
         <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
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