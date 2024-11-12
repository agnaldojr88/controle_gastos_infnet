// src/components/Button.jsx
import * as React from 'react';
import Button from '@mui/material/Button';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} variant="contained" >{children}</button>
  );
};

export default Button;
