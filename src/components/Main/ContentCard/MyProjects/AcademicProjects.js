import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/styles';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation';
import SlideCustom from './slide.custom.scss';
import OneProject from './OneProject';

function AcademicProjects({ academic_projects }) {
  return (
    <Segment data-aos='fade-left' data-aos-duration='800'>
      <Header>
        <Icon name='university' />
        <Header.Content>
          Academic projects
          <Header.Subheader>
            Based on knowledge learing at university
          </Header.Subheader>
        </Header.Content>
      </Header>

      <AwesomeSlider
        animation='cubeAnimation'
        cssModule={[CoreStyles, AnimationStyles, SlideCustom]}
      >
        {academic_projects.map(project => (
          <div key={project.id}>
            <OneProject {...project} />
          </div>
        ))}
      </AwesomeSlider>
    </Segment>
  );
}

AcademicProjects.propTypes = {
  academic_projects: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  academic_projects: state.projects.academic_projects,
});

export default connect(mapStateToProps)(AcademicProjects);
