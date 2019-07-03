import React from 'react';
import { Container } from 'react-bootstrap';
import Healing from './healing.svg';
import Scale from './scale.svg';
import Chevron from './chevron.svg';

import './style.scss'

export function Modalities() {
  return (
    <Container className='get-started-cta'>
      <div className="teaser">
        <div className="content mx-auto">
          <p>
            What if achieving peak mental and physical performance was less about pushing your
            body and more about using science and technology to unlock your self to function more efficiently?
          </p>
          <p>
            Learn how to unlock your hidden potential by upgrading...
          </p>
        </div>
      </div>
      <div className="modality">
        <div class="modality-icon">
          <Healing/>
        </div>
        <div class="modality-name">
          <h3>Recovery</h3>
        </div>
        <div class="click-chevron">
          <Chevron/>
        </div>
      </div>
      <div className="modality">
        <div class="modality-icon">
          <Scale/>
        </div>
        <div class="modality-name">
          <h3>Weight Loss</h3>
        </div>
        <div class="click-chevron">
          <Chevron/>
        </div>
      </div>
    </Container>
  );
}
