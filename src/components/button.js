import React from 'react';

import "./button.css";

const Button = ({children, onClick, disabled, subtle}) => (
  <button className={`button ${subtle && 'subtle'}`} onClick={onClick} disabled={disabled} >
    {children}
  </button>
)

export default Button;
