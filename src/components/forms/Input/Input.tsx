import React from 'react';

import { Field, ErrorMessage } from 'formik';

import styles from './Input.module.css';

interface InputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    errors?: string;
    touched?: boolean;
};

const Input: React.FC<InputProps> = ({ label, name, type = 'text', placeholder, errors, touched }) => {
    return (
        <fieldset className={styles.formGroup}>
            <label htmlFor={name} className={styles.label}>
                {label}:
            </label>
            <Field 
                type={type} 
                id={name} 
                name={name}
                placeholder={placeholder}
                className={`${styles.input} ${touched && errors && styles.error}`} />
            <ErrorMessage name={name} component="div" className={styles.errorMsg} />
        </fieldset>
    );
};

export default Input;