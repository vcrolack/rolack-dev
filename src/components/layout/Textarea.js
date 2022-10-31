import React from "react";

export const Textarea = ({ type, labelText, rows, cols, name }) => {
  return (
    <div className="container-input">
      <label htmlFor="">{labelText}</label>
      <textarea name={name} rows={rows} cols={cols} type={type}></textarea>
    </div>
  );
};
