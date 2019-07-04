import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Healing from './healing.svg';
import Scale from './scale.svg';
import Chevron from './chevron.svg';

import './style.scss'
import { node } from 'prop-types';

export function Modalities({modalities}) {
  console.log(modalities);
  return (
    <Container className='get-started-cta'>
      <div className='teaser'>
        <div className='content mx-auto'>
          <p>
            What if achieving peak mental and physical performance was less about pushing your
            body and more about using science and technology to unlock your self to function more efficiently?
          </p>
          <p>
            Learn how to unlock your hidden potential by upgrading...
          </p>
        </div>
      </div>
      {modalities.map((value, index) => {
        console.log('value');
        console.log(value);
        console.log(value.node.icon.file.url)
        return(
          <div className='modality'>
            <div className='modality-icon'>
              <img src={value.node.icon.file.url}></img>
            </div>
            <div className='modality-name'>
              <h3>{value.node.name}</h3>
            </div>
            <div className='click-chevron'>
              <Chevron/>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export const query = graphql`
  query {
    allContentfulModality {
      edges {
        node {
          id
          name
          icon {
            id
            file {
              url
            }
          }
        }
      }
    }
  }
`