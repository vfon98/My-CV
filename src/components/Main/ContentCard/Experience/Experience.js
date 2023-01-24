import React from "react";
import { Segment } from "semantic-ui-react";
import Ribbon from "../../../SharedUI/Ribbon";
import ExperienceItem from "./ExperienceItem";

import appcoreLogo from "../../../../assets/images/appcore-logo.png";
import ptnLogo from "../../../../assets/images/ptn-logo.webp";
import tpsLogo from "../../../../assets/images/tps-logo.webp";

const experiences = [
  {
    id: 1,
    companyName: "PTN Global Corp.",
    date: "Nov 2020 - present | Full-time",
    position: "Software Engineer",
    location: "Ninh Kieu, Can Tho, Vietnam",
    logo: ptnLogo,
    items: [
      "Regarded as a key member of an AI-powered voice content delivery platform development team",
      "Specializing in Front-end side architecture, code reviewing, mentoring, and deployment",
      "Experienced in managing a AWS SaaS system: EC2, Lambda, API Gateway, DynamoDB, S3, OpenSearch, etc.",
      "Experiencing in AI-powered functionalities integration with web application codebase",
    ],
    skills: [
      "ReactJs",
      "Typescript",
      "Redux-toolkit",
      "Amazon Web Service (AWS)",
      "Python",
    ],
  },
  {
    id: 2,
    companyName: "TPS Software",
    date: "May 2020 - Oct 2020 | Full-time",
    position: "Web Developer",
    location: "Tan Binh, Ho Chi Minh City, Vietnam",
    logo: tpsLogo,
    items: [
      "Responsible for developing and maintaining webapp for a fintech company in the Bahamas.",
      "Implemented interactive UIs using Angular from Adobe XD prototypes.",
      "Developed REST APIs provided for both webapp and mobile application (iOS/Android)."
    ],
    skills: [
      "Java Sprint Boot",
      "Hibernate",
      "Material-UI",
      "Angular"
    ],
  },
  {
    id: 3,
    companyName: "Appcore Co., Ltd.",
    date: "Nov 2019 - Feb 2020 | Full-time",
    position: "Front-end Intern",
    location: "Ninh Kieu, Can Tho, Vietnam",
    logo: appcoreLogo,
    items: [
      "ReactJs, NextJs (Server Side Rendering), React Router",
      "State manger with Redux, Redux-thunk and Redux-saga",
      "RESTful API, JWT Authentication, Stripe API, Axios",
      "Web converting with SCSS",
      "Firebase authentication, Firebase push notification",
      "Basic SEO, PWA (Progressive Web App)",
    ],
    skills: [
      "ReactJs",
      "Redux",
      "Redux Thunk/Saga",
      "REST API",
      "Google Firebase",
    ],
  },
];

function Experience() {
  return (
    <Segment color="teal" id="experience">
      <Ribbon color="teal">Experiences</Ribbon>

      {experiences.map(experienceItem => (
        <ExperienceItem key={experienceItem.id} {...experienceItem} />
      ))}
    </Segment>
  );
}

export default Experience;
