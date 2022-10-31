import React from 'react'

export const Input = ({labelText, type, name}) => {
  return (
    <div className="container-input">
    <label htmlFor="">{labelText}</label>
    <input name={name} type={type} />
  </div>
  )
}
