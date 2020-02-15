import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import Ribbon from '../../../SharedUI/Ribbon';

function About() {
  return (
    <Segment raised color='purple'>
      <Ribbon color='purple'>About me</Ribbon>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          neque consectetur, ipsa soluta quibusdam iure dicta consequatur quia
          maiores atque eligendi iste quaerat libero necessitatibus veritatis
          excepturi sit molestiae alias?
        </p>
        <Container textAlign='right'>
          If debugging is the process of removing software bugs, then
          programming must be the process of putting them in – Edsger Dijkstra
        </Container>
      </Container>
    </Segment>
  );
}

export default About;
