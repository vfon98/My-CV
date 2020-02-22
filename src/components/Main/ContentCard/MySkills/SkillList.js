import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, List } from 'semantic-ui-react';

function SkillList({ header, items }) {
  return (
    <Grid.Column>
      <Header data-aos='fade-right' as='h4'>{header}</Header>
      <List bulleted>
        {items.map((item, index) => (
          <List.Item data-aos='fade-up' key={index}>{item}</List.Item>
        ))}
      </List>
    </Grid.Column>
  );
}

SkillList.propTypes = {
  header: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default SkillList;
