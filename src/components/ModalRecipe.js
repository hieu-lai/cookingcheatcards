/*
 * Renders the modal to view the recipe.
*/

import React from 'react';
import Modal from 'react-modal';
import uuid from 'uuid';
import CloseIcon from 'react-icons/lib/fa/times-circle';
import ModalIngredient from './ModalIngredient';
import ModalMethod from './ModalMethod';

const ModalRecipe = (props) => (
  <Modal
    className="modal"
    isOpen={props.isOpenModal}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Recipe"
    closeTimeoutMS={200}
  >
    <CloseIcon className="icon-close-modal" onClick={props.handleCloseModal}/>
    <h1 className="modal__title">{props.title}</h1>
    <div className="modal-info">
      <div className="modal-info__item">
        <h4>Prep</h4>
        <h3>{`${props.prepTime}m`}</h3>
      </div>
      <div className="modal-info__item modal-info__item--borderless">
        <h4>Cook</h4>
        <h3>{`${props.cookTime}m`}</h3>
      </div>
      <div className="modal-info__item">
        <h4>Serves</h4>
        <h3>{props.serves}</h3>
      </div>
    </div>  
    <div className="content-flex-container">
      <div className="ingredients-container">
        <h2>Ingredients</h2>
        {
          props.ingredients.map(
            (ingredient) => <ModalIngredient key={uuid()} ingredient={ingredient} />
          )
        }
      </div>
      <div className="method-container">
        <h2>Method</h2>
        {
          props.method.map(
            (step, index) => <ModalMethod key={uuid()} step={step} stepNum={index+1} />
          )
        }
      </div>
    </div>  
  </Modal>
);

export default ModalRecipe;