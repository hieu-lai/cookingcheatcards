/*
 * Renders the modal to view the recipe.
*/

import React from 'react';
import Modal from 'react-modal';
import uuid from 'uuid';
import ModalIngredient from './ModalIngredient';
import ModalMethod from './ModalMethod';

const ModalRecipe = (props) => (
  <Modal
    isOpen={props.isOpenModal}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Recipe"
    closeTimeoutMS={200}
  >
    <h1>{props.title}</h1>
    <h4>Prep</h4>
    <h3>{props.prepTime}</h3>
    <h4>Cook</h4>
    <h3>{props.cookTime}</h3>
    <h4>Serves</h4>
    <h3>{props.serves}</h3>
    <h2>Ingredients</h2>
    {
      props.ingredients.map(
        (ingredient) => <ModalIngredient key={uuid()} ingredient={ingredient} />
      )
    }
    <h2>Method</h2>
    {
      props.method.map(
        (step, index) => <ModalMethod key={uuid()} step={step} stepNum={index+1} />
      )
    }
  </Modal>
);

export default ModalRecipe;