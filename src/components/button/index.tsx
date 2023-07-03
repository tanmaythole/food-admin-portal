import React from "react";

import styles from "./style.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className, ...props }) => {
  return (
    <button className={`${className} ${styles.btn}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
