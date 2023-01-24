import './styles.scss';

import { Icon } from 'semantic-ui-react';
import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const StyledBannerText = styled.div`
  border: 6px double white;
  text-align: center;
  transform: translateY(-200px);
  padding: 2rem;
  padding-bottom: 0;

  h1 {
    font-size: 8vmin;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid white;
  }
`;

const JobTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 4vmin;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
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

const title1 = "Software Engineer";
const title2 = "Front-end Developer";
const title3 = "Freelancer";
const title4 = "Blog Writer";

function BannerText() {
  return (
    <StyledBannerText data-aos='fade-up' data-aos-duration='800' id='banner'>
      <h1 data-aos='zoom-in-up' data-aos-duration='1500'>
        Hi, I am <span>Phong To</span>
      </h1>
      <JobTitle data-aos='fade-up' data-aos-duration='1200'>
        <Typewriter
          options={{
            delay: 60,
            deleteSpeed: 10,
            autoStart: true,
            loop: true,
          }}
          onInit={writer => {
            writer
              .typeString(title1)
              .pauseFor(1000)
              .deleteChars(title1.length)
              .typeString(title2)
              .pauseFor(1000)
              .deleteChars(title2.length)
              .typeString(title3)
              .pauseFor(1000)
              .deleteChars(title3.length)
              .typeString(title4)
              .pauseFor(1000)
              .start();
          }}
        />
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
