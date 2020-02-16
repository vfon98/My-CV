import React from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react';
import MainSkills from './MainSkills';
import OtherSkills from './OtherSkills';
import AdditionalSkills from './AdditionalSkills';
import Ribbon from '../../../SharedUI/Ribbon';

function MySkills() {
  return (
    <Segment color='orange'>
      <Ribbon color='orange'>My skills</Ribbon>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          sequi quos eius delectus repellat, alias cum corporis repellendus
        </p>
        <Grid columns='equal'>
          <Grid.Row stretched>
            <Grid.Column>
              <MainSkills />
            </Grid.Column>
            <Grid.Column>
              <OtherSkills />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <AdditionalSkills />
    </Segment>
  );
}

export default MySkills;
