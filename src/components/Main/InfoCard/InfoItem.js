import React from 'react';
import { List } from 'semantic-ui-react';

function InfoItem({ icon, header, content }) {
  return (
    <List.Item>
      <List.Icon link name={icon} color='black' size='large' verticalAlign='middle' />
      <List.Content as='a'>
        <List.Header>{header}</List.Header>
        <List.Description>{content}</List.Description>
      </List.Content>
    </List.Item>
  );
}

export default InfoItem;
