import React from 'react';
import styled from 'styled-components';
import BannerBackground from './../../../assets/images/first-page-banner.jpg';
import BannerText from './BannerText';

const Wrapper = styled.div`
  background: url(${BannerBackground}) no-repeat center/cover;
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function Banner() {
  return (
    <Wrapper>
      <BannerText />
    </Wrapper>
  );
}

export default Banner;
