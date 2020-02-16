import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon, Segment, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SkillBar from './SkillBar';

function OtherSkills({ skills }) {
  return (
    <Segment>
      <Header>
        <Icon name='bug' />
        <Header.Content>
          Other skills
          <Header.Subheader>Owning fundamental knowledge</Header.Subheader>
        </Header.Content>
      </Header>
      <Divider />
      {skills.others.map(skill => {
        return <SkillBar key={skill.id} {...skill} />
      })}
    </Segment>
  );
}

OtherSkills.propTypes = {
  skills: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  skills: state.skills,
});

export default connect(mapStateToProps)(OtherSkills);
