import React from "react";

export const Textarea = ({ type, labelText, rows, cols }) => {
  return (
    <div className="container-input">
      <label htmlFor="">{labelText}</label>
      <textarea rows={rows} cols={cols} type={type}></textarea>
    </div>
  );
};
