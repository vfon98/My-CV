import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import MainSkills from './MainSkills';
import OtherSkills from './OtherSkills';
import AdditionalSkills from './AdditionalSkills';
import Ribbon from '../../../SharedUI/Ribbon';
import styled from 'styled-components';

const StyledText = styled.p`
  margin-top: 1em;
  font-size: 1rem;
`;

function MySkills() {
  return (
    <Segment color='orange' id='skills'>
      <Ribbon color='orange'>My skills</Ribbon>

      <StyledText data-aos='fade-down'>
        I&apos;ve been mostly focusing on Front-end as my favorite. The others are
        also familiar, but I am not digging into it a lot. These
        self-evaluations based on time-consuming, accumulated knowledge,
        proficiency, and confidence in each of them. Forgive me if they didn&apos;t meet your expectations!
      </StyledText>

      <Grid columns='equal' stackable>
        <Grid.Row stretched>
          <Grid.Column>
            <MainSkills />
          </Grid.Column>
          <Grid.Column>
            <OtherSkills />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <AdditionalSkills />
    </Segment>
  );
}

export default MySkills;
