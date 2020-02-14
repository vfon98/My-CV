import React from 'react';
import { Segment, Label, Card, Image, List } from 'semantic-ui-react';
import ctuLogo from '../../../../assets/images/ctu-logo.png';

function Education() {
  return (
    <Segment raised color='blue'>
      <Label color='blue' size='large' ribbon>
        Education
      </Label>
      <Card fluid>
        <Card.Content>
          <Image
            src={ctuLogo}
            floated='right'
            verticalAlign='middle'
            spaced='left'
            style={{ margin: 0 }}
          />
          <Card.Header>CAN THO UNIVERSITY</Card.Header>
          <Card.Meta>2016 - Present</Card.Meta>
          {/* <Card.Description>BACHELOR DEGREE</Card.Description> */}
        </Card.Content>
        <Card.Content>
          <List bulleted relaxed>
            <List.Item><b>Degree: </b>Bachelor</List.Item>
            <List.Item><b>Major: </b>Software Engineering</List.Item>
            <List.Item><b>GPA: </b>3.16 / 4.00</List.Item>
            <List.Item><b>Degree grade: </b>Good</List.Item>
          </List>
        </Card.Content>
      </Card>
    </Segment>
  );
}

export default Education;
