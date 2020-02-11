import React from 'react';
import styled from 'styled-components';

const StyledBannerText = styled.div`
  border: 2px solid white;
  padding: 2rem;
  background-color: lightgreen;
  z-index: 100;
  &:before {
    content: '';
    /* bckground-color: lightblue;
    z-index: -100;

    position: absolute;
    width: 150%;
    height: 8rem;
    transform: translate(-50%, 0) rotate(-20deg) */
  }
`;

function BannerText() {
  return (
    <StyledBannerText>
      <h1>Hi I'm Tô Vủ Phong !</h1>
      <div>Web developer</div>
    </StyledBannerText>
  );
}

export default BannerText;
