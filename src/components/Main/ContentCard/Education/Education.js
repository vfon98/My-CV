import React from 'react';
import { Segment, Card, Image, List } from 'semantic-ui-react';
import ctuLogo from '../../../../assets/images/ctu-logo.png';
import Ribbon from '../../../SharedUI/Ribbon';

function Education() {
  return (
    <Segment color='blue' id='education'>
      <Ribbon color='blue'>Education</Ribbon>
      <Card fluid data-aos='fade-left' data-aos-duration='1500'>
        <Card.Content>
          <Image
            src={ctuLogo}
            floated='right'
            verticalAlign='middle'
            spaced='left'
            style={{ margin: 0 }}
          />

          <Card.Header style={{paddingTop: '0.6rem'}}>CAN THO UNIVERSITY, VIETNAM</Card.Header>
          <Card.Meta>Sep 2016 - Apr 2020</Card.Meta>
        </Card.Content>

        <Card.Content>
          <List bulleted relaxed>
            <List.Item data-aos='fade-left'>
              <b>Degree: </b>Bachelor
            </List.Item>
            <List.Item data-aos='fade-left'>
              <b>Major: </b>Software Engineering
            </List.Item>
            <List.Item data-aos='fade-left'>
              <b>GPA: </b>3.28 / 4.00
            </List.Item>
            <List.Item data-aos='fade-left'>
              <b>Degree grade: </b>Very Good
            </List.Item>
            <List.Item data-aos='fade-left'>
              <b>Mode of study: </b>Full-time
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    </Segment>
  );
}

export default Education;
