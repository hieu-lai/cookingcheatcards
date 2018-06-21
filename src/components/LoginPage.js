import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLogInWithEmailAndPassword } from '../actions/auth';

class LoginPage extends React.Component {
  startLogin = (e) => {
    const authProvider = e.target.value;
    this.props.startLogin(authProvider);
  };
  onSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    this.props.startLogInWithEmailAndPassword(email, password);
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Boilerplate</h1>
          <p>Tag line for app.</p>
          <form onSubmit={this.onSubmit}>
            <input type="email" name="email" />
            <input type="password" name="password" />
            <button>Continue</button>
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
