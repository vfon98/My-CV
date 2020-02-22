import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon, Segment, Divider } from 'semantic-ui-react';
import SkillBar from './SkillBar';
import { connect } from 'react-redux';

function MainSkills({ main_skills }) {
  return (
    <Segment data-aos='fade-down'>
      <Header>
        <Icon name='code' />
        <Header.Content>
          Main skills
          <Header.Subheader>The most concentrated</Header.Subheader>
        </Header.Content>
      </Header>
      <Divider />
      
      {main_skills.map(skill => {
        return <SkillBar aos='fade-right' key={skill.id} {...skill} />;
      })}
    
    </Segment>
  );
}

MainSkills.propTypes = {
  main_skills: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  main_skills: state.skills.main,
});

export default connect(mapStateToProps)(MainSkills);
