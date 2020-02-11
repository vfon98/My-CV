import React from 'react';
import styled from 'styled-components';
import BannerBackground from './../../../assets/images/first-page-banner.jpg';
import BannerText from './BannerText';

const RedText = styled.div`
  background: url(${BannerBackground}) no-repeat center/cover;
  min-width: 100vh;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function Banner() {
  return (
    <RedText>
      <BannerText />
    </RedText>
  );
}

export default Banner;
