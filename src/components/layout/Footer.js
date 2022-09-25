import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="description">
          <p>&copy;ROLACK DEV - 2022</p> 
        </div>
        <div className="social-networks">
          <FontAwesomeIcon size='3x' icon={['fab', 'github']} />
          <FontAwesomeIcon size='3x' icon={['fab', 'linkedin']} />
          <FontAwesomeIcon size='3x' icon={['fab', 'twitter']} />
        </div>
      </div>
    </div>
  )
}