/*
 * Renders each step on the add and edit recipe page.
*/

import React from 'react';

class Method extends React.Component {
  onMethodToRemove = (e) => {
    e.preventDefault();

    this.props.onMethodToRemove(this.props.method);
  }
  render() {
    return (
      <div>
        <p>{this.props.method}</p>
        <button 
          onClick={this.onMethodToRemove}
        >
          Remove
        </button>
      </div>
    )
  }
};

export default Method;