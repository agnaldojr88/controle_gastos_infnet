import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, value, onChange, type = "text", required = false }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    type={type}
    required={required}
    variant="outlined"
    fullWidth
    margin="normal"
  />
);

export default InputField;
