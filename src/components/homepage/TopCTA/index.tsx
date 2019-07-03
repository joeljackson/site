import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PerformanceIcon from './performance.svg';

import './style.scss'

export function TopCTA() {
  return (
    <Container className='get-started-cta'>
      <div className='details'>
        <div className='icon'>
          <PerformanceIcon/>
        </div>
        <div className='actions'>
          <h2 className='text-uppercase'>Get started</h2>
          <p>Get a custom date driven plan to becoming the best you.</p>
        </div>
      </div>
      <div className='cta'>
        <div className='get-started mx-auto'>
          <a href='https://app.upgradelabs.com/consult'
            className='text-uppercase btn btn-primary btn-block'>START UPGRADING</a>
        </div>
      </div>
      <hr/>
    </Container>
  );
}
