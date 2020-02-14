import React from 'react';
import About from './About/About'
import Education from './Education/Education';
import MySkills from './MySkills/MySkills';
import MyProjects from './MyProjects/MyProjects'

function ContentCard() {
  return (
    <>
      <About />
      <Education />
      <MySkills />
      <MyProjects />
    </>
  );
}

export default ContentCard;
