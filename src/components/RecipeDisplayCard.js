/*
 * Display each recipe as a card
*/

import React from 'react';
import { Link } from 'react-router-dom';
import ModalRecipe from './ModalRecipe';

class RecipeDisplayCard extends React.Component {
  state = {
    openModal: false
  };
  handleOpenModal = () => {
    this.setState(() => ({ openModal: true }))
  };
  handleCloseModal = () => {
    this.setState(() => ({ openModal: false }))
  }
  render() {
    return (
      <div>
        <h3>{this.props.recipe.title}</h3>
        <h5>Prep</h5>
        {this.props.recipe.prepTime}
        <h5>Cook</h5>
        {this.props.recipe.cookTime}
        <h5>Serves</h5>
        {this.props.recipe.serves}
        <button onClick={this.handleOpenModal}>View</button>
        <Link to={`/edit/${this.props.recipe.id}`}>Edit</Link>
        <ModalRecipe 
          {...this.props.recipe}
          isOpenModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}  
        />
      </div>
    );
  };
};

export default RecipeDisplayCard;