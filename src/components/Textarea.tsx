import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText: string;
  isRequired: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
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
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        ></textarea>
      </div>
    )
  );
};
