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
      <div>
        <h3>Method</h3>
        {
          this.props.method.map((step) => (
            <Method 
              key={uuid()}
              method={step} 
              onMethodToRemove={this.props.onMethodToRemove}
            />
          ))
        }
        <ListInputs onChange={this.props.onMethodAdd}/>
      </div>
    );
  };
};

export default MethodListForm;