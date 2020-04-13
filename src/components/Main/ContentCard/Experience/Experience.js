import React from 'react';
import { Segment, Card, Image, List } from 'semantic-ui-react';
import Ribbon from '../../../SharedUI/Ribbon';
import appcoreLogo from '../../../../assets/images/appcore-logo.png';

function Experience() {
  return (
    <Segment color='teal' id='experience'>
      <Ribbon color='teal'>Experience</Ribbon>
      <Card fluid data-aos='fade-left' data-aos-duration='1500'>
        <Card.Content>
          <Image
            src={appcoreLogo}
            floated='right'
            verticalAlign='middle'
            spaced='left'
            style={{ margin: 0, maxHeight: '3.5em' }}
          />

          <Card.Header style={{ paddingTop: '0.6rem' }}>
            Appcore Co.,Ltd.
          </Card.Header>
          <Card.Meta>1/2020 - 2/2020</Card.Meta>
        </Card.Content>

        <Card.Content>
          <List bulleted relaxed>
            <List.Item data-aos='fade-left'>
              <b>Position: </b>Front-end Intern
            </List.Item>
            <List.Item data-aos='fade-left'>
              <b>Duration: </b>2 months
            </List.Item>
            <List.Item data-aos='fade-left'>
              <b>What I have learnt</b>
              <List.List>
                <List.Item> ReactJs, NextJs (Server Side Rendering), React Router </List.Item>
                <List.Item>State manger with Redux, Redux-thunk and Redux-saga</List.Item>
                <List.Item>RESTful API, JWT Authentication, Stripe API, Axios</List.Item>
                <List.Item>Web converting with SCSS</List.Item>
                <List.Item>Firebase authentication, Firebase push notification</List.Item>
                <List.Item>Basic SEO, PWA (Progressive Web App)</List.Item>
              </List.List>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    </Segment>
  );
}

export default Experience;
