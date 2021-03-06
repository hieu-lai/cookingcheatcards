/*
 * Renders method list inputs
*/ 

import React from 'react';
import uuid from 'uuid';
import ListInputs from './ListInputs'; 
import Method from './Method';


class MethodListForm extends React.Component {
  render() { 
    return (
      <div className="method-container">
        <h3>Method</h3>
        {this.props.hasMethod === 0 && <p className="form__error">Please provide at least one step.</p>}
        {
          this.props.method.map((step, stepNum) => (
            <Method 
              key={uuid()}
              stepNum={stepNum+1}
              step={step} 
              onMethodToRemove={this.props.onMethodToRemove}
            />
          ))
        }
        <ListInputs 
          placeholder="Add each step here!"
          onChange={this.props.onMethodAdd}
        />
      </div>
    );
  };
};

export default MethodListForm;