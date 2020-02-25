import React from 'react';
import styled from 'styled-components';
import './styles.scss';

const StyledBannerText = styled.div`
  border: 4px double white;
  text-align: center;
  transform: translateY(-200px);
  padding: 2rem;
  /* background-color: rgba(93, 81, 121, 0.2); */
  h1 {
    font-size: 8vmin;
    padding-bottom: 0.5rem;
    border-bottom: 4px solid white;
  }
`;

const JobTitle = styled.div`
  text-align: center;
  /* text-transform: uppercase; */
  font-weight: 600;
  font-size: 4vmin;
`;

function BannerText() {
  return (
    <StyledBannerText data-aos='fade-up' data-aos-duration='800' id='banner'>
      <h1 data-aos='zoom-in-up' data-aos-duration='1500'>
        Hi, I&apos;m <span>Tô Vủ Phong</span>
      </h1>
      <JobTitle data-aos='fade-up' data-aos-duration='1200'>
        <span>Web Developer</span>
      </JobTitle>
    </StyledBannerText>
  );
}

export default BannerText;
