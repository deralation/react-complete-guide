import React from 'react';

const validation = ({ inputLength }) => {
  let validationMessage = 'text long enough';

  if (inputLength <= 5) {
    validationMessage = 'text too short!!!';
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
