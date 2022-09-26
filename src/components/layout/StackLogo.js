import React from 'react'

export const StackLogo = ({ logo, page }) => {
  return (
    
    <div className='stack-logo'>
      <a target='_blank' href={page}>
        <img src={logo} alt="It's a logo." />
      </a>
    </div>
    
  )
}

