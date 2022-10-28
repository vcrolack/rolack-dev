import React from 'react'

export const Input = ({labelText, type}) => {
  return (
    <div className="container-input">
    <label htmlFor="">{labelText}</label>
    <input type={type} />
  </div>
  )
}
