import React from 'react';
import { List } from 'semantic-ui-react';

function InfoItem({ icon, iconColor = 'black', header, content }) {
  return (
    <List.Item>
      <List.Icon
        link
        name={icon}
        color={iconColor}
        size='large'
        verticalAlign='middle'
      />
      <List.Content as='a'>
        <List.Header>{header}</List.Header>
        <List.Description>{content}</List.Description>
      </List.Content>
    </List.Item>
  );
}

export default InfoItem;
