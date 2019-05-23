import React from 'react';

export default ({ text, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {text}
  </button>
);
