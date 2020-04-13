import React from 'react';
import { Segment } from 'semantic-ui-react';
import Ribbon from '../../../SharedUI/Ribbon';
import Summary from './Summary';
import Quote from './Quote';

function About() {
  return (
    <Segment color='purple' id='about-me'>
      <Ribbon color='purple'>About me</Ribbon>

      <Segment data-aos='fade-left' data-aos-duration='1000'>
        <Summary />
      </Segment>

      <Segment data-aos='fade-left'>
        <Quote />
      </Segment>
    </Segment>
  );
}

export default About;
