/*
 * Renders each step from the method in the modal.
*/

import React from 'react';

const ModalMethod = ({ step, stepNum }) => (
  <div>
    <h4>{`Step ${stepNum}`}</h4>
    <p>{step}</p>
  </div>
);

export default ModalMethod;