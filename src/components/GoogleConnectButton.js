import React from 'react';
import GoogleIcon from 'react-icons/lib/fa/google';

class GoogleConnectButton extends React.Component {
  onClick = () => {
    this.props.onClick('google');
  };
  render() {
    return (
      <button
        className="button__social-media button--google-blue"
        onClick={this.onClick}
      >
        <div className="social-media__icon-wrapper">
          <GoogleIcon size={30} />
        </div>
        <div className="social-media__text-wrapper">
          {this.props.text}
        </div>
      </button>
    );
  }; 
};

export default GoogleConnectButton;

