import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

class LoginPage extends React.Component {
  startLogin = (e) => {
    const authProvider = e.target.value;
    this.props.startLogin(authProvider);
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Boilerplate</h1>
          <p>Tag line for app.</p>
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
  startLogin: (authProvider) => dispatch(startLogin(authProvider))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
