"use client";

import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, onKeyDown }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown} 
      className={styles.input}
    />
  );
};

export default Input;
