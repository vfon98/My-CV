import React from 'react';
import { Segment, Label, Container, Grid, Divider, List, Header } from 'semantic-ui-react';
import MainSkills from './MainSkills';
import OtherSkills from './OtherSkills';
import AdditionalSkills from './AdditionalSkills';

function MySkills() {
  return (
    <Segment color='orange'>
      <Label ribbon size='large' color='orange'>
        My skills
      </Label>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          sequi quos eius delectus repellat, alias cum corporis repellendus
        </p>
        <Grid>
          <Grid.Column width={8}>
            <MainSkills />
          </Grid.Column>
          <Grid.Column width={8}>
            <OtherSkills />
          </Grid.Column>
        </Grid>
      </Container>
      <AdditionalSkills />
    </Segment>
  );
}

export default MySkills;
