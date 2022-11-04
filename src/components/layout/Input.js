import React from "react";

export const Input = ({
  labelText,
  type,
  name,
  isRequired,
  value,
  onChange,
  onBlur,
  placeholder
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
