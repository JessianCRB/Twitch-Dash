import React from 'react';
import styles from './Button.module.css';
// import { Navigate } from 'react-router-dom';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
