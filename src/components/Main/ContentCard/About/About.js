import React from 'react';
import { Segment } from 'semantic-ui-react';
import Ribbon from '../../../SharedUI/Ribbon';
import Summary from './Summary';
import Quote from './Quote';

function About() {
  return (
    <Segment raised color='purple'>
      <Ribbon color='purple'>About me</Ribbon>

      <Segment data-aos='fade-right'>
        <Summary />
      </Segment>

      <Segment data-aos='fade-left'>
        <Quote />
      </Segment>
    </Segment>
  );
}

export default About;