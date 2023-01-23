import React from 'react';
import { Grid, Segment, Header, List } from 'semantic-ui-react';
import Ribbon from '../../../SharedUI/Ribbon';

function Languages() {
  return (
    <Segment color='violet' id='languages'>
      <Ribbon color='violet'>Languages</Ribbon>
      <Grid columns='equal' padded='vertically' stackable>
        <Grid.Row stretched style={{paddingBottom: 0}}>
          <Grid.Column>
            <Segment data-aos='fade-left' data-aos-duration='1500'>
              <Header>Vietnamese</Header>
              <List bulleted relaxed>
                <List.Item data-aos='fade-up'>Mother tongue</List.Item>
              </List>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment data-aos='fade-left' data-aos-duration='1500'>
              <Header>English</Header>
              <List bulleted relaxed>
                <List.Item data-aos='fade-up'>Can read, write and understand specialized documents</List.Item>
                <List.Item data-aos='fade-up'>Good skills of listening and speaking</List.Item>
                <List.Item data-aos='fade-up'>More than 2 years learning for the IELTS test</List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Languages;
