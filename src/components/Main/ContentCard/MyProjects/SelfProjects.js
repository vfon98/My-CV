import React from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Icon, Button } from 'semantic-ui-react';
import AwesomeSlider from 'react-awesome-slider';
import OneProject from './OneProject';
import CoreStyles from 'react-awesome-slider/src/styles';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation';
import slideCustom from './slide.custom.scss';

function SelfProjects({ self_projects }) {
  console.log(self_projects);
  return (
    <Segment>
      <Header>
        <Icon name='laptop' />
        <Header.Content>
          Self projects
          <Header.Subheader>For learning purpose</Header.Subheader>
        </Header.Content>
      </Header>

      <AwesomeSlider
        animation='foldOutAnimation'
        cssModule={[CoreStyles, AnimationStyles, slideCustom]}
      >
        {self_projects.map(project => (
          <div key={project.id}>
            <OneProject {...project} />
          </div>
        ))}

        {/* <div>
          <Button>2</Button>
        </div>
        <div>
          <Button>3</Button>
        </div> */}
      </AwesomeSlider>
    </Segment>
  );
}

const mapStateToProps = state => ({
  self_projects: state.projects.self_projects,
});

export default connect(mapStateToProps)(SelfProjects);
