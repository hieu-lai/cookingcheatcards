import React from 'react';
import PlusIcon from 'react-icons/lib/fa/plus-circle';

class ListInputs extends React.Component {
  state = {
    data: ''
  };

  onDataChange = (e) => {
    const data = e.target.value;
    this.setState(() => ({ data }));
  };

  onDataAdd = (e) => {
    e.preventDefault();
    
    if (this.state.data) {
      this.props.onChange(this.state.data);
      this.setState(() => ({ data: '' }));
    }
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.onDataAdd}>
        <input 
          className="text-input text-input--stretch"
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.data}
          onChange={this.onDataChange}
        />
        <PlusIcon className="icon-add" onClick={this.onDataAdd} />
        </form> 
      </div>
    )
  }
};

export default ListInputs;