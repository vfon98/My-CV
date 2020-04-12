import React from 'react';
import About from './About/About'
import Education from './Education/Education';
import MySkills from './MySkills/MySkills';
import MyProjects from './MyProjects/MyProjects'
import Languages from './Languages/Languages';

import styled from 'styled-components'
// import Experience from './Experience/Experience';

const HoverableSegment = styled.div`
  & > .segment:hover {
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15);
  }
`;

function ContentCard() {
  return (
    <HoverableSegment>
      <About />
      <Education />
      {/* <Experience /> */}
      <MySkills />
      <MyProjects />
      <Languages />
    </HoverableSegment>
  );
}

export default ContentCard;
