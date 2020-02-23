import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

function InfoItem({ icon, iconColor = 'black', header, content, link }) {
  return (
    <List.Item>
      <List.Icon
        link
        name={icon}
        color={iconColor}
        size='large'
        verticalAlign='middle'
      />
      <List.Content as='a' href={link} target='_blank'>
        <List.Header>{header}</List.Header>
        <List.Description>{content}</List.Description>
      </List.Content>
    </List.Item>
  );
}

InfoItem.propTypes = {
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default InfoItem;
