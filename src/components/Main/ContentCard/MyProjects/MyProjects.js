import React from 'react';
import { Segment, Label, Header, Button, Image, Icon } from 'semantic-ui-react';
import SelfProjects from './SelfProjects';

function MyProjects() {
  return (
    <Segment color='green'>
      <Label ribbon color='green'>
        My projects
      </Label>

      <SelfProjects />

      <Segment></Segment>
    </Segment>
  );
}

export default MyProjects;
