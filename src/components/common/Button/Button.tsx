import React from 'react';

import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    red?: boolean;
    type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, red = false, type = 'button' /* valor padrão */ }) => {
  return (
    <button 
    type={type} 
    onClick={onClick} 
    className={`${styles.button} ${red && styles.redButton}`}
    >
        {children}
    </button>
  );
};

export default Button;