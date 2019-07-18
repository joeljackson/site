import React from 'react';
import { Container } from 'react-bootstrap';
import Plan from './plan.svg';
import Schedule from './schedule.svg';
import Goal from './goal.svg';

export function YourUpgradeJourney() {
  return (
    <Container className='your-upgrade-journey'>
      <div className='row mx-auto text-center'>
        <h2>Your Upgrade Journey</h2>
      </div>
      <div className='row text-center'>
        <div className='col-12 col-md-3 py-4'>
          <h3 className='font-weight-bold'>1. Schedule your free cell health analysis</h3>
          <Schedule />
        </div>
        <div className='col-12 col-md-3 py-4'>
          <h3 className='font-weight-bold'>2. Set your goals</h3>
          <Goal />
        </div>
        <div className='col-12 col-md-3 py-4'>
          <h3 className='font-weight-bold'>3. Get a plan</h3>
          <Plan />
        </div>
      </div>
    </Container>
  );
}
