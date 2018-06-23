import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail'; 
import { startLogin, startLogInWithEmailAndPassword } from '../actions/auth';
import GoogleConnectButton from './GoogleConnectButton';
import FacebookConnectButton from './FacebookConnectButton';

class LoginPage extends React.Component {
  state = {
    errorEmail: '',
    errorPassword: ''
  };
  startLogin = (authProvider) => {
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
      this.props.startLogInWithEmailAndPassword(email, password)
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/user-not-found') {
            this.setState(() => ({ errorEmail: 'The email you entered does not belong to any account.'}))
          } else if (errorCode === 'auth/wrong-password') {
            this.setState(() => ({ errorPassword: 'The password you entered is incorrect.'}))
          }
      });
    }
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Log in to see your recipes</h1>
          <p className="box-layout__subtitle">It's time to cook.</p>
          <div className="box-layout__credential-wrapper">
            <form onSubmit={this.onSubmit}>
              <input type="email" className="text-input__credential" placeholder="Email" name="email" />
              {this.state.errorEmail && <p className="box-layout__error">{this.state.errorEmail}</p>}
              <input type="password" className="text-input__credential" placeholder="Enter your password" name="password" />
              {this.state.errorPassword && <p className="box-layout__error">{this.state.errorPassword}</p>}
              <button className="button--red">Log In</button>
            </form>  
            <h5 className="box-layout__text">OR</h5>
            <GoogleConnectButton 
              onClick={this.startLogin} 
              text="Log in with Google" 
            />
            <FacebookConnectButton 
              onClick={this.startLogin} 
              text="Log in with Facebook"
            />
            <p className="box-layout__subtext">
              Don't have a Cook's Cheat Cards account?
              <span><Link className="box-layout__link" to="/">Sign Up!</Link></span>
            </p>
          </div>  
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (authProvider) => dispatch(startLogin(authProvider)),
  startLogInWithEmailAndPassword: (email, password) => dispatch(startLogInWithEmailAndPassword(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
