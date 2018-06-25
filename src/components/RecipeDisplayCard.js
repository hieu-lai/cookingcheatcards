/*
 * Display each recipe as a card
*/

import React from 'react';
import { Link } from 'react-router-dom';
import ViewIcon from 'react-icons/lib/fa/eye';
import EditIcon from 'react-icons/lib/fa/edit';
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
      <div className="card">
        <h3 className="card__title">{this.props.recipe.title}</h3>
        <div className="card-info">
          <div className="card-info__item">
            <h5>Prep</h5>
            {`${this.props.recipe.prepTime}m`}
          </div>
          <div className="card-info__item card-info__item--border">
            <h5>Cook</h5>
            {`${this.props.recipe.cookTime}m`}
          </div>
          <div className="card-info__item">
            <h5>Serves</h5>
            {this.props.recipe.serves}
          </div>
        </div>
        <div className="card-action">
          <div className="card-action__item card-action__item--left" onClick={this.handleOpenModal}>
            <ViewIcon size={32} />
          </div>
          <Link className="card-action__item card-action__item--right" to={`/edit/${this.props.recipe.id}`}>
            <EditIcon size={32} />
          </Link> 
        </div>  
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