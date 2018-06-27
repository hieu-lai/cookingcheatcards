/*
 * Renders each step on the add and edit recipe page.
*/

import React from 'react';
import RemoveIcon from 'react-icons/lib/fa/minus-circle';

class Method extends React.Component {
  onMethodToRemove = (e) => {
    this.props.onMethodToRemove(this.props.step);
  }
  render() {
    return (
      <div className="method">
        <p className="method__info">Step {this.props.stepNum}: {this.props.step}</p>
        <RemoveIcon className="icon-remove" onClick={this.onMethodToRemove} />
      </div>
    )
  }
};

export default Method;