import React from 'react';

export default ({ text, onClick, className, backgroundColor, height, fontSize, borderRadius }) => (
  <button
    onClick={onClick}
    className={`${className} defaultBtn`}
    style={{ backgroundColor: backgroundColor, height: height, fontSize: fontSize, borderRadius: borderRadius }}
  >
    {text}
  </button>
);
