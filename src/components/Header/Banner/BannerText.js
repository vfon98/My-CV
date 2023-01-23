import React from 'react';
import styled from 'styled-components';
import './styles.scss';
import { Icon } from 'semantic-ui-react';

const StyledBannerText = styled.div`
  border: 6px double white;
  text-align: center;
  transform: translateY(-200px);
  padding: 2rem;
  padding-bottom: 0;
  /* background-color: rgba(93, 81, 121, 0.2); */
  h1 {
    font-size: 8vmin;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid white;
  }
`;

const JobTitle = styled.div`
  text-align: center;
  /* text-transform: uppercase; */
  font-weight: 600;
  font-size: 4vmin;
`;

const IconWrapper = styled.div`
  padding: 1em 0;
  .icon {
    /* font-size: 0.9rem; */
    font-size: 3vmin;
    transition: transform 0.5s;
  }
  .icon:hover {
    transform: translateY(-4px);
  }
`;

function BannerText() {
  return (
    <StyledBannerText data-aos='fade-up' data-aos-duration='800' id='banner'>
      <h1 data-aos='zoom-in-up' data-aos-duration='1500'>
        Hi, I&apos;m <span>Phong To</span>
      </h1>
      <JobTitle data-aos='fade-up' data-aos-duration='1200'>
        <span>Web Developer</span>
      </JobTitle>
      <IconWrapper>
        <Icon name='html5' color='orange' />
        <Icon name='css3 alternate' color='blue' />
        <Icon name='js' color='yellow' />
        <Icon name='react' color='teal' />
        <Icon name='node js' color='green' />
      </IconWrapper>
    </StyledBannerText>
  );
}

export default BannerText;
