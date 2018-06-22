import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import FacebookIcon from 'react-icons/lib/fa/facebook-square'; 
import GoogleIcon from 'react-icons/lib/fa/google';
import { startLogin, startSignUpWithEmailAndPassword } from '../actions/auth';

class SignUpPage extends React.Component {
  state = {
    errorEmail: '',
    errorPassword: ''
  };
  startLogin = (e) => {
    const authProvider = e.target.value;
    this.props.startLogin(authProvider);
  };
  onSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if (!isEmail(email)) {
      this.setState(() => ({ errorEmail: "Hmmm...that doesn't look like an email address."}))
    } else {
      this.setState(() => ({ errorEmail: ''}))
    }
    if (password.length < 6) {
      this.setState(() => ({ errorPassword: 'Your password is too short! You need 6+ characters.'}))
    } else {
      this.setState(() => ({ errorPassword: ''}))
    }
    if (isEmail(email) && password.length >= 6) {
      this.setState(() => ({
        errorEmail: '',
        errorPassword: ''
      }));
      this.props.startSignUpWithEmailAndPassword(email, password)
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/email-already-in-use') {
            this.setState(() => ({ errorEmail: "Deja vu! That email's taken. Forgot your password?"}))
          }
      });
    }
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Welcome to Cook's Cheat Cards</h1>
          <p className="box-layout__subtitle">Never forget your favourite recipes.</p>
          <div className="box-layout__credential-wrapper">
            <form onSubmit={this.onSubmit}>
              <input type="text" className="text-input__credential" placeholder="Email" name="email" />
              {this.state.errorEmail && <p className="box-layout__error">{this.state.errorEmail}</p>}
              <input type="password" className="text-input__credential" placeholder="Enter your password" name="password" />
              {this.state.errorPassword && <p className="box-layout__error">{this.state.errorPassword}</p>}
              <div>
                <button className="button--red">Continue</button>
              </div>
            </form> 
            <h5 className="box-layout__text">OR</h5> 
            <button
              className="button__social-media button--google-blue" 
              value="google"
              onClick={this.startLogin}
            >
              <div className="social-media__icon-wrapper">
                <GoogleIcon size={30} />
              </div>
              <div className="social-media__text-wrapper">
                Continue with Google
              </div>
            </button>
            <button 
              className="button__social-media button--facebook-blue" 
              value="facebook"
              onClick={this.startLogin} 
            >
              <div className="social-media__icon-wrapper">
                <FacebookIcon size={30} />
              </div>
              <div className="social-media__text-wrapper">
                Continue with Facebook
              </div>
            </button>          
            <Link className ="button--grey" to="/login">Log In</Link>
          </div>  
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (authProvider) => dispatch(startLogin(authProvider)),
  startSignUpWithEmailAndPassword: (email, password) => dispatch(startSignUpWithEmailAndPassword(email, password))
});

export default connect(undefined, mapDispatchToProps)(SignUpPage);
