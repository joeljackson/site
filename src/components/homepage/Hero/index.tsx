import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import './style.scss';

export function Hero() {
  return (
    <div className='homepage-hero'>
      <Jumbotron className='bg-cover text-white' >
        <h1 className='jumbotron-text'>
          Does reaching top cognitive and physical performance seem elusive?
        </h1>
      </Jumbotron>
    </div>
  )
}