import React from 'react';
import { connect } from 'react-redux';
import isEmail from 'validator/lib/isEmail'; 
import { startLogin, startLogInWithEmailAndPassword } from '../actions/auth';

class LoginPage extends React.Component {
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
          <p>It's time to cook.</p>
          <form onSubmit={this.onSubmit}>
            <input type="email" name="email" />
            {this.state.errorEmail && <p>{this.state.errorEmail}</p>}
            <input type="password" name="password" />
            {this.state.errorPassword && <p>{this.state.errorPassword}</p>}
            <button>Log In</button>
          </form>  
          <button
            className="button" 
            value="google"
            onClick={this.startLogin}
          >
            Login with Google
          </button>
          <button 
            className="button" 
            value="facebook"
            onClick={this.startLogin}
          >
            Login with Facebook
          </button>
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
