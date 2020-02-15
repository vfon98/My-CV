import React from 'react';
import { Segment } from 'semantic-ui-react';
import SelfProjects from './SelfProjects';
import AcademicProjects from './AcademicProjects';
import Ribbon from '../../../SharedUI/Ribbon';

function MyProjects() {
  return (
    <Segment color='green'>
      <Ribbon color='green'>My projects</Ribbon>

      <SelfProjects />
      <AcademicProjects />
    </Segment>
  );
}

export default MyProjects;
