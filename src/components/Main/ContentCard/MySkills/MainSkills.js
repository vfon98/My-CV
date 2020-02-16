import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon, Segment, Divider, Item } from 'semantic-ui-react';
import SkillBar from './SkillBar';
import { connect } from 'react-redux';

function MainSkills({ main_skills }) {
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
      <Item.Group>
        {main_skills.map(skill => {
          return <SkillBar key={skill.id} {...skill} />;
        })}
      </Item.Group>
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
