import React from 'react';

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
          type="text"
          value={this.state.data}
          onChange={this.onDataChange}
        />
        <button>Add</button>
        </form>
      </div>
    )
  }
};

export default ListInputs;