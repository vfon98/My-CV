import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SkillList from './SkillList';

function AdditionalSkills({ skills }) {
  const { database, editors, tools } = skills.additional;

  return (
    <Segment data-aos='fade-right' data-aos-duration='1500'>
      <Grid columns={3} stackable>
        <Grid.Row>
          <SkillList {...database} />
          <SkillList {...editors} />
          <SkillList {...tools} />
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

AdditionalSkills.propTypes = {
  skills: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ skills: state.skills });

export default connect(mapStateToProps)(AdditionalSkills);
