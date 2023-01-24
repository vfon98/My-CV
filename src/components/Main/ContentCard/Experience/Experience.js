import React from 'react';
import { Segment } from 'semantic-ui-react';
import Ribbon from '../../../SharedUI/Ribbon';
import appcoreLogo from '../../../../assets/images/appcore-logo.png';
import ExperienceItem from './ExperienceItem';

const experiences = [{
  id: 1,
  companyName: 'Appcore Co., Ltd.',
  date: 'Nov 2019 - Feb 2020',
  position: 'Front-end Intern',
  location: 'Tan Binh, Ho Chi Minh City, Vietnam',
  logo: appcoreLogo,
  items: [
    'ReactJs, NextJs (Server Side Rendering), React Router',
    'State manger with Redux, Redux-thunk and Redux-saga',
    'RESTful API, JWT Authentication, Stripe API, Axios',
    'Web converting with SCSS',
    'Firebase authentication, Firebase push notification',
    'Basic SEO, PWA (Progressive Web App)'
  ],
  skills: ['ReactJs', 'Redux', 'Redux Thunk/Saga', 'REST API', 'Google Firebase']
}]

function Experience() {
  return (
    <Segment color='teal' id='experience'>
      <Ribbon color='teal'>Experiences</Ribbon>

      {experiences.map((experienceItem) => (
        <ExperienceItem key={experienceItem.id} {...experienceItem} />
      ))}
    </Segment>
  );
}

export default Experience;
