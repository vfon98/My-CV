import React from 'react';
import { Header, Icon, Progress, Segment, Item, Divider } from 'semantic-ui-react';
import SkillBar from './SkillBar';
import { connect } from 'react-redux';

function WebSkills({ skills }) {
  return (
    <Segment>
      <Header>
        <Icon name='code' />
        <Header.Content>
          Main skills
          <Header.Subheader>The most concentrated</Header.Subheader>
        </Header.Content>
      </Header>
      <Divider />
      {skills.main.map(skill => {
        return <SkillBar key={skill.id} {...skill} />;
      })}
    </Segment>
  );
}

const mapStateToProps = state => ({
  skills: state.skills,
});

export default connect(mapStateToProps)(WebSkills);
