import React, { ReactElement, ReactNode } from "react";

import Typography from "../typography";

import styles from "./style.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: ReactNode | ReactElement;
}

const Input: React.FC<InputProps> = ({ label, leftIcon, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      {label && <Typography variant="title">{label}</Typography>}
      <div className={styles.inputBox}>
        {leftIcon}
        <input {...props} />
      </div>
    </div>
  );
};

export default Input;
