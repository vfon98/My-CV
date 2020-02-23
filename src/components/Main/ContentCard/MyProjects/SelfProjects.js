import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Segment, Header, Icon } from 'semantic-ui-react';
import AwesomeSlider from 'react-awesome-slider';
import OneProject from './OneProject';
import CoreStyles from 'react-awesome-slider/src/styles';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation';
import slideCustom from './slide.custom.scss';

function SelfProjects({ self_projects }) {
  return (
    <Segment data-aos='fade-left' data-aos-duration='800'>
      <Header>
        <Icon name='laptop' />
        <Header.Content>
          Self projects
          <Header.Subheader>For praticing self-taught techniques</Header.Subheader>
        </Header.Content>
      </Header>

      <AwesomeSlider
        animation='cubeAnimation'
        cssModule={[CoreStyles, AnimationStyles, slideCustom]}
      >
        {self_projects.map(project => (
          <div key={project.id}>
            <OneProject {...project} />
          </div>
        ))}
      </AwesomeSlider>
    </Segment>
  );
}

SelfProjects.propTypes = {
  self_projects: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  self_projects: state.projects.self_projects,
});

export default connect(mapStateToProps)(SelfProjects);
