import React from 'react'
import PropTypes from 'prop-types';

import { Card, Image, List } from 'semantic-ui-react';

function ExperienceItem({ logo, companyName, date, position, location, items, skills }) {
  return (
    <Card fluid data-aos='fade-left' data-aos-duration='1500'>
      <Card.Content>
        <Image
          src={logo}
          floated='right'
          verticalAlign='middle'
          spaced='left'
          style={{ margin: 0, maxHeight: '3.5em' }}
        />

        <Card.Header style={{ paddingTop: '0.6rem' }}>
          {companyName}
        </Card.Header>
        <Card.Meta>{date}</Card.Meta>
      </Card.Content>

      <Card.Content>
        <List bulleted relaxed>
          <List.Item data-aos='fade-left'>
            <b>Position: </b>{position}
          </List.Item>
          <List.Item data-aos='fade-left'>
            <b>Location: </b>{location}
          </List.Item>
          <List.Item data-aos='fade-left'>
            <b>What I have learnt</b>
            <List.List>
              {items.map((item, index) => (
                <List.Item key={index}>{item}</List.Item>
              ))}
            </List.List>
          </List.Item>
          <List.Item data-aos='fade-left'>
            <b>Skills: </b>{skills.join(' · ')}
          </List.Item>
        </List>
      </Card.Content>
    </Card>
  )
}

ExperienceItem.propTypes = {
  logo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  skills: PropTypes.arrayOf(PropTypes.string)
}

export default ExperienceItem