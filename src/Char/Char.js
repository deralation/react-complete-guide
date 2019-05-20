import React from 'react';

const char = ({ clicked, character }) => (
  <div
    style={style}
    onClick={clicked}
  >
    {character}
  </div>
);

const style = {
  display: 'inline-block',
  padding: '16px',
  margin: '16px',
  border: '1px solid black',
  textAlign: 'center',
};

export default char;
