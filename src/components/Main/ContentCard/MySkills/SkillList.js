import React from 'react';
import { Grid, Header, List } from 'semantic-ui-react';

function SkillList({ header, items }) {
  return (
    <Grid.Column>
      <Header as='h4'>{header}</Header>
      <List bulleted>
        {items.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </Grid.Column>
  );
}

export default SkillList;
