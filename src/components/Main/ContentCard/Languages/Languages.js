import React from 'react';
import { Grid, Segment, Header, List } from 'semantic-ui-react';
import Ribbon from '../../../SharedUI/Ribbon';

function Languages() {
  return (
    <Segment color='violet'>
      <Ribbon color='violet'>Languages</Ribbon>
      <Grid columns='equal' padded='vertically'>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Header>Vietnamese</Header>
              <List bulleted relaxed>
                <List.Item>Of course</List.Item>
                <List.Item>Mother tongue</List.Item>
              </List>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Header>English</Header>
              <List bulleted relaxed>
                <List.Item>Can read, write and understand specialized documents</List.Item>
                <List.Item>Good skills of listening and speaking</List.Item>
                <List.Item>More than 2 years learning for the IELTS test</List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Languages;
