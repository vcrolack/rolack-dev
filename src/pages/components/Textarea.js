import React from "react";

export const Textarea = ({
  type,
  labelText,
  rows,
  cols,
  name,
  onChange,
  onBlur,
  isRequired,
  value,
  placeholder,
}) => {
  return (
    (isRequired && (
      <div className="container-input">
        <label htmlFor="">{labelText}</label>
        <textarea
          placeholder={placeholder}
          name={name}
          rows={rows}
          cols={cols}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required
        ></textarea>
      </div>
    )) || (
      <div className="container-input">
        <label htmlFor="">{labelText}</label>
        <textarea
          name={name}
          rows={rows}
          cols={cols}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        ></textarea>
      </div>
    )
  );
};
