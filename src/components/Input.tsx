import React from "react";

interface InputProps {
  labelText: string;
  type: string;
  name: string;
  isRequired: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLElement>) => void;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  labelText,
  type,
  name,
  isRequired,
  value,
  onChange,
  onBlur,
  placeholder,
}) => {
  return (
    (isRequired && (
      <div className="container-input">
        <label htmlFor="">{labelText}</label>
        <input
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          required
          name={name}
          type={type}
          value={value}
        />
      </div>
    )) || (
      <div className="container-input">
        <label htmlFor="">{labelText}</label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          type={type}
          value={value}
        />
      </div>
    )
  );
};
