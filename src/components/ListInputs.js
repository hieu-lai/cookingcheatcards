import React from 'react';

class ListInputs extends React.Component {
  state = {
    data: ''
  };

  onDataChange = (e) => {
    const data = e.target.value;
    this.setState(() => ({ data }));
  };

  onAddIngredient = (e) => {
    e.preventDefault();

    this.props.onChange(this.state.data);
    this.setState(() => ({ data: '' }));
  };
  
  render() {
    return (
      <div>
        <input 
          type="text"
          name="data"
          value={this.state.data}
          onChange={this.onDataChange}
        />
        <button onClick={this.onAddIngredient}>Add</button>
      </div>
    )
  }
};

export default ListInputs;