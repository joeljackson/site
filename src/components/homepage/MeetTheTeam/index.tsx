import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './style.scss'

export function MeetTheTeam({biohackers}) {
  return (
    <Container className='background-purple'>
      <div className="header">
        <h3>Meet our team</h3>
      </div>
      <Carousel>
       {biohackers.map((value, index) => {
          console.log(value.node);
          if(value.node.showOnHomepage) {
            return(
              <Carousel.Item>
                <img
                      className='d-block w-100'
                      src={value.node.photo.file.url}
                      alt='First slide'
                    />
                <span>{value.node.shortBio.shortBio}</span>
              </Carousel.Item>
            );
          }
       })}
      </Carousel>
    </Container>
  );
}
