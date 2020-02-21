import React from 'react';
import { Container, Header } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
  font-size: 1.1em;
  p {
    margin: 0.6rem 0;
  }
`;

function Summary() {
  return (
    <StyledContainer>
      <Header as='h4'>SUMMARY</Header>
      <p>
        I am currently in my last year of studying Software Engineering at Can
        Tho University.<br />
        Among various types of IT jobs, I soon realized that web
        development would be my way in the long term.
      </p>
      <p>
        I am highly interested in Javascript, then I firstly started at
        Front-end development and ReactJs has been chosen as my leading-edge. I
        can also work with NodeJs and MongoDB that give me a little hope to be a
        Full-stack JS developer in a far-off future, if possible.
      </p>
      <p>
        Making up for the lack of practical experiences, I&apos;ve been focusing
        on the fundamental knowledge, the ability of self-taught, team working
        skills and the awareness of writing human-readable code.
      </p>
    </StyledContainer>
  );
}

export default Summary;
