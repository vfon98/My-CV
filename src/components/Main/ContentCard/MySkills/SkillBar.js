import React from 'react';
import { Progress, Item } from 'semantic-ui-react';

function OneSkill({ header, percent, color = 'violet' }) {
  return (
    <Item>
      <Item.Content>
        <Item.Header as='strong'>{header}</Item.Header>
        <Progress
          percent={percent}
          // progress
          color={color}
          size='tiny'
          label={percent+'%'}
        />
      </Item.Content>
    </Item>
  );
}

export default OneSkill;
