import React from 'react';
import FacebookIcon from 'react-icons/lib/fa/facebook-square'; 

class FacebookConnectButton extends React.Component {
  onClick = () => {
    this.props.onClick('facebook');
  };
  render() {
    return (
      <button
        className="button__social-media button--facebook-blue"
        onClick={this.onClick}
      >
        <div className="social-media__icon-wrapper">
          <FacebookIcon size={30} />
        </div>
        <div className="social-media__text-wrapper">
          {this.props.text}
        </div>
      </button>
    );
  }; 
};

export default FacebookConnectButton;