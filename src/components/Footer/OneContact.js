import React from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-10%) scale(1.05);
  }
`;

function OneContact({ image, link }) {
  return (
    <StyledImage>
      <Image
        data-aos='flip-right'
        data-aos-duration='1000'
        // data-aos-offset='0'
        src={image}
        as='a'
        target='_blank'
        href={link}
      />
    </StyledImage>
  );
}

OneContact.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default OneContact;
