import React from 'react';

export default ({ src, width, height, className, alt, button, onClick }) => (
  <img alt={alt} src={src} width={width} height={height} className={className} style={button ? { cursor: 'pointer' } : {}} onClick={onClick} />
);
