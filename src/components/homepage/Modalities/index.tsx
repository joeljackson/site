import React from 'react';
import { Container } from 'react-bootstrap';
import Chevron from './chevron.svg';

import './style.scss'

export function Modalities({modalities}) {
  return (
    <Container>
      <div className='teaser'>
        <div className='content'>
          <p>
            What if achieving peak mental and physical performance was less about pushing your
            body and more about using science and technology to unlock your self to function more efficiently?
          </p>
          <p>
            Learn how to unlock your hidden potential by upgrading...
          </p>
        </div>
      </div>
      {modalities.map((value) => {
        return(
          <a href={`/modalities/${value.node.slug}`} className='modality'>
            <div className='modality-icon'>
              <img src={value.node.icon.file.url}></img>
            </div>
            <div className='modality-name'>
              <h3>{value.node.name}</h3>
            </div>
            <div className='modality-chevron'>
              <Chevron/>
            </div>
          </a>
        );
      })}
    </Container>
  );
}