import React from 'react'

export function Banner({ image }) {
  return (
    <>
      <div className="container-banner">
        <img src={image} />
      </div>
    </>
  )
}
