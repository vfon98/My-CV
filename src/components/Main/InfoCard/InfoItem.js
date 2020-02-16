import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { refPropType } from '@stardust-ui/react-component-ref';

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

InfoItem.propTypes = {
  icon: PropTypes.string.isRequired,
  iconColor: refPropType.string,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default InfoItem;
