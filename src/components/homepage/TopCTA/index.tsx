import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './style.scss'

export function TopCTA() {
  return (
    <Container className='get-started-cta'>
      <div className='details'>
        <div className='icon'></div>
        <div className='actions'>
          <h2 className='text-uppercase'>Get started</h2>
          <p>Get a custom date driven plan to becoming the best you.</p>
        </div>
      </div>
      <div className='cta'>
        <a href='https://app.upgradelabs.com/consult'
          className='text-uppercase btn btn-primary mx-auto'>START UPGRADING</a>
      </div>
    </Container>
  );
}
