import React from 'react';
import { Segment, Label, Container } from 'semantic-ui-react';

function About() {
  return (
    <Segment raised color='purple'>
      <Label ribbon size='large' color='purple'>
        About me
      </Label>
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
