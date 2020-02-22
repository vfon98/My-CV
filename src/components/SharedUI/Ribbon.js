import React from 'react';
import { Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Ribbon({ color, size = 'large', children }) {
  return (
    <Label data-aos='fade-right' color={color} size={size} ribbon>
      {children}
    </Label>
  );
}

Ribbon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Ribbon;
